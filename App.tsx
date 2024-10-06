/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';

import StackNavigator from './src/screens/navigation/StackNavigator';
import { Provider } from 'react-redux';
import { rtkStore } from './src/store/rtkStore';

function App(): React.JSX.Element {
    return (
        <Provider store={rtkStore}>
            <StackNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({});

export default App;
