import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../main/HomeScreen';
import ProfileScreen from '../main/ProfileScreen';
import MessageScreen from '../main/MessageScreen';
import ContractsScreen from '../main/ContractsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import WishlistScreen from '../main/WishlistScreen';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: hp("8%"), // Increase height here
          maxHeight:100,
          shadowColor: 'gray', // Shadow color
          shadowOffset: {width: 4, height: 8}, // Shadow offset for subtle effect
          shadowOpacity: 1, // Shadow transparency
          shadowRadius: 10, // Blur effect
          elevation: 4, // Elevation for Android
        },
        tabBarShowLabel: false,
        headerTitleAlign:"center"
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="home" size={wp("6.5%")} color="#0c56e9" />
            ) : (
              <Ionicons name="home-outline" size={wp("6.5%")} color="#999999" />
            ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="heart-sharp" size={wp("6.5%")} color="#0c56e9" />
            ) : (
              <Ionicons name="heart-outline" size={wp("6.5%")} color="#999999" />
            ),
        }}
      />
      <Tab.Screen
        name="My Contracts"
        component={ContractsScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <MaterialCommunityIcon
                name="file-account"
                size={wp("7.5%")}
                color="#0c56e9"
              />
            ) : (
              <MaterialCommunityIcon
                name="file-account-outline"
                size={wp("7.5%")}
                color="#999999"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="chatbubble-ellipses" size={wp("6.5%")} color="#0c56e9" />
            ) : (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={wp("6.5%")}
                color="#999999"
              />
            ),
          tabBarBadge: 1,
          tabBarBadgeStyle:{
              marginTop:hp("1.2%")
          }
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome name="user" size={wp("7.5%")} color="#0c56e9" />
            ) : (
              <FontAwesome name="user-o" size={wp("6.5%")} color="#999999" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
