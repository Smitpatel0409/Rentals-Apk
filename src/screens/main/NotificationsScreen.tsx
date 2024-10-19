import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';

const NotificationsScreen = () => {
    return (
        <View>
            <CustomText variant='h1' fontFamily={FONTS.SEMI_BOLD}>
                Notifications
            </CustomText>
        </View>
    );
};

export default NotificationsScreen;

const styles = StyleSheet.create({});
