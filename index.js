import { AppRegistry } from 'react-native';
import App from './src/components/App';
import configureStore from './src/redux/configureStore';
import React from 'react';
import { Provider } from 'react-redux';

const store = configureStore();

const EntryPoint = () => (
    <Provider store={store}>
        <App />
    </Provider>);

AppRegistry.registerComponent('InvestArenaMobile', () => EntryPoint);
