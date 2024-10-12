import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import AuthStack from './AuthStack';

export type AppStackParamList = {
    TabBar: undefined;
};

const AppStack = () => {
    const Stack = createNativeStackNavigator<AppStackParamList>();

    return (
        <Stack.Navigator
            initialRouteName='TabBar'
            screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
        >
            <Stack.Screen name='TabBar' component={BottomTabs} />
        </Stack.Navigator>
    );
};

export default AppStack;

const styles = StyleSheet.create({});
