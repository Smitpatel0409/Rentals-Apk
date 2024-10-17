import { Image, ScrollView, StyleSheet, View } from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomTextField from '../../common/CustomTextField';
import CustomText from '../../common/CustomText';
import CustomButton from '../../common/CustomButton';

// Validation Schema using Yup
const profileSchema = Yup.object().shape({
    fullname: Yup.string().required('Fullname is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string()
        .required('Phone number is required')
        .matches(/^\+?(\d{1,4})?\s?-?\d{3}-?\s?\d{3}-?\d{3,4}$/, 'Phone number is not valid'),
    address: Yup.string().required('Address is required'),
    dob: Yup.date().required('Date of Birth is required')
});

const MyProfile = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Formik
                initialValues={{
                    fullname: 'James Andreas',
                    email: 'jamesandreas@gmail.com',
                    phone: '+1-343-456-009',
                    address: 'Roverio 456, West Street, Berlin',
                    dob: '12 October 1992'
                }}
                validationSchema={profileSchema}
                onSubmit={(values) => {
                    console.log(values); // Handle the form submit
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
                        <View style={styles.avatarContainer}>
                            <Image
                                source={require('../../../assets/images/avatar.jpg')}
                                style={styles.avatar}
                            />
                            <View style={styles.profileIconContainer}>
                                <Ionicons
                                    name={'create-outline'}
                                    color={'white'}
                                    size={15}
                                    style={styles.profileIcon}
                                />
                            </View>
                        </View>

                        {/* Fullname Field */}
                        <View style={styles.profileDetailsContainer}>
                            <CustomTextField
                                leftIcon={
                                    <Ionicons
                                        name={'person-outline'}
                                        color={'#999999'}
                                        size={20}
                                        style={styles.profileIcon}
                                    />
                                }
                                placeholder={'Fullname'}
                                right={false}
                                label={'Fullname'}
                                value={values.fullname}
                                onChangeText={handleChange('fullname')}
                                onBlur={handleBlur('fullname')}
                            />
                            {errors.fullname && touched.fullname ? (
                                <CustomText style={styles.errorText} color='#fd7871' variant='h8'>
                                    {errors.fullname}
                                </CustomText>
                            ) : null}
                        </View>

                        {/* Email Field */}
                        <View style={styles.profileDetailsContainer}>
                            <CustomTextField
                                leftIcon={
                                    <Ionicons
                                        name={'mail-outline'}
                                        color={'#999999'}
                                        size={20}
                                        style={styles.profileIcon}
                                    />
                                }
                                placeholder={'Email'}
                                label={'Email'}
                                right={false}
                                value={values.email}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                            />
                            {errors.email && touched.email ? (
                                <CustomText style={styles.errorText} color='#fd7871' variant='h8'>
                                    {errors.email}
                                </CustomText>
                            ) : null}
                        </View>

                        {/* Phone Number Field */}
                        <View style={styles.profileDetailsContainer}>
                            <CustomTextField
                                leftIcon={
                                    <Ionicons
                                        name={'call-outline'}
                                        color={'#999999'}
                                        size={20}
                                        style={styles.profileIcon}
                                    />
                                }
                                placeholder={'Phone Number'}
                                label={'Phone Number'}
                                value={values.phone}
                                right={false}
                                onChangeText={handleChange('phone')}
                                onBlur={handleBlur('phone')}
                            />
                            {errors.phone && touched.phone ? (
                                <CustomText style={styles.errorText} color='#fd7871' variant='h8'>
                                    {errors.phone}
                                </CustomText>
                            ) : null}
                        </View>

                        {/* Address Field */}
                        <View style={styles.profileDetailsContainer}>
                            <CustomTextField
                                leftIcon={
                                    <Ionicons
                                        name={'location-outline'}
                                        color={'#999999'}
                                        size={20}
                                        style={styles.profileIcon}
                                    />
                                }
                                placeholder={'Address'}
                                label={'Address'}
                                right={false}
                                value={values.address}
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                            />
                            {errors.address && touched.address ? (
                                <CustomText style={styles.errorText} color='#fd7871' variant='h8'>
                                    {errors.address}
                                </CustomText>
                            ) : null}
                        </View>

                        {/* Date of Birth Field */}
                        <View style={styles.profileDetailsContainer}>
                            <CustomTextField
                                leftIcon={
                                    <Ionicons
                                        name={'calendar-outline'}
                                        color={'#999999'}
                                        size={20}
                                        style={styles.profileIcon}
                                    />
                                }
                                placeholder={'Date of Birth'}
                                label={'Date of Birth'}
                                value={values.dob}
                                onChangeText={handleChange('dob')}
                                onBlur={handleBlur('dob')}
                            />
                            {errors.dob && touched.dob ? (
                                <CustomText style={{ margin: 0 }} color='#fd7871' variant='h8'>
                                    {errors.dob}
                                </CustomText>
                            ) : null}
                        </View>

                        {/* Buttons Container */}
                        <View style={styles.buttonContainer}>
                            {/* Cancel Button */}
                            <CustomButton
                                styleContainer={styles.cancelButton}
                                styleTextColor={styles.cancelButtonText.color}
                                title='Cancel'
                                onPress={() => {
                                    console.log('Cancel pressed');
                                }}
                                disabled={false}
                                loading={false}
                            />

                            {/* Submit Button */}
                            <CustomButton
                                styleContainer={styles.submitButton}
                                styleTextColor={styles.submitButtonText.color}
                                title='Save Profile'
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

export default MyProfile;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#ffffff'
    },
    container: {
        backgroundColor: '#ffffff',
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 0
    },
    avatarContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        marginVertical: 20,
        borderColor: '#ccc',
        borderRadius: 20,
        position: 'relative'
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10
    },
    profileIconContainer: {
        position: 'absolute',
        bottom: 35,
        right: 0,
        backgroundColor: '#292929',
        borderRadius: 50,
        padding: 2,
        borderWidth: 1,
        borderColor: '#ccc'
    },
    profileIcon: {
        padding: 5,
        borderColor: '#ccc'
    },
    profileDetailsContainer: {
        flex: 1,
        width: '100%',
        marginBottom: 15
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginLeft: 20,
        marginTop: 2
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
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#1246bc',
        marginRight: 10
    },
    cancelButtonText: {
        color: '#1246bc',
        fontSize: 16,
        fontWeight: 'bold'
    },
    submitButton: {
        flex: 1,
        backgroundColor: '#1246bc',
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginLeft: 10
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
});
