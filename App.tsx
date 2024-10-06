/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';

import StackNavigator from './src/screens/navigation/StackNavigator';

function App(): React.JSX.Element {
  return <StackNavigator />;
}

const styles = StyleSheet.create({});

export default App;
