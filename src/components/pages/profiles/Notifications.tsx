import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from '../../common/CustomText';
import { FONTS } from '../../../constants/fonts';

const Notifications = () => {
    return (
        <View>
            <CustomText variant='h5' fontFamily={FONTS.SEMI_BOLD}>
                Notifications
            </CustomText>
        </View>
    );
};

export default Notifications;

const styles = StyleSheet.create({});
