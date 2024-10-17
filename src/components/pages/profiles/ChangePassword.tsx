import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from '../../common/CustomText';
import { FONTS } from '../../../constants/fonts';

const ChangePassword = () => {
    return (
        <View>
            <CustomText variant='h5' fontFamily={FONTS.SEMI_BOLD}>
                ChangePassword
            </CustomText>
        </View>
    );
};

export default ChangePassword;

const styles = StyleSheet.create({});
