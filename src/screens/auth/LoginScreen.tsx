import {
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    useColorScheme,
    View
} from 'react-native';
import React, { useState } from 'react';
import { FONT_SIZES } from '../../constants/fontSizes';
import { FONTS } from '../../constants/fonts';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import { SPACING } from '../../constants/spacing';
import { Pressable, ScrollView } from 'react-native-gesture-handler';
import PropertiesSlider from '../../components/PropertiesSlider';
import { lightColors } from '../../constants/constants';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../../components/common/CustomText';
import CustomTextField from '../../components/common/CustomTextField';
import { DARK_COLORS, LIGHT_COLORS } from '../../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationProp } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signInWithGoogle } from '../../utils/googleAuth';
import CustomButton from '../../components/common/CustomButton';

const gradientColors = [...lightColors].reverse();

// Define the stack types
export type AuthStackParamList = {
    Otp: undefined;
    Register: undefined;
    App: undefined;
};

const LoginScreen = ({ navigation }: { navigation: NavigationProp<AuthStackParamList> }) => {
    const [mobileNumber, setMobileNumber] = useState('');
    const [loading, setLoading] = useState(false);

    const storeData = async () => {
        setLoading(true);
        try {
            await AsyncStorage.setItem('isLoggedIn', 'true');
        } catch (error) {
            // Error saving data
        } finally {
            setLoading(false);
        }
    };

    const handleLogin = () => {
        navigation.navigate('Otp');
    };

    const handleSignInWithGoogle = async () => {
        const isLoggedInWithGoogle = await signInWithGoogle();
        if (isLoggedInWithGoogle) {
            storeData();
            navigation.reset({
                index: 0,
                routes: [{ name: 'App' }]
            });
        }
    };

    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: 'white' }}
            keyboardShouldPersistTaps='handled'
            automaticallyAdjustKeyboardInsets={true}
            alwaysBounceVertical={false}
        >
            <PropertiesSlider />
            <View style={styles.spacer}>
                <LinearGradient colors={gradientColors} style={styles.gradient} />
                <View style={styles.container}>
                    <View>
                        <CustomText
                            variant='h1'
                            fontFamily={FONTS.SEMI_BOLD}
                            fontSize={FONT_SIZES.HUGE}
                        >
                            Hi, Welcome!👋
                        </CustomText>
                    </View>
                    <View style={{ paddingRight: SPACING.LARGE, marginBottom: 10 }}>
                        <CustomText variant='h7' fontFamily={FONTS.REGULAR}>
                            Access your account and explore properties effortlessly
                        </CustomText>
                    </View>
                    <CustomTextField
                        maxLength={10}
                        placeholder='Enter mobile number'
                        inputMode='numeric'
                        onChangeText={(text) => {
                            setMobileNumber(text.slice(0, 10));
                        }}
                        onClear={() => {
                            setMobileNumber('');
                        }}
                        value={mobileNumber}
                        leftIcon={
                            <CustomText variant='h6' fontFamily={FONTS.SEMI_BOLD}>
                                + 91
                            </CustomText>
                        }
                    />
                    {/* <Button
            style={{height: hp('7%'), borderRadius: 12, marginTop: 16}}
            mode="contained"
            buttonColor="#1246bc"
            disabled={true}
            contentStyle={{
              height: hp('7%'),
              justifyContent: 'center',
            }}>
            Sign in
          </Button> */}
                    <CustomButton
                        disabled={mobileNumber.length != 10}
                        title='Continue'
                        onPress={handleLogin}
                        loading={loading}
                    />
                    <View style={styles.signupContainer}>
                        <CustomText color='#ccc'>Don't have an account?</CustomText>
                        <Pressable
                            onPress={() => {
                                navigation.navigate('Register');
                            }}
                        >
                            <CustomText color={LIGHT_COLORS.PRIMARY} fontFamily={FONTS.SEMI_BOLD}>
                                Signup
                            </CustomText>
                        </Pressable>
                    </View>
                    <View style={styles.separator}>
                        <View style={styles.divider} />
                        <CustomText color='#999999' fontFamily={FONTS.SEMI_BOLD}>
                            Or Login with:
                        </CustomText>
                        <View style={styles.divider} />
                    </View>

                    <View style={styles.socialsContainer}>
                        <Pressable style={styles.socialsBtn} onPress={handleSignInWithGoogle}>
                            <Image
                                style={{ width: '50%', height: '50%' }}
                                resizeMode='cover'
                                source={require('../../assets/images/google-logo.png')}
                            />
                        </Pressable>
                        <View style={styles.socialsBtn}>
                            <Icon name='more-horizontal' size={24} color='black' />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    spacer: {
        marginTop: hp('46%'),
        backgroundColor: 'transparent'
    },
    container: {
        paddingTop: 4,
        paddingHorizontal: 16,
        backgroundColor: '#ffffff'
    },
    gradient: {
        height: hp('6%'),
        width: '100%'
    },
    signupContainer: {
        flex: 1,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    separator: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 6,
        gap: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    divider: {
        backgroundColor: '#ccc',
        height: 1,
        flexGrow: 1
    },
    socialsContainer: {
        flex: 1,
        paddingHorizontal: wp('30%'),
        marginVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    socialsBtn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: hp('5.5%'),
        width: hp('5.5%'),
        borderRadius: 50,
        borderColor: '#999999',
        borderWidth: 0.5,
        overflow: 'hidden'
    }
});
