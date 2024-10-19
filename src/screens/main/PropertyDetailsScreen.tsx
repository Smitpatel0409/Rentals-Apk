import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';

const PropertyDetailsScreen = () => {
    return (
        <View>
            <CustomText variant='h1' fontFamily={FONTS.BOLD} color='black'>
                PropertyDetailsScreen
            </CustomText>
        </View>
    );
};

export default PropertyDetailsScreen;

const styles = StyleSheet.create({});
