import {getAuthDataAndPersonalData, instance} from "./api";
import {setAuthData, setAuthPersonalData} from "../redux/auth-reducer";

export const login = (email, password, rememberMe) => (dispatch) => {
    instance.post("auth/login", { email, password, rememberMe })
        .then(responseData => {
            if(responseData.data.resultCode === 0) {
                dispatch(getAuthDataAndPersonalData());
            }
        })
}

export const logout = () => (dispatch) => {
    instance.delete("auth/login")
        .then(responseData => {
            if (responseData.data.resultCode === 0) {
                dispatch(setAuthData(null, null, null, false));
                dispatch(setAuthPersonalData([]))
            }
        })
}
