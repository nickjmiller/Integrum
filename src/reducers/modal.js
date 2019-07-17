import { ACTION, MODAL_TYPE } from "../constants";

const initialState = {
    modalProps: {},
    modalType: MODAL_TYPE.HIDDEN,
};

const modal = (state = initialState, action) => {
    switch (action.type) {
    case ACTION.SHOW_MODAL:
        return {
            modalProps: action.modalProps,
            modalType: action.modalType,
        };
    case ACTION.HIDE_MODAL:
        return initialState;
    default:
        return state;
    }
};

export default modal;