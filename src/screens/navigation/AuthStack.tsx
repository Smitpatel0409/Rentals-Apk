import { StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../auth/LoginScreen';
import RegisterScreen from '../auth/RegisterScreen';
import OtpScreen from '../auth/OtpScreen';

export type AuthStackParamList = {
    Login: undefined;
    Register: undefined;
    Otp: undefined;
};

const AuthStack = () => {
    const Stack = createNativeStackNavigator<AuthStackParamList>();
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
            initialRouteName='Login'
        >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='Register' component={RegisterScreen} />
            <Stack.Screen
                name='Otp'
                component={OtpScreen}
                options={{
                    headerShown: true,
                    headerTitle: '',
                    headerTransparent: true,
                    headerStyle: {
                        backgroundColor: 'transparent'
                    }
                }}
            />
        </Stack.Navigator>
    );
};

export default AuthStack;

const styles = StyleSheet.create({});
