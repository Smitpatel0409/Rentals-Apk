import { StyleSheet, View } from 'react-native';
import React from 'react';
import CustomText from '../../common/CustomText';
import { FONTS } from '../../../constants/fonts';

const Favorites = () => {
    return (
        <View>
            <CustomText variant='h5' fontFamily={FONTS.SEMI_BOLD}>
                Favorites
            </CustomText>
        </View>
    );
};

export default Favorites;

const styles = StyleSheet.create({});
