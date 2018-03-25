import { addNavigationHelpers } from 'react-navigation';
import { addListener } from '../../redux/utils/reactNavigation';
import React, { Component } from 'react';
import AppNavigator from '../../router';
import { currentTime } from '../../helpers/currentTime';

class App extends Component {
    constructor (props) {
        super(props);
    }
    componentDidMount () {
        currentTime.startCountdown();
    }
    render () {
        const { dispatch, nav } = this.props;
        return (
            <AppNavigator
                navigation={addNavigationHelpers({
                    dispatch,
                    state: nav,
                    addListener
                })}/>
        );
    }
}

export default App;
