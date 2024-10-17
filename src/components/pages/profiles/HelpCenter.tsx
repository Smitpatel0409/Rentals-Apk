import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from '../../common/CustomText';
import { FONTS } from '../../../constants/fonts';

const HelpCenter = () => {
    return (
        <View>
            <CustomText variant='h5' fontFamily={FONTS.SEMI_BOLD}>
                HelpCenter
            </CustomText>
        </View>
    );
};

export default HelpCenter;

const styles = StyleSheet.create({});
