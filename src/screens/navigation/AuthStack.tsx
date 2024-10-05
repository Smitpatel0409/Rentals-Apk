import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '../auth/LoginScreen'
import RegisterScreen from '../auth/RegisterScreen'

const AuthStack = () => {
    const Stack = createStackNavigator()
  return (
    <Stack.Navigator>
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})