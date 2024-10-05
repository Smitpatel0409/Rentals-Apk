import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomTabs from './BottomTabs'

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()

    const MainStack = () => {
        return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='Main' component={BottomTabs}/>
            </Stack.Navigator>
        )
    } 
  return (
    <NavigationContainer>
        <MainStack />
    </NavigationContainer>
  )
}

export default StackNavigator

const styles = StyleSheet.create({})