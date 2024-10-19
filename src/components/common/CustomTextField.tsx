import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Pressable, TextInput } from 'react-native-gesture-handler';
import { FONTS } from '../../constants/fonts';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import { LIGHT_COLORS } from '../../constants/colors';

interface TextFieldProps {
    leftIcon?: React.ReactNode;
    onClear?: () => void;
    right?: boolean;
    label?: string;
    isCalender?: boolean;
    onPress?: () => void;
}

const CustomTextField: React.FC<TextFieldProps & React.ComponentProps<TextInput>> = ({
    leftIcon,
    onClear,
    right = true,
    label,
    isCalender,
    onPress,
    ...props
}) => {
    return (
        <View>
            {label && <Text style={styles.label}>{label}</Text>}
            <View style={styles.flexRow}>
                {leftIcon}
                {isCalender ? (
                    <Pressable onPress={onPress} style={styles.pressable}>
                        <TextInput
                            {...props}
                            style={styles.inputContainer}
                            placeholderTextColor='#cccccc'
                        />
                    </Pressable>
                ) : (
                    <TextInput
                        {...props}
                        style={styles.inputContainer}
                        placeholderTextColor='#cccccc'
                    />
                )}
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
        color: LIGHT_COLORS.TEXT,
        marginBottom: 2,
        marginTop: 5
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
        marginBottom: 5
    },
    inputContainer: {
        height: '100%',
        width: '76%',
        fontFamily: FONTS.REGULAR,
        fontSize: RFValue(12),
        paddingBottom: 6,
        color: LIGHT_COLORS.TEXT
    },
    clearIcon: {
        width: '8%',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    pressable: {
        flexDirection: 'row'
    }
});
