import {getAuthDataAndPersonalData} from "./profile-api.ts";
import {actions} from "../redux/auth-reducer.ts";
import {instance} from "./instance.ts";

const handleResponse = (response, successCallback, errorCallback, captchaCallback) => {
    if (response.data.resultCode === 0) {
        successCallback();
    } else {
        if(response.data.resultCode === 10) {
            captchaCallback()
        }
        const errorMessage = response.data.messages.join(', ');
        errorCallback(errorMessage)
    }
};

const handleNetworkError = (error) => {
    console.error("Произошла ошибка:", error.message);
};

export const login = (email, password, rememberMe, errorCallback, captcha) => async (dispatch) => {
    try {
        const response = await instance.post("auth/login", { email, password, rememberMe, captcha });
        handleResponse(response, () => dispatch(getAuthDataAndPersonalData()), errorCallback, () => dispatch(getCaptchaUrl()));
    } catch (error) {
        handleNetworkError(error);
    }
};

export const logout = () => async (dispatch) => {
    try {
        const response = await instance.delete("auth/login");
        handleResponse(response, () => {
            dispatch(actions.setAuthData(null, null, null, false));
            dispatch(actions.setAuthPersonalData([]));
            dispatch(actions.getCaptchaSuccess(null))
        });
    } catch (error) {
        handleNetworkError(error);
    }
};

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await instance.get("/security/get-captcha-url")
    const captchaUrl = response.data.url;

    dispatch(getCaptchaSuccess(captchaUrl))
}
