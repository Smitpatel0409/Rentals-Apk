import { StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import LottieView from 'lottie-react-native';

const RTSplashScreen = () => {
    useEffect(() => {
        // Hide the native splash screen after a delay to show the Lottie animation
        // setTimeout(() => {
        //     // SplashScreen.hide();
        // }, 1000); // Delay to hide native splash screen
    }, []);
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../assets/lottie-animations/rentalsR.json')} // Your Lottie animation file
                style={{ width: '50%', height: '50%' }}
                autoPlay
                loop={false} // Set to true if you want to loop the animation
                onAnimationFinish={() => {
                    // Optionally navigate to the main screen after the animation ends
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF' // Match the splash background color
    }
});

export default RTSplashScreen;
