import Geolocation from '@react-native-community/geolocation';
import { useEffect, useState } from 'react';
import { Alert, PermissionsAndroid, Platform, StyleSheet, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';

type LocationType = {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
};

const MapScreen = () => {
    const [location, setLocation] = useState<LocationType | null>(null);

    const defaultLocation = {
        latitude: 23.0225, // Ahmedabad latitude
        longitude: 72.5714,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    };

    const requestLocationPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
                );
                if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                    console.log('PERMISSION GRANTED');
                    getUserCurrentLocation();
                } else {
                    Alert.alert(
                        'Permission denied',
                        'Location permission is required to show your location on the map.'
                    );
                }
            } catch (error) {
                console.warn(error);
            }
        }
    };

    const getUserCurrentLocation = () => {
        Geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords;
            setLocation({
                latitude,
                longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            });
        });
    };

    useEffect(() => {
        requestLocationPermission();
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <MapView
                style={{ width: '100%', height: '100%' }}
                region={location ?? defaultLocation}
                onRegionChangeComplete={(data) => console.log("user's location", data)}
                provider={PROVIDER_GOOGLE}
                showsUserLocation={true}
                showsMyLocationButton={true}
            >
                <Marker coordinate={location ?? defaultLocation} title='Your Current Location' />
            </MapView>
        </View>
    );
};

export default MapScreen;

const styles = StyleSheet.create({});
