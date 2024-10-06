import {
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React, { useState } from 'react';
import CommonTextField from '../../components/common/CommonTextField';
import CommonText from '../../components/common/CommonText';
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
import CustomButton from '../../components/common/CustomButton';
import { LIGHT_COLORS } from '../../constants/colors';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationProp } from '@react-navigation/native';

const gradientColors = [...lightColors].reverse();

// Define the stack types
type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
};

const LoginScreen = ({ navigation }: { navigation: NavigationProp<AuthStackParamList> }) => {
    console.log(Dimensions.get('window').height);
    const [mobileNumber, setMobileNumber] = useState('');
    const [loading, setLoading] = useState(false);

    const handleLogin = () => {};

    return (
        // <KeyboardAvoidingView
        //   style={{flex: 1}} // Ensure the view takes up full height
        //   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        //   keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 60} // Try with 0 offset for now
        // >
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
                        <Pressable style={styles.socialsBtn}>
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
        // </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    spacer: {
        marginTop: hp('46%'),
        backgroundColor: 'transparent'
    },
    container: {
        paddingTop: 8,
        paddingHorizontal: 16,
        backgroundColor: 'transparent'
    },
    gradient: {
        paddingTop: wp('12.4%'),
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
