import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TouchableRipple } from 'react-native-paper';
import CustomText from './CustomText';
import { FONTS } from '../../constants/fonts';
import { LIGHT_COLORS } from '../../constants/colors';

interface CustomButtonProps {
    onPress: () => void;
    title: string;
    disabled: boolean;
    loading: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onPress, title, disabled, loading }) => {
    return (
        <Pressable
            style={[
                styles.btnContainer,
                { backgroundColor: disabled ? '#9197a6' : LIGHT_COLORS.PRIMARY }
            ]}
            onPress={onPress}
            disabled={disabled}
        >
            {loading ? (
                <ActivityIndicator color='white' size='small' />
            ) : (
                <CustomText variant='h6' color='#ffffff' fontFamily={FONTS.SEMI_BOLD}>
                    {title}
                </CustomText>
            )}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btnContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        marginVertical: 15,
        width: '100%',
        borderRadius: 12
    }
});
export default CustomButton;
