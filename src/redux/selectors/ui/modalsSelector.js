// selector
export const getModalsState = (state) => state.ui.modals;
export const getModalInfoState = (state, typeModal) => {
    const modal = state.ui.modals.find(modal => modal.type === typeModal);
    return modal ? { isOpen: true, data: modal.data } : { isOpen: false, data: {} }
};

