import {getAuthDataAndPersonalData} from "../api/profile-api.ts";
import {ActionTypes} from "../../types/types";
import {AppDispatch} from "./store";

const INITIALIZED_SUCCESS: 'INITIALIZED_SUCCESS' = 'INITIALIZED_SUCCESS';

type InitialStateType = {
    initialized: boolean,
}

const initialState = {
    initialized: false,
}

const appReducer = (state: InitialStateType = initialState, action: ActionTypes<typeof actions>): InitialStateType => {
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

export const actions = {
    setInitialize: () => ({type: INITIALIZED_SUCCESS})
}

export const initialize = () => async (dispatch: AppDispatch) => {
    try {
        await dispatch(getAuthDataAndPersonalData());
        dispatch(actions.setInitialize());
    } catch (error) {
        console.error("Initialization error:", error);
    }
};


export default appReducer;