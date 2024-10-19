import { Animated, FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import CustomText from '../../components/common/CustomText';
import { FONTS } from '../../constants/fonts';
import MessageIcon from 'react-native-vector-icons/Entypo';
import BellIcon from 'react-native-vector-icons/Octicons';
import SearchIcon from 'react-native-vector-icons/Feather';
import MenuIcon from 'react-native-vector-icons/AntDesign';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import PropertyCard from '../../components/PropertyCard';
import { NavigationProp } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

type HomeParamList = {
    Notifications: undefined;
    Messages: undefined;
    Search: undefined;
};

interface CategoryTab {
    id: string;
    name: string;
}

const categories: CategoryTab[] = [
    { id: '1', name: 'All' },
    { id: '2', name: 'Apartments' },
    { id: '3', name: 'Penthouse' },
    { id: '4', name: 'Townhouses' },
    { id: '5', name: 'Villa' },
    { id: '6', name: 'Duplex' }
];

const properties = [
    {
        id: '1',
        title: 'Apartment Avenue Properties',
        location: 'Naroda Ahmedabad, Gujarat',
        price: '12000',
        rating: '4.5',
        image: 'https://i.pinimg.com/enabled/564x/80/c5/44/80c54460304c94a781de1d63db97bdb3.jpg',
        label: 'Apartment'
    },
    {
        id: '2',
        title: 'Luxury Townhouses',
        location: 'Nikol Ahmedabad, Gujarat',
        price: '8000',
        rating: '4.7',
        image: 'https://i.pinimg.com/enabled/564x/64/33/74/643374f3ac7fb096ffbab450f710f6ce.jpg',
        label: 'Townhouse'
    },
    {
        id: '3',
        title: 'Luxury Duplex',
        location: 'Vastral Ahmedabad, Gujarat',
        price: '16000',
        rating: '4.7',
        image: 'https://i.pinimg.com/enabled/564x/dc/7d/37/dc7d3706bdc2c3e452c2823f0aa9ede5.jpg',
        label: 'Duplex'
    },
    {
        id: '4',
        title: 'Luxury Villa',
        location: 'Thaltej Ahmedabad, Gujarat',
        price: '22000',
        rating: '4.8',
        image: 'https://i.pinimg.com/enabled/564x/24/b1/7c/24b17c44d5f60789e35956016d9dd13a.jpg',
        label: 'Villa'
    }
    // Add more property data as needed
];

const HomeScreen = ({ navigation }: { navigation: NavigationProp<HomeParamList> }) => {
    const [selectedCategory, setSelectedCategory] = useState('All');

    const categoryTab = ({ item }: { item: CategoryTab }) => (
        <Pressable
            style={[
                styles.categoryButton,
                item.name === selectedCategory && styles.categoryButtonSelected
            ]}
            onPress={() => setSelectedCategory(item.name)}
        >
            <Text
                style={[
                    styles.categoryText,
                    item.name === selectedCategory && styles.categoryTextSelected
                ]}
            >
                {item.name}
            </Text>
        </Pressable>
    );
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={styles.topContainer}>
                <View style={styles.headerContainer}>
                    <View>
                        <CustomText variant='h3' color='#cccccc' fontFamily={FONTS.REGULAR}>
                            Hi Aditya!👋
                        </CustomText>
                        <CustomText variant='h4' color='black' fontFamily={FONTS.SEMI_BOLD}>
                            Welcome to Rentals!
                        </CustomText>
                    </View>
                    <View style={styles.headerBtnContainer}>
                        <Pressable
                            style={{
                                width: hp('6%'),
                                height: hp('6%'),
                                borderColor: '#cccccc',
                                borderWidth: 0.5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 12
                            }}
                            onPress={() => {
                                navigation.navigate('Messages');
                            }}
                        >
                            <MessageIcon name='chat' size={24} color='#cccccc' />
                        </Pressable>
                        <Pressable
                            style={{
                                width: hp('6%'),
                                height: hp('6%'),
                                borderColor: '#cccccc',
                                borderWidth: 0.5,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 12
                            }}
                            onPress={() => {
                                navigation.navigate('Notifications');
                            }}
                        >
                            <BellIcon name='bell' size={24} color='#cccccc' />
                        </Pressable>
                    </View>
                </View>

                <View style={styles.headerSearchContainer}>
                    <Pressable
                        style={styles.searchContainer}
                        onPress={() => {
                            navigation.navigate('Search');
                        }}
                    >
                        <SearchIcon name='search' size={24} color='black' />
                        <CustomText variant='h5' fontFamily={FONTS.MEDIUM} color='#cccccc'>
                            Search...
                        </CustomText>
                    </Pressable>
                    <Pressable style={styles.menuBtn}>
                        <MenuIcon name='menu-fold' size={24} color='black' />
                    </Pressable>
                </View>
            </View>
            <Animated.View style={{ width: '100%' }}>
                <FlatList
                    data={categories}
                    renderItem={categoryTab}
                    keyExtractor={(item) => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.listContainer}
                />
            </Animated.View>

            <FlatList
                style={{ backgroundColor: 'white' }}
                data={properties}
                renderItem={({ item }) => (
                    <PropertyCard
                        title={item.title}
                        location={item.location}
                        price={item.price}
                        rating={item.rating}
                        image={item.image}
                        label={item.label}
                    />
                )}
                keyExtractor={(item) => item.id}
                horizontal={false}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    topContainer: {
        height: hp('16%'),
        backgroundColor: 'white',
        paddingBottom: 10,
        borderBottomColor: '#efefef',
        borderBottomWidth: 0.6,
        zIndex: 2,
        position: 'relative'
    },
    headerContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 6,
        paddingHorizontal: 20
    },
    headerBtnContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 10
    },
    headerSearchContainer: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
        height: hp('6.6%'),
        marginTop: hp('1%')
    },
    searchContainer: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
        backgroundColor: 'white',
        borderWidth: 0.5,
        borderColor: '#cccccc',
        paddingLeft: 20,
        paddingRight: 10,
        borderRadius: 32,
        shadowColor: 'gray', // Black color for shadow
        shadowOffset: { width: 0, height: 2 }, // Position of shadow (width and height)
        shadowOpacity: 0.8, // Opacity of shadow
        shadowRadius: 6, // Blur radius of shadow
        // Elevation for Android
        elevation: 8
    },
    menuBtn: {
        padding: 10,
        backgroundColor: 'white',
        borderColor: 'darkgray',
        borderWidth: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    listContainer: {
        paddingVertical: 10,
        paddingHorizontal: 20
    },
    categoryButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        marginRight: 10
    },
    categoryButtonSelected: {
        backgroundColor: '#292929'
    },
    categoryText: {
        color: '#999999',
        fontWeight: '500'
    },
    categoryTextSelected: {
        color: 'white'
    }
});
