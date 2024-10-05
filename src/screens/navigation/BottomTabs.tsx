import {StyleSheet, Text, View} from 'react-native';
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

const BottomTabs = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 60, // Increase height here
          paddingBottom: 10,
          shadowColor: "#e8e8e8",  // Shadow color
          shadowOffset: { width: 2, height: 4 },  // Shadow offset for subtle effect
          shadowOpacity: 0.8,  // Shadow transparency
          shadowRadius: 4,  // Blur effect
          elevation: 4,  // Elevation for Android
        },
        tabBarShowLabel:false
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: '#0c56e9',
          tabBarInactiveTintColor: "#999999",
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="home" size={24} color ='#0c56e9' />
            ) : (
              <Ionicons name="home-outline" size={24} color="#999999" />
            ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishlistScreen}
        options={{
          tabBarActiveTintColor: '#0c56e9',
          tabBarInactiveTintColor: "#999999",
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="heart-sharp" size={24} color ='#0c56e9' />
            ) : (
              <Ionicons name="heart-outline" size={24} color="#999999" />
            ),
        }}
      />
      <Tab.Screen
        name="My Contracts"
        component={ContractsScreen}
        options={{
          tabBarActiveTintColor: '#0c56e9',
          tabBarInactiveTintColor: "#999999",
          tabBarIcon: ({focused}) =>
            focused ? (
              <MaterialCommunityIcon
                name="file-account"
                size={28}
                color ='#0c56e9'
              />
            ) : (
              <MaterialCommunityIcon
                name="file-account-outline"
                size={28}
                color="#999999"
              />
            ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={MessageScreen}
        options={{
          tabBarActiveTintColor: '#0c56e9',
          tabBarInactiveTintColor: "#999999",
          tabBarIcon: ({focused}) =>
            focused ? (
              <Ionicons name="chatbubble-ellipses" size={24} color ='#0c56e9' />
            ) : (
              <Ionicons
                name="chatbubble-ellipses-outline"
                size={24}
                color="#999999"
              />
            ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: '#0c56e9',
          tabBarInactiveTintColor: "#999999",
          tabBarIcon: ({focused}) =>
            focused ? (
              <FontAwesome name="user" size={28} color ='#0c56e9'  />
            ) : (
              <FontAwesome name="user-o" size={24} color="#999999" />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
