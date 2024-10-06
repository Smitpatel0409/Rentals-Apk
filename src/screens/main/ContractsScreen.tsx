import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';

const ContractsScreen = () => {
    return (
        <View>
            <CustomText variant='h2' fontFamily={FONTS.SEMI_BOLD}>
                ContractsScreen
            </CustomText>
        </View>
    );
};

export default ContractsScreen;

const styles = StyleSheet.create({});
