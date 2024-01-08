import axios from "axios";

import {
    setAuthData,
    setAuthPersonalData,
} from "../redux/auth-reducer";

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "8746e110-1bed-4493-bdb9-67af6a296037",
    },
});


export const getAuthDataAndPersonalData = () => (dispatch) => {
    return instance.get("auth/me")
        .then((authResponse) => {
            if (authResponse.data.resultCode === 0) {
                const { id, login, email } = authResponse.data.data;
                dispatch(setAuthData(id, email, login, true));

                return instance.get(`profile/${id}`);
            }
        })
        .then((personalDataResponse) => {
            if (personalDataResponse) {
                dispatch(setAuthPersonalData(personalDataResponse.data));
            }
        })
        .catch((error) => {
            console.log(error);
        });
};








