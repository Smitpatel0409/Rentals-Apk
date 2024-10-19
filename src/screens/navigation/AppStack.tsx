import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import ChangePassword from '../../components/pages/profiles/ChangePassword';
import Favorites from '../../components/pages/profiles/Favorites';
import HelpCenter from '../../components/pages/profiles/HelpCenter';
import MyAddress from '../../components/pages/profiles/MyAddress';
import MyCard from '../../components/pages/profiles/MyCard';
import MyProfile from '../../components/pages/profiles/MyProfile';
import NotificationsSettings from '../../components/pages/profiles/Notifications';
import PrivacyPolicy from '../../components/pages/profiles/PrivacyPolicy';
import BottomTabs from './BottomTabs';
import AuthStack from './AuthStack';
import SearchScreen from '../main/SearchScreen';
import NotificationsScreen from '../main/NotificationsScreen';
import PropertyDetailsScreen from '../main/PropertyDetailsScreen';

export type AppStackParamList = {
    TabBar: undefined;
    MyProfile: undefined;
    Favorites: undefined;
    MyAddress: undefined;
    ChangePassword: undefined;
    MyCard: undefined;
    NotificationsSettings: undefined;
    HelpCenter: undefined;
    PrivacyPolicy: undefined;
    Auth: undefined;
    NotificationsScreen: undefined;
    PropertyDetails: undefined;
    Search: undefined;
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
                name='MyProfile'
                component={MyProfile}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                    headerTitle: 'Personal Info'

                    // headerTitleStyle: { fontSize: 10 },
                }}
            />
            <Stack.Screen
                name='Favorites'
                component={Favorites}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name='MyAddress'
                component={MyAddress}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name='ChangePassword'
                component={ChangePassword}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name='MyCard'
                component={MyCard}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name='NotificationsSettings'
                component={NotificationsSettings}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name='HelpCenter'
                component={HelpCenter}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name='PrivacyPolicy'
                component={PrivacyPolicy}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: 'white' },
                    headerTitleAlign: 'center'
                }}
            />
            <Stack.Screen
                name='Search'
                component={SearchScreen}
                options={{ animation: 'slide_from_bottom' }}
            />
            <Stack.Screen name='NotificationsScreen' component={NotificationsScreen} />
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
