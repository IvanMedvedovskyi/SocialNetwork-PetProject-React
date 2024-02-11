import {getAuthDataAndPersonalData, instance} from "./api";
import {setAuthData, setAuthPersonalData} from "../redux/auth-reducer";

const handleResponse = (response, successCallback, errorCallback) => {
    if (response.data.resultCode === 0) {
        successCallback();
    } else {
        const errorMessage = response.data.messages.join(', ');
        errorCallback(errorMessage)
    }
};

const handleNetworkError = (error) => {
    console.error("Произошла ошибка:", error.message);
};

export const login = (email, password, rememberMe, errorCallback) => async (dispatch) => {
    try {
        const response = await instance.post("auth/login", { email, password, rememberMe });
        handleResponse(response, () => dispatch(getAuthDataAndPersonalData()), errorCallback);
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
