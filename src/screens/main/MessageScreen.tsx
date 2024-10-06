import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomText from '../../components/common/CustomText'
import { FONTS } from '../../constants/fonts'

const MessageScreen = () => {
  return (
    <View>
      <CustomText variant='h2' fontFamily={FONTS.SEMI_BOLD}>MessageScreen</CustomText>
    </View>
  )
}

export default MessageScreen

const styles = StyleSheet.create({})