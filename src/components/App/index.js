import App from './App';
import { connect } from 'react-redux'
import { getNav } from '../../redux/selectors/nav';

function mapStateToProps (state) {
    return {
        nav: getNav(state)
    }
}

export default connect(mapStateToProps)(App);
