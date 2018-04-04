import { FlatList, NetInfo } from 'react-native';
import Comment from './Comment';
import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    comments: PropTypes.array.isRequired
};

const Comments = ({comments, isLoading, getRefreshComments, getNextComments}) => {
    const onRefresh = async () => {
        const { type } = await NetInfo.getConnectionInfo();
        if (!isLoading && type !== 'none') {
            // getRefreshComments();
        }
    };
    const onEndReached = async () => {
        const { type } = await NetInfo.getConnectionInfo();
        if (!isLoading && type !== 'none') {
            // getNextComments();
        }
    };
    const renderItem = ({item}) => (
        <Comment comment={item}
                 currentUserId={this.props.currentUserId}
                 currentUserName={this.props.currentUserName}/>
    );
    return <FlatList
        data={comments}
        contentContainerStyle={{marginTop: 10}}
        keyExtractor={item => item.id}
        refreshing={isLoading}
        onRefresh={onRefresh}
        onEndReached={onEndReached}
        initialNumToRender={5}
        scrollEventThrottle={1}
        onEndReachedThreshold={1}
        progressViewOffset={40}
        renderItem={renderItem} />
};

Comments.propTypes = propTypes;

export default Comments;