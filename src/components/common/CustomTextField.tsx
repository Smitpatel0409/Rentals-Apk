import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Pressable, TextInput } from 'react-native-gesture-handler';
import { FONTS } from '../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';

interface TextFieldProps {
    leftIcon?: React.ReactNode;
    onClear?: () => void;
    right?: boolean;
    label?: string;
}

const CustomTextField: React.FC<TextFieldProps & React.ComponentProps<TextInput>> = ({
    leftIcon,
    onClear,
    right = true,
    label,
    ...props
}) => {
    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.flexRow}>
                {leftIcon}
                <TextInput
                    {...props}
                    style={styles.inputContainer}
                    placeholderTextColor='#cccccc'
                />
                <View style={styles.clearIcon}>
                    {props.value?.length != 0 && right && (
                        <Pressable onPress={onClear}>
                            <Icon name='close-circle-sharp' size={RFValue(16)} color='#ccc' />
                        </Pressable>
                    )}
                </View>
            </View>
        </View>
    );
};

export default CustomTextField;

const styles = StyleSheet.create({
    label: {
        fontFamily: FONTS.REGULAR,
        fontSize: RFValue(12),
        color: '#5f5f5f',
        marginBottom: 2
    },
    text: {
        width: '10%',
        marginLeft: 10
    },
    flexRow: {
        flexDirection: 'row',
        paddingLeft: 14,
        height: 56,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
        borderWidth: 0.5,
        borderColor: '#999999',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 4,
        shadowColor: '#999999',
        marginBottom: 10
    },
    inputContainer: {
        height: '100%',
        width: '76%',
        fontFamily: FONTS.REGULAR,
        fontSize: RFValue(12),
        paddingBottom: 6,
        color: '#5f5f5f'
    },
    clearIcon: {
        width: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    }
});
