import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';
import CustomButton from '../../components/common/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

type ProfileParamList = {
    Auth: undefined;
};

const ProfileScreen = ({ navigation }: { navigation: NavigationProp<ProfileParamList> }) => {
    const [isLoading, setIsLoading] = useState(false);

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            // Remove the login token
            await AsyncStorage.removeItem('isLoggedIn');
            await GoogleSignin.signOut();
            setTimeout(() => {
                setIsLoading(false);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Auth', params: { screen: 'Login' } }]
                });
            }, 1000);
        } catch (error) {
            console.error('Error during logout:', error);
        } finally {
        }
    };

    return (
        <View>
            <CustomText variant='h2' fontFamily={FONTS.SEMI_BOLD}>
                ProfileScreen
            </CustomText>
            <CustomButton
                disabled={false}
                title='Logout'
                onPress={handleLogout}
                loading={isLoading}
            />
        </View>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
