import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import AuthStack from './AuthStack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();

    const MainStack = () => {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Main' component={BottomTabs} />
            </Stack.Navigator>
        );
    };
    return (
        <GestureHandlerRootView>
            <NavigationContainer>
                <SafeAreaView style={{ flex: 1 }}>
                    <StatusBar barStyle={'dark-content'} backgroundColor='white' />
                    <AuthStack />
                    {/* <MainStack /> */}
                </SafeAreaView>
            </NavigationContainer>
        </GestureHandlerRootView>
    );
};

export default StackNavigator;

const styles = StyleSheet.create({});
