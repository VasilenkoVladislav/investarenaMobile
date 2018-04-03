import ModalComments from './ModalComments';
import ModalManagePost from './ModalManagePost';
import ModalReplies from './ModalReplies';
import ModalSharePost from './ModalSharePost';
import React from 'react';

const Modals = () => {
    return (
        <React.Fragment>
            <ModalComments/>
            <ModalReplies/>
            <ModalManagePost/>
            <ModalSharePost/>
        </React.Fragment>
    );
};

export default Modals;