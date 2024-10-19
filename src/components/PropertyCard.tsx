import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import StarIcon from 'react-native-vector-icons/Ionicons';
import TagIcon from 'react-native-vector-icons/FontAwesome'; // Import FontAwesome for tag icon
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { FONTS } from '../constants/fonts';
import CustomText from './common/CustomText';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type PropertyCardParamList = {
    PropertyDetails: undefined;
    // Add other routes here
};

type PropertyCardNavigationProp = NativeStackNavigationProp<
    PropertyCardParamList,
    'PropertyDetails'
>;

interface PropertyCardProps {
    title: string;
    location: string;
    price: string | number;
    rating: string | number;
    image: string;
    label?: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
    title,
    location,
    price,
    rating,
    image,
    label
}) => {
    const navigation = useNavigation<PropertyCardNavigationProp>();
    return (
        <Pressable
            style={styles.cardContainer}
            onPress={() => {
                navigation.navigate('PropertyDetails');
            }}
        >
            <View style={styles.imageContainer}>
                <Image source={{ uri: image }} style={styles.image} />
                {label && (
                    <View style={styles.labelContainer}>
                        <Text style={styles.labelText}>{label}</Text>
                    </View>
                )}
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.location}>{location}</Text>
                <View style={styles.footerContainer}>
                    <View style={styles.priceContainer}>
                        <TagIcon name='tag' size={18} color='#cccccc' style={{ marginRight: 4 }} />
                        <CustomText color='#4CAF50' fontFamily={FONTS.BOLD}>
                            ₹ {price}
                            <CustomText fontFamily={FONTS.BOLD} color='#999999'>
                                {' '}
                                / Month
                            </CustomText>
                        </CustomText>
                    </View>
                    <View style={styles.ratingContainer}>
                        <StarIcon name='star' size={14} color='black' style={{ marginBottom: 4 }} />
                        <CustomText variant='body' color='black' fontFamily={FONTS.REGULAR}>
                            {rating}
                        </CustomText>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'white',
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: 20,
        shadowColor: 'gray',
        shadowOffset: { width: 1, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 5,
        width: wp('90%'),
        height: hp('58%'),
        alignSelf: 'center'
    },
    imageContainer: {
        width: '100%',
        height: hp('42%'),
        position: 'relative'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    labelContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'blue',
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 8
    },
    labelText: {
        color: 'white',
        fontSize: 12,
        fontFamily: FONTS.MEDIUM
    },
    contentContainer: {
        padding: 16
    },
    title: {
        fontSize: 16,
        fontFamily: FONTS.SEMI_BOLD,
        color: 'black'
    },
    location: {
        fontSize: 14,
        fontFamily: FONTS.REGULAR,
        color: '#999999',
        marginVertical: 4
    },
    footerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 8
    },
    priceContainer: {
        flexDirection: 'row',
        // alignItems: 'center',
        gap: 6
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 6
    }
});

export default PropertyCard;
