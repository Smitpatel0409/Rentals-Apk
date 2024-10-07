/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet } from 'react-native';

import StackNavigator from './src/screens/navigation/StackNavigator';
import { rtkStore } from './src/store/rtkStore';
import { Provider } from 'react-redux';

function App(): React.JSX.Element {
    return (
        <Provider store={rtkStore}>
            <StackNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({});

export default App;
