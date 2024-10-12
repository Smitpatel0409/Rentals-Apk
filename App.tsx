/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useEffect, useState } from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { rtkStore } from './src/store/rtkStore';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AuthStack from './src/screens/navigation/AuthStack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStack from './src/screens/navigation/AppStack';
import { ActivityIndicator } from 'react-native-paper';
import RTSplashScreen from './src/screens/splashScreen/RTSplashScreen';

function App(): React.JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const Stack = createNativeStackNavigator();

    useEffect(() => {
        const checkLoginStatus = async () => {
            setIsLoading(true);
            try {
                const token = await AsyncStorage.getItem('isLoggedIn');
                setIsLoggedIn(token === 'true'); // Set true if token exists and equals 'true'
            } catch (error) {
                console.error('Error checking login status:', error);
            } finally {
                setIsLoading(false);
            }
        };
        checkLoginStatus();
    }, []);

    if (isLoggedIn === null) {
        return (
            // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:"white" }}>
            //     <ActivityIndicator size="large" />
            // </View>
            <RTSplashScreen />
        );
    }
    return (
        <Provider store={rtkStore}>
            <GestureHandlerRootView>
                <SafeAreaView style={{ flex: 1 }}>
                    <StatusBar barStyle={'dark-content'} backgroundColor='white' />
                    <NavigationContainer>
                        <Stack.Navigator
                            initialRouteName={isLoggedIn ? 'App' : 'Auth'}
                            screenOptions={{ headerShown: false, animation: 'slide_from_right' }}
                        >
                            <Stack.Screen
                                name='Auth'
                                component={AuthStack}
                                options={{ animation: 'slide_from_left' }}
                            />
                            <Stack.Screen name='App' component={AppStack} />
                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            </GestureHandlerRootView>
        </Provider>
    );
}

const styles = StyleSheet.create({});

export default App;
