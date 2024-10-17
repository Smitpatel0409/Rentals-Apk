import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from '../../common/CustomText';
import { FONTS } from '../../../constants/fonts';

const PrivacyPolicy = () => {
    return (
        <View>
            <CustomText variant='h5' fontFamily={FONTS.SEMI_BOLD}>
                PrivacyPolicy
            </CustomText>
        </View>
    );
};

export default PrivacyPolicy;

const styles = StyleSheet.create({});
