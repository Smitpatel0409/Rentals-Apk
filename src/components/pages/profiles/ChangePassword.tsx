import { ScrollView, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomTextField from '../../common/CustomTextField';
import CustomText from '../../common/CustomText';
import CustomButton from '../../common/CustomButton';
import { LIGHT_COLORS } from '../../../constants/colors';
import { NavigationProp } from '@react-navigation/native';

const passwordSchema = Yup.object().shape({
    currentPassword: Yup.string().required('Current password is required'),
    newPassword: Yup.string()
        .min(8, 'Password must be at least 8 characters')
        .required('New password is required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('newPassword')], 'Passwords must match')
        .required('Confirm password is required')
});

type BottomParamList = {
    Profile: undefined;
};

const ChangePassword = ({ navigation }: { navigation: NavigationProp<BottomParamList> }) => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Formik
                initialValues={{
                    currentPassword: '',
                    newPassword: '',
                    confirmPassword: ''
                }}
                validationSchema={passwordSchema}
                onSubmit={(values, { setSubmitting }) => {
                    console.log(values);
                    setTimeout(() => {
                        setSubmitting(false);
                        navigation.navigate('Profile');
                    }, 1000);
                }}
            >
                {({
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    values,
                    errors,
                    touched,
                    isSubmitting
                }) => (
                    <View style={styles.container}>
                        {(['currentPassword', 'newPassword', 'confirmPassword'] as const).map(
                            (field) => (
                                <View key={field} style={styles.inputContainer}>
                                    <CustomTextField
                                        leftIcon={
                                            <Ionicons
                                                name='lock-closed-outline'
                                                color={LIGHT_COLORS.GRAY}
                                                size={20}
                                                style={styles.icon}
                                            />
                                        }
                                        isPassword={true}
                                        placeholder={field
                                            .replace(/([A-Z])/g, ' $1')
                                            .replace(/^./, (str) => str.toUpperCase())}
                                        label={field
                                            .replace(/([A-Z])/g, ' $1')
                                            .replace(/^./, (str) => str.toUpperCase())}
                                        value={values[field]}
                                        onChangeText={handleChange(field)}
                                        onBlur={handleBlur(field)}
                                    />
                                    {errors[field] && touched[field] ? (
                                        <CustomText color={LIGHT_COLORS.ERROR} variant='h8'>
                                            {errors[field]}
                                        </CustomText>
                                    ) : null}
                                </View>
                            )
                        )}

                        <View style={styles.spacer} />

                        <View style={styles.buttonContainer}>
                            <CustomButton
                                styleContainer={styles.cancelButton}
                                styleTextColor={styles.cancelButtonText.color}
                                title='Cancel'
                                onPress={() => navigation.goBack()}
                                disabled={false}
                                loading={false}
                            />
                            <CustomButton
                                styleContainer={styles.submitButton}
                                styleTextColor={styles.submitButtonText.color}
                                title='Update'
                                onPress={handleSubmit}
                                disabled={isSubmitting}
                                loading={isSubmitting}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </ScrollView>
    );
};

export default ChangePassword;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: LIGHT_COLORS.BACKGROUND
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 20
    },
    inputContainer: {
        width: '100%',
        marginBottom: 15
    },
    icon: {
        padding: 5
    },
    spacer: {
        flex: 1
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20
    },
    cancelButton: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: LIGHT_COLORS.PRIMARY
    },
    cancelButtonText: {
        color: LIGHT_COLORS.PRIMARY
    },
    submitButton: {
        flex: 1,
        backgroundColor: LIGHT_COLORS.PRIMARY,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginLeft: 10
    },
    submitButtonText: {
        color: LIGHT_COLORS.BACKGROUND
    }
});
