import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabs from './BottomTabs';
import AuthStack from './AuthStack';
import SearchScreen from '../main/SearchScreen';
import Notifications from '../main/NotificationsScreen';
import NotificationsScreen from '../main/NotificationsScreen';
import PropertyDetailsScreen from '../main/PropertyDetailsScreen';

export type AppStackParamList = {
    TabBar: undefined;
    Search: undefined;
    Notifications: undefined;
    PropertyDetails: undefined;
};

const AppStack = () => {
    const Stack = createNativeStackNavigator<AppStackParamList>();

    return (
        <Stack.Navigator
            initialRouteName='TabBar'
            screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
        >
            <Stack.Screen name='TabBar' component={BottomTabs} />
            <Stack.Screen
                name='Search'
                component={SearchScreen}
                options={{ animation: 'slide_from_bottom' }}
            />
            <Stack.Screen name='Notifications' component={NotificationsScreen} />
            <Stack.Screen
                name='PropertyDetails'
                component={PropertyDetailsScreen}
                options={{ animation: 'fade' }}
            />
        </Stack.Navigator>
    );
};

export default AppStack;

const styles = StyleSheet.create({});
