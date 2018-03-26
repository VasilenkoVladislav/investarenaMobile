import { AppRegistry } from 'react-native';
import App from './src/components/App';
import configureStore from './src/redux/configureStore';
import React from 'react';
import { Provider } from 'react-redux';
import { platformService } from './src/platform/platformService';

const store = configureStore();
platformService.initialize(store);

const EntryPoint = () => (
    <Provider store={store}>
        <App />
    </Provider>);

AppRegistry.registerComponent('InvestArenaMobile', () => EntryPoint);
