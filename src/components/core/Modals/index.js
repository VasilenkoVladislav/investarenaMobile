import ModalManagePost from './ModalManagePost';
import ModalSharePost from './ModalSharePost';
import React from 'react';

const Modals = () => {
    return (
        <React.Fragment>
            <ModalManagePost/>
            <ModalSharePost/>
        </React.Fragment>
    );
};

export default Modals;