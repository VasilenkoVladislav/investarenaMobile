import { AppRegistry } from 'react-native';
import App from './src/components/App';
import configureStore from './src/redux/configureStore';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import { platformService } from './src/platform/platformService';

const { store, persistor } = configureStore();
platformService.initialize(store);

const EntryPoint = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <App />
        </PersistGate>
    </Provider>);

AppRegistry.registerComponent('InvestArenaMobile', () => EntryPoint);
