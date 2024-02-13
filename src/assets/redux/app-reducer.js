import {getAuthDataAndPersonalData} from "../api/profile-api";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';

const initialState = {
    initialized: false,
}


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true,
            }
        default:
            return state;
    }
}

export const setInitialize = () => ({
    type: INITIALIZED_SUCCESS,
})

export const initialize = () => async (dispatch) => {
    try {
        await dispatch(getAuthDataAndPersonalData());
        dispatch(setInitialize());
    } catch (error) {
        console.error("Initialization error:", error);
    }
};


export default appReducer;