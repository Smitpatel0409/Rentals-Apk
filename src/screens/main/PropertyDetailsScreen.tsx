import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
    FlatList,
    Pressable
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';
import { LIGHT_COLORS } from '../../constants/colors';

const facilitiesData = [
    { id: 1, name: 'Swimming Pool', icon: 'water-outline' },
    { id: 2, name: 'Parking', icon: 'car-outline' },
    { id: 3, name: 'Fitness Center', icon: 'fitness-outline' },
    { id: 4, name: '24/7 Security', icon: 'shield-checkmark-outline' },
    { id: 5, name: 'Business Center', icon: 'briefcase-outline' },
    { id: 6, name: 'Concierge Service', icon: 'person-outline' },
    { id: 7, name: 'Rooftop Terrace', icon: 'home-outline' },
    { id: 8, name: 'WiFi Connectivity', icon: 'wifi-outline' }
];

const OverviewTab = () => (
    <View>
        <View style={styles.tabContent}>
            <View style={styles.infoRow}>
                <Icon name='bed-outline' size={28} color={LIGHT_COLORS.PRIMARY_ICON} />
                <View style={{ alignItems: 'center' }}>
                    <CustomText fontFamily={FONTS.SEMI_BOLD}>4.5</CustomText>
                    <CustomText color={LIGHT_COLORS.SECONDARY_TEXT} fontFamily={FONTS.MEDIUM}>
                        Bedrooms
                    </CustomText>
                </View>
            </View>
            <View style={styles.infoRow}>
                <Icon name='water-outline' size={28} color={LIGHT_COLORS.PRIMARY_ICON} />
                <View style={{ alignItems: 'center' }}>
                    <CustomText fontFamily={FONTS.SEMI_BOLD}>2</CustomText>
                    <CustomText color={LIGHT_COLORS.SECONDARY_TEXT} fontFamily={FONTS.MEDIUM}>
                        Bathrooms
                    </CustomText>
                </View>
            </View>
            <View style={styles.infoRow}>
                <Icon name='resize-outline' size={28} color={LIGHT_COLORS.PRIMARY_ICON} />
                <View style={{ alignItems: 'center' }}>
                    <CustomText fontFamily={FONTS.SEMI_BOLD}>1200 sqft</CustomText>
                    <CustomText color={LIGHT_COLORS.SECONDARY_TEXT} fontFamily={FONTS.MEDIUM}>
                        Area Size
                    </CustomText>
                </View>
            </View>
        </View>
        <View style={{ margin: 16 }}>
            <CustomText style={{ fontSize: RFValue(14) }} fontFamily={FONTS.SEMI_BOLD}>
                Description
            </CustomText>
            <CustomText color={LIGHT_COLORS.GRAY}>
                Discover urban luxury living at its finest in this immaculate modern condo located
                in the heart of downtown New York City.
            </CustomText>
        </View>

        {/* Location Section */}
        <View style={{ marginHorizontal: 16 }}>
            <CustomText style={{ fontSize: RFValue(14) }} fontFamily={FONTS.SEMI_BOLD}>
                Location
            </CustomText>
            <Pressable style={styles.mapViewContainer} onPress={() => {}}>
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: 23.0225, // Ahmedabad latitude
                        longitude: 72.5714,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                    provider={PROVIDER_GOOGLE}
                    scrollEnabled={false}
                />
            </Pressable>
        </View>

        {/* Property Gallery */}
        <View style={styles.propertyGalleryContainer}>
            <CustomText fontFamily={FONTS.SEMI_BOLD} style={styles.sectionTitle}>
                Property Gallery
            </CustomText>
            <FlatList
                horizontal={true}
                data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
                renderItem={({ item }) => (
                    <Image
                        source={{
                            uri: 'https://i.pinimg.com/564x/14/6b/50/146b50f3e155e14e26b46c01f7c41128.jpg'
                        }}
                        style={styles.galleryImage}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
        {/* Contact Section
            <CustomText style={styles.sectionTitle}>Contact Information</CustomText>
            <View style={styles.contactContainer}>
                <Image
                    source={{
                        uri: 'https://i.pinimg.com/564x/14/6b/50/146b50f3e155e14e26b46c01f7c41128.jpg'
                    }}
                    style={styles.contactImage}
                />
                <View>
                    <Text style={styles.agentName}>Laura Angelina</Text>
                    <Text style={styles.agentRole}>Contact Agent</Text>
                </View>
                <TouchableOpacity>
                    <Icon name='call-outline' size={24} color='#333' />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Icon name='mail-outline' size={24} color='#333' />
                </TouchableOpacity>
            </View>

            {/* Action Buttons */}
        {/* <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.liveTourButton}>
                    <Text style={styles.buttonText}>Live Tour</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bookNowButton}>
                    <Text style={styles.buttonText}>Book Now</Text>
                </TouchableOpacity>
            </View> */}
    </View>
);

const ReviewTab = () => (
    <View style={styles.reviewsTabContentContainer}>
        <View style={styles.reviewTabContent}>
            <View
                style={[
                    styles.reviewTabPropertyStats,
                    { borderRightColor: LIGHT_COLORS.BORDER, borderRightWidth: 0.5 }
                ]}
            >
                <Icon name='star-outline' size={28} color={LIGHT_COLORS.PRIMARY_ICON} />
                <View style={{ alignItems: 'center' }}>
                    <CustomText fontFamily={FONTS.SEMI_BOLD}>2</CustomText>
                    <CustomText
                        variant='h6'
                        color={LIGHT_COLORS.SECONDARY_TEXT}
                        fontFamily={FONTS.MEDIUM}
                    >
                        Average Rating
                    </CustomText>
                </View>
            </View>
            <View
                style={[
                    styles.reviewTabPropertyStats,
                    { borderLeftColor: LIGHT_COLORS.BORDER, borderLeftWidth: 0.5 }
                ]}
            >
                <Icon name='person-outline' size={28} color={LIGHT_COLORS.PRIMARY_ICON} />
                <View style={{ alignItems: 'center' }}>
                    <CustomText fontFamily={FONTS.SEMI_BOLD}>80+</CustomText>
                    <CustomText
                        variant='h6'
                        color={LIGHT_COLORS.SECONDARY_TEXT}
                        fontFamily={FONTS.MEDIUM}
                    >
                        Total Reviews
                    </CustomText>
                </View>
            </View>
        </View>
        <View>
            <FlatList
                scrollEnabled={false}
                data={[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]}
                renderItem={({ item }) => <ReviewCard />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    </View>
);

const FacilitiesTab = () => (
    <View style={styles.facilitiesContainer}>
        <FlatList
            scrollEnabled={false}
            data={facilitiesData}
            numColumns={2}
            renderItem={({ item }) => (
                <View style={styles.facilityCard}>
                    <Icon name={item.icon} size={22} color={LIGHT_COLORS.PRIMARY_ICON} />
                    <CustomText style={{ fontSize: 13, paddingTop: 2 }}>{item.name}</CustomText>
                </View>
            )}
            keyExtractor={(item) => item.id.toString()}
        />
    </View>
);

const ReviewCard = () => {
    const [isLiked, setIsLiked] = useState(false);
    return (
        <View style={styles.reviewCard}>
            <View style={styles.reviewHeader}>
                <CustomText style={styles.reviewTitle} fontFamily={FONTS.SEMI_BOLD}>
                    Perfect for Families
                </CustomText>
                <Pressable
                    onPress={() => {
                        setIsLiked(!isLiked);
                    }}
                >
                    <Icon
                        name={isLiked ? 'heart' : 'heart-outline'}
                        size={20}
                        color={isLiked ? LIGHT_COLORS.PEACH : LIGHT_COLORS.BLACK}
                    />
                </Pressable>
            </View>
            <CustomText>
                Ideal accommodation for families. The spacious layout and amenities made our stay
                enjoyable. Kids loved the pool, and we appreciated the convenience of nearby
                attractions.
            </CustomText>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}
            >
                <CustomText style={styles.reviewFooter}>Michael Smith • 2 weeks ago</CustomText>
                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: 'row', gap: 6, alignItems: 'flex-start' }}>
                        <CustomText fontFamily={FONTS.SEMI_BOLD}>4.5</CustomText>
                        <Icon
                            style={{ marginTop: 1 }}
                            name='star'
                            size={15}
                            color={LIGHT_COLORS.PRIMARY_ICON}
                        />
                    </View>
                </View>
            </View>
        </View>
    );
};

const PropertyDetailScreen = () => {
    const navigation = useNavigation();
    const [selectedTab, setSelectedTab] = useState('Overview');
    const [isLiked, setIsLiked] = useState(false);

    const renderTabContent = () => {
        switch (selectedTab) {
            case 'Overview':
                return <OverviewTab />;
            case 'Review':
                return <ReviewTab />;
            case 'Facilities':
                return <FacilitiesTab />;
            default:
                return null;
        }
    };

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {/* Header Section */}
            <View style={styles.header}>
                <Image
                    source={{
                        uri: 'https://i.pinimg.com/564x/14/6b/50/146b50f3e155e14e26b46c01f7c41128.jpg'
                    }}
                    style={styles.propertyImage}
                />
                <View style={styles.headerIcons}>
                    <Pressable
                        onPress={() => {
                            setIsLiked(!isLiked);
                        }}
                    >
                        <Icon
                            name={isLiked ? 'heart' : 'heart-outline'}
                            size={24}
                            color={isLiked ? LIGHT_COLORS.PEACH : LIGHT_COLORS.BLACK}
                        />
                    </Pressable>
                </View>
            </View>

            {/* Title Section */}
            <View style={styles.titleContainer}>
                <View>
                    <CustomText variant='h4' fontFamily={FONTS.SEMI_BOLD}>
                        Luxe Downtown Apartment
                    </CustomText>
                    <CustomText color={LIGHT_COLORS.SECONDARY_TEXT} variant='h7'>
                        Ahmedabad, Gujarat
                    </CustomText>
                </View>
                <View>
                    <CustomText
                        style={{ maxWidth: 80, maxHeight: 44 }}
                        variant='h4'
                        color={LIGHT_COLORS.TEXT_GREEN}
                        fontFamily={FONTS.SEMI_BOLD}
                    >
                        ₹12000
                    </CustomText>
                    <CustomText variant='h8' fontFamily={FONTS.MEDIUM}>
                        / Month
                    </CustomText>
                </View>
            </View>

            {/* Tab Section */}
            <View style={styles.tabContainer}>
                <Pressable
                    style={[styles.tabBtn, selectedTab === 'Overview' && styles.activeTab]}
                    onPress={() => setSelectedTab('Overview')}
                >
                    <CustomText>Overview</CustomText>
                </Pressable>
                <Pressable
                    style={[styles.tabBtn, selectedTab === 'Review' && styles.activeTab]}
                    onPress={() => setSelectedTab('Review')}
                >
                    <CustomText>Review</CustomText>
                </Pressable>
                <Pressable
                    style={[styles.tabBtn, selectedTab === 'Facilities' && styles.activeTab]}
                    onPress={() => setSelectedTab('Facilities')}
                >
                    <CustomText>Facilities</CustomText>
                </Pressable>
            </View>

            {/* Tab Content Section */}
            {renderTabContent()}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: LIGHT_COLORS.BACKGROUND
    },
    header: {
        position: 'relative'
    },
    propertyImage: {
        width: '100%',
        height: hp(40)
    },
    headerIcons: {
        position: 'absolute',
        top: 8,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: LIGHT_COLORS.BACKGROUND,
        padding: 6,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    titleContainer: {
        height: hp('10%'),
        paddingHorizontal: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    propertyLocation: {
        color: '#888'
    },
    tabContainer: {
        padding: 4,
        marginTop: 10,
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: LIGHT_COLORS.BACKGROUND_GRAY,
        borderRadius: 24
    },
    tabBtn: {
        padding: 7,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 24
    },
    activeTab: {
        color: LIGHT_COLORS.TEXT,
        backgroundColor: LIGHT_COLORS.WHITE,
        borderWidth: 0.5,
        borderColor: LIGHT_COLORS.GRAY
    },
    tabContent: {
        marginTop: 16,
        paddingHorizontal: 16,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoRow: {
        width: wp('28%'),
        height: hp('14%'),
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderColor: LIGHT_COLORS.BORDER,
        borderWidth: 0.5,
        backgroundColor: LIGHT_COLORS.BACKGROUND,
        borderRadius: 12
    },
    propertyGalleryContainer: {
        marginVertical: 16,
        paddingLeft: 16
    },
    sectionTitle: {
        fontSize: RFValue(14)
        // paddingHorizontal: 16
    },
    map: {
        height: hp('25%'),
        width: '100%'
    },
    galleryImage: {
        width: wp(30),
        height: hp(20),
        margin: 5,
        borderRadius: 10
    },
    contactContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15
    },
    contactImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10
    },
    agentName: {
        fontSize: RFValue(14),
        fontWeight: 'bold'
    },
    agentRole: {
        color: '#888'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 15
    },
    liveTourButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    bookNowButton: {
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5
    },
    buttonText: {
        color: '#fff',
        fontSize: RFValue(14),
        textAlign: 'center'
    },
    mapViewContainer: {
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: LIGHT_COLORS.BLACK,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 8,
        elevation: 4
    },
    reviewsTabContentContainer: {
        marginTop: 16,
        marginHorizontal: 16
    },
    reviewTabContent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: LIGHT_COLORS.BORDER,
        borderWidth: 0.5,
        backgroundColor: LIGHT_COLORS.BACKGROUND,
        borderRadius: 12,
        shadowColor: LIGHT_COLORS.GRAY,
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 12,
        elevation: 5
    },
    reviewTabPropertyStats: {
        flex: 1,
        height: hp('14%'),
        paddingHorizontal: 5,
        paddingVertical: 10,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    reviewCard: {
        backgroundColor: LIGHT_COLORS.BACKGROUND,
        borderRadius: 8,
        padding: 15,
        marginVertical: 10,
        borderColor: LIGHT_COLORS.BORDER,
        borderWidth: 0.5,
        shadowColor: LIGHT_COLORS.GRAY,
        shadowOffset: { width: 2, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 12,
        elevation: 5
    },
    reviewHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    reviewTitle: {
        fontSize: RFValue(16)
    },
    reviewFooter: {
        marginTop: 10,
        fontSize: RFValue(12),
        color: '#aaaaaa',
        fontFamily: FONTS.MEDIUM
    },
    facilitiesContainer: {
        marginTop: 16,
        marginHorizontal: 16
    },
    facilityCard: {
        flex: 1,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginVertical: 5,
        marginHorizontal: 3,
        gap: 8,
        backgroundColor: '#f5f5f5',
        borderRadius: 28
    }
});

export default PropertyDetailScreen;
