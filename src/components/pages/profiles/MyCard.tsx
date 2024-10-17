import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from '../../common/CustomText';
import { FONTS } from '../../../constants/fonts';

const MyCard = () => {
    return (
        <View>
            <CustomText variant='h5' fontFamily={FONTS.SEMI_BOLD}>
                MyCard
            </CustomText>
        </View>
    );
};

export default MyCard;

const styles = StyleSheet.create({});
