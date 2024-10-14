import { PermissionsAndroid, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';
import { OtpInput, OtpInputRef } from 'react-native-otp-entry';
import { LIGHT_COLORS } from '../../constants/colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthStackParamList } from './LoginScreen';
import { NavigationProp } from '@react-navigation/native';
import { getHash, removeListener, startOtpListener } from 'react-native-otp-verify';
import CustomButton from '../../components/common/CustomButton';

const OtpScreen = ({ navigation }: { navigation: NavigationProp<AuthStackParamList> }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [otpCode, setOtpCode] = useState('');
    const otpRef = useRef<OtpInputRef | null>(null);

    const requestSmsPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.RECEIVE_SMS,
                {
                    title: 'Receive SMS Permission',
                    message: 'This app needs access to your SMS to read the OTP',
                    buttonPositive: 'OK'
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('SMS permission granted');
            } else {
                console.log('SMS permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    const storeData = async () => {
        setIsLoading(true);
        try {
            await AsyncStorage.setItem('isLoggedIn', 'true');
            navigation.reset({
                index: 0,
                routes: [{ name: 'App' }]
            });
        } catch (error) {
            // Error saving data
        } finally {
            setIsLoading(false);
        }
    };

    const handleOtpVerify = () => {
        storeData();
    };

    useEffect(() => {
        requestSmsPermission();
    }, []);

    useEffect(() => {
        getHash()
            .then((hash) => {
                // use this hash in the message.
                console.log(hash);
            })
            .catch(console.log);

        const startListener = () => {
            startOtpListener((message) => {
                // extract the otp using regex e.g. the below regex extracts 4 digit otp from message
                const otpMatch = /(\d{4})/g.exec(message);
                if (otpMatch) {
                    setOtpCode(otpMatch[1]);
                    otpRef.current?.setValue(otpMatch[1]);

                    startListener();
                }
            });
        };

        startListener();

        return () => removeListener();
    }, []);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.container}>
                <CustomText variant='h1' fontFamily={FONTS.SEMI_BOLD}>
                    Enter Your OTP Code
                </CustomText>
                <CustomText color='#999999' variant='body'>
                    Verfiy your phone number and get access to exclusive rentals features
                </CustomText>

                <OtpInput
                    type='numeric'
                    numberOfDigits={4}
                    focusColor={LIGHT_COLORS.PRIMARY}
                    textInputProps={{
                        accessibilityLabel: 'One-Time Password'
                    }}
                    theme={{
                        containerStyle: styles.otpContainer,
                        pinCodeContainerStyle: styles.emptyOtpContainer,
                        pinCodeTextStyle: { fontFamily: FONTS.MEDIUM, color: 'black' },
                        filledPinCodeContainerStyle: styles.filledOtpContainer
                    }}
                    ref={otpRef}
                    onTextChange={(text) => {
                        text.length !== 4 ? setIsDisabled(true) : setIsDisabled(false);
                    }}
                    onFilled={(otpCode) => {
                        setIsDisabled(false);
                    }}
                />

                <View style={styles.sendOtpAgainContainer}>
                    <CustomText color='#cccccc'>Didn't receive an OTP code?</CustomText>
                    <Pressable onPress={() => {}}>
                        <CustomText color={LIGHT_COLORS.PRIMARY} fontFamily={FONTS.SEMI_BOLD}>
                            Send code again
                        </CustomText>
                    </Pressable>
                </View>

                <View style={styles.verifyBtnContainer}>
                    <CustomButton
                        title='Verify'
                        onPress={handleOtpVerify}
                        loading={isLoading}
                        disabled={isDisabled}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default OtpScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 18,
        paddingTop: hp('8%')
    },
    otpContainer: {
        marginTop: hp('4%'),
        justifyContent: 'space-between'
    },
    emptyOtpContainer: {
        borderColor: '#cccccc',
        minWidth: wp('20%'),
        justifyContent: 'center',
        alignItems: 'center'
    },
    filledOtpContainer: {
        borderColor: LIGHT_COLORS.SECONDARY
    },
    sendOtpAgainContainer: {
        width: '100%',
        marginTop: hp('2%'),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    verifyBtnContainer: {
        marginTop: 30
    }
});
