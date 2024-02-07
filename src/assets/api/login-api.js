import {getAuthDataAndPersonalData, instance} from "./api";
import {setAuthData, setAuthPersonalData} from "../redux/auth-reducer";

const handleResponse = (response, successCallback) => {
    if (response.data.resultCode === 0) {
        successCallback();
    } else {
        console.error("Error:", response.data.messages);
    }
};

const handleNetworkError = (error) => {
    console.error("Произошла ошибка:", error.message);
};

export const login = (email, password, rememberMe) => async (dispatch) => {
    try {
        const response = await instance.post("auth/login", { email, password, rememberMe });
        handleResponse(response, () => dispatch(getAuthDataAndPersonalData()));
    } catch (error) {
        handleNetworkError(error);
    }
};

export const logout = () => async (dispatch) => {
    try {
        const response = await instance.delete("auth/login");
        handleResponse(response, () => {
            dispatch(setAuthData(null, null, null, false));
            dispatch(setAuthPersonalData([]));
        });
    } catch (error) {
        handleNetworkError(error);
    }
};
