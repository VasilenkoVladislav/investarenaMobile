import { FlatList, Text } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    posts: PropTypes.array.isRequired,
    getPosts: PropTypes.func.isRequired
};

class Posts extends Component {
    constructor (props) {
        super(props);
    }
    componentWillMount () {
        this.props.getPosts();
    }
    render () {
        return (
            <FlatList
                data={this.props.posts}
                renderItem={({post}) => <Text>{post.content}</Text>}/>
        )
    }
}

Posts.propTypes = propTypes;

export default Posts;

