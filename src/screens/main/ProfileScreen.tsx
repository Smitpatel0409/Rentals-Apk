import { Image, StyleSheet, View, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationProp } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

type ProfileParamList = {
    Auth: undefined;
    MyProfile: undefined;
    Favorites: undefined;
    MyAddress: undefined;
    ChangePassword: undefined;
    MyCard: undefined;
    Notifications: undefined;
    HelpCenter: undefined;
    PrivacyPolicy: undefined;
};

const profileData = [
    {
        icon: 'person-outline',
        title: 'My Profile',
        screen: 'MyProfile'
    },
    {
        icon: 'heart-outline',
        title: 'Favorites',
        screen: 'Favorites'
    },
    {
        icon: 'location-outline',
        title: 'My Address',
        screen: 'MyAddress'
    },
    {
        icon: 'lock-closed-outline',
        title: 'Change Password',
        screen: 'ChangePassword'
    },
    {
        icon: 'wallet-outline',
        title: 'My Card',
        screen: 'MyCard'
    },
    {
        icon: 'notifications-outline',
        title: 'Notifications',
        screen: 'Notifications'
    },
    {
        icon: 'help-outline',
        title: 'Help Center',
        screen: 'HelpCenter'
    },
    {
        icon: 'shield-outline',
        title: 'Privacy Policy',
        screen: 'PrivacyPolicy'
    },
    {
        icon: 'log-out-outline',
        title: 'Logout',
        color: '#fd7871'
    }
];

const ProfileScreen = ({ navigation }: { navigation: NavigationProp<ProfileParamList> }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    const handleLogout = async () => {
        setIsLoading(true);
        try {
            await AsyncStorage.removeItem('isLoggedIn');
            await GoogleSignin.signOut();
            setTimeout(() => {
                setIsLoading(false);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Auth' }]
                });
            }, 1000);
        } catch (error) {
            console.error('Error during logout:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <View>
                    <View style={styles.avatarContainer}>
                        <Image
                            source={require('../../assets/images/avatar.jpg')}
                            style={styles.avatar}
                        />
                        <CustomText
                            variant='h6'
                            fontFamily={FONTS.SEMI_BOLD}
                            style={styles.username}
                        >
                            James Andreas
                        </CustomText>
                        <CustomText variant='h7' fontFamily={FONTS.REGULAR} style={styles.email}>
                            jamesandreas@gmail.com
                        </CustomText>
                        <View style={styles.verified}>
                            <Ionicons name='checkmark-circle-outline' color='white' size={18} />
                            <CustomText variant='h8' color='white' fontFamily={FONTS.SEMI_BOLD}>
                                Verified
                            </CustomText>
                        </View>
                    </View>
                    <View>
                        {profileData?.map((data, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.profileListing,
                                    hoveredIndex === index && styles.profileListingHovered,
                                    index !== profileData.length - 1 && styles.profileListingBorder
                                ]}
                                onPress={() =>
                                    data.title === 'Logout'
                                        ? handleLogout()
                                        : navigation.navigate(data.screen as keyof ProfileParamList)
                                }
                                onPressIn={() => setHoveredIndex(index)}
                                onPressOut={() => setHoveredIndex(null)}
                            >
                                <View style={styles.profileItem}>
                                    <Ionicons
                                        name={data?.icon}
                                        color={data.color || 'gray'}
                                        size={20}
                                        style={styles.profileIcon}
                                    />
                                    <CustomText
                                        variant='h5'
                                        color={data.color || '#5f5f5f'}
                                        fontFamily={FONTS.REGULAR}
                                    >
                                        {data?.title}
                                    </CustomText>
                                </View>
                                <Ionicons
                                    name='chevron-forward-outline'
                                    color={data.color || 'gray'}
                                    size={18}
                                    style={styles.profileIcon}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1
    },
    container: {
        paddingHorizontal: 20,
        paddingBottom: 20,
        backgroundColor: 'white'
    },
    avatarContainer: {
        paddingVertical: 20,
        alignItems: 'center',
        marginVertical: 20,
        borderColor: '#ccc',
        borderWidth: 0.5,
        borderRadius: 20,
        position: 'relative'
    },
    verified: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        top: 10,
        right: 10,
        backgroundColor: '#1aacac',
        color: 'white',
        padding: 8,
        paddingHorizontal: 14,
        borderRadius: 8
    },
    avatar: {
        width: 75,
        height: 75,
        borderRadius: 50,
        marginBottom: 10
    },
    username: {
        fontSize: 12
    },
    email: {
        fontSize: 10
    },
    profileListing: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 10,
        paddingVertical: 18
    },
    profileListingBorder: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 0.5
    },
    profileListingHovered: {
        backgroundColor: '#f0f0f0'
    },
    profileItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    profileIcon: {
        marginRight: 5,
        justifyContent: 'center',
        alignSelf: 'center',
        paddingBottom: 3
    }
});
