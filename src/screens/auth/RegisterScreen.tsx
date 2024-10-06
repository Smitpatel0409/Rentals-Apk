import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../components/common/CustomText'
import { FONTS } from '../../constants/fonts'

const RegisterScreen = () => {
  return (
    <View>
      <CustomText variant='h1' fontFamily={FONTS.BOLD}>RegisterScreen</CustomText>
    </View>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})