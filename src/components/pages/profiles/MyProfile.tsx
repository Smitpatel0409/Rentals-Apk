import { Image, Modal, ScrollView, StyleSheet, Touchable, View } from 'react-native';
import React, { useState } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import CustomTextField from '../../common/CustomTextField';
import CustomText from '../../common/CustomText';
import CustomButton from '../../common/CustomButton';
import { Calendar } from 'react-native-calendars';
import { LIGHT_COLORS } from '../../../constants/colors';
import { NavigationProp } from '@react-navigation/native';

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

type BottomParamList = {
    Profile: undefined;
};

const MyProfile = ({ navigation }: { navigation: NavigationProp<BottomParamList> }) => {
    const [isShowDatePicker, setIsShowDatePicker] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Formik
                initialValues={{
                    fullname: 'James Andreas',
                    email: 'jamesandreas@gmail.com',
                    phone: '+1-343-456-009',
                    address: 'Roverio 456, West Street, Berlin',
                    dob: selectedDate || '1992-10-13'
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
                    isSubmitting,
                    setFieldValue
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
                                    color={LIGHT_COLORS.WHITE}
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
                                        color={LIGHT_COLORS.GRAY}
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
                                <CustomText color={LIGHT_COLORS.ERROR} variant='h8'>
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
                                        color={LIGHT_COLORS.GRAY}
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
                                <CustomText color={LIGHT_COLORS.ERROR} variant='h8'>
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
                                        color={LIGHT_COLORS.GRAY}
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
                                <CustomText color={LIGHT_COLORS.ERROR} variant='h8'>
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
                                        color={LIGHT_COLORS.GRAY}
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
                                <CustomText color={LIGHT_COLORS.ERROR} variant='h8'>
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
                                        color={LIGHT_COLORS.GRAY}
                                        size={20}
                                        style={styles.profileIcon}
                                    />
                                }
                                placeholder={'Date of Birth'}
                                label={'Date of Birth'}
                                value={values.dob}
                                isCalender={true}
                                onPress={() => setIsShowDatePicker(true)}
                                editable={false}
                                onClear={() => setFieldValue('dob', '')}
                                right={true}
                                onBlur={handleBlur('dob')}
                            />
                            {errors.dob && touched.dob ? (
                                <CustomText color={LIGHT_COLORS.ERROR} variant='h8'>
                                    {errors.dob}
                                </CustomText>
                            ) : null}
                        </View>

                        {isShowDatePicker && (
                            <Modal
                                visible={isShowDatePicker}
                                transparent={true}
                                animationType='none'
                            >
                                <View style={styles.modalContainer}>
                                    <View style={styles.calendarContainer}>
                                        <Calendar
                                            onDayPress={(day: any) => {
                                                console.log('Selected date:', day);
                                                setSelectedDate(day.dateString);
                                                setFieldValue('dob', day.dateString);
                                                setIsShowDatePicker(false);
                                            }}
                                            markedDates={{
                                                [selectedDate]: {
                                                    selected: true,
                                                    disableTouchEvent: true,
                                                    selectedDotColor: 'orange'
                                                }
                                            }}
                                            theme={{
                                                backgroundColor: LIGHT_COLORS.BACKGROUND,
                                                calendarBackground: LIGHT_COLORS.BACKGROUND,
                                                textSectionTitleColor: '#b6c1cd',
                                                selectedDayBackgroundColor: LIGHT_COLORS.PRIMARY,
                                                selectedDayTextColor: '#ffffff',
                                                todayTextColor: LIGHT_COLORS.PRIMARY,
                                                dayTextColor: '#2d4150',
                                                textDisabledColor: '#d9e1e8',
                                                dotColor: LIGHT_COLORS.PRIMARY,
                                                selectedDotColor: '#ffffff',
                                                arrowColor: LIGHT_COLORS.PRIMARY,
                                                monthTextColor: LIGHT_COLORS.PRIMARY,
                                                indicatorColor: LIGHT_COLORS.PRIMARY,
                                                textDayFontFamily: 'monospace',
                                                textMonthFontFamily: 'monospace',
                                                textDayHeaderFontFamily: 'monospace',
                                                textDayFontWeight: '300',
                                                textMonthFontWeight: 'bold',
                                                textDayHeaderFontWeight: '300',
                                                textDayFontSize: 16,
                                                textMonthFontSize: 16,
                                                textDayHeaderFontSize: 16
                                            }}
                                        />
                                        <CustomButton
                                            styleContainer={styles.calendarButton}
                                            styleTextColor={LIGHT_COLORS.WHITE}
                                            title='Close'
                                            onPress={() => setIsShowDatePicker(false)}
                                        />
                                    </View>
                                </View>
                            </Modal>
                        )}
                        {/* Buttons Container */}
                        <View style={styles.buttonContainer}>
                            {/* Cancel Button */}
                            <CustomButton
                                styleContainer={styles.cancelButton}
                                styleTextColor={styles.cancelButton.color}
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
                                onPress={() => {
                                    handleSubmit();
                                    setTimeout(() => {
                                        navigation.navigate('Profile');
                                    }, 1000);
                                }}
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
        backgroundColor: LIGHT_COLORS.BACKGROUND
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 15,
        marginVertical: 0
    },
    avatarContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        marginVertical: 20,
        borderColor: LIGHT_COLORS.BORDER,
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
        backgroundColor: LIGHT_COLORS.TEXT,
        borderRadius: 50,
        padding: 2,
        borderWidth: 1,
        borderColor: LIGHT_COLORS.BORDER
    },
    profileIcon: {
        padding: 5,
        borderColor: LIGHT_COLORS.BORDER
    },
    profileDetailsContainer: {
        flex: 1,
        width: '100%',
        marginBottom: 15
    },
    // errorText: {
    //     color: 'red',
    //     fontSize: 12,
    //     // marginLeft: 20,
    //     marginTop: -2
    // },
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
        borderColor: LIGHT_COLORS.PRIMARY,
        marginRight: 10,
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
        color: LIGHT_COLORS.BACKGROUND,
        fontSize: 16
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    calendarContainer: {
        backgroundColor: LIGHT_COLORS.BACKGROUND,
        borderRadius: 10,
        padding: 20,
        width: '90%'
    },
    calendarButton: {
        backgroundColor: LIGHT_COLORS.PRIMARY,
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 20
    }
});
