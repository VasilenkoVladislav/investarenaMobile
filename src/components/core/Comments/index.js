import { connect } from 'react-redux';
import Comments from './Comments';

function mapStateToProps (state) {
    return {
        comments: []
    }
}

function mapDispatchTopProps (dispatch) {
    return {
        getRefreshComments: () => ({}),
        getNextComments: () => ({})
    }
}

export default connect(mapStateToProps, mapDispatchTopProps)(Comments);