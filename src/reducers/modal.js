const initialState = {
    modalProps: {},
};

const modal = (state = initialState, action) => {
    switch (action.type) {
    case "SHOW_MODAL":
        return {
            modalProps: action.modalProps,
            type: action.modalType,
        };
    case "HIDE_MODAL":
        return initialState;
    default:
        return state;
    }
};

export default modal;