import axios from "axios";
import {setLoading, setTotalUsersCount, setUsers} from "../redux/users-reducer";
import {setLoadingProfile, setUserProfile} from "../redux/profile-reducer";
import {setAuthData, setAuthPersonalData} from "../redux/auth-reducer";

export const getUsers = (currentPage, count) => (dispatch) => {
    dispatch(setLoading(true));
    const url = `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${count}`;
    return axios.get(url)
        .then(response => {
            dispatch(setLoading(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount))
        })
        .catch((error) => console.log(error));
}

export const getUserProfile = (id) => (dispatch) => {
    dispatch(setLoadingProfile(true));
    const url = `https://social-network.samuraijs.com/api/1.0/profile/${id}`;
    return axios.get(url)
        .then (response => {
            dispatch(setLoadingProfile(false));
            dispatch(setUserProfile(response.data));
        })
        .catch((error) => console.log(error));
}

export const getAuthDataAndPersonalData = () => (dispatch) => {
    const authUrl = `https://social-network.samuraijs.com/api/1.0/auth/me`;

    axios.get(authUrl,
        { withCredentials: true }
    )
        .then(authResponse => {
            if (authResponse.data.resultCode === 0) {
                const { id, login, email } = authResponse.data.data;
                dispatch(setAuthData(id, email, login));

                const personalDataUrl = `https://social-network.samuraijs.com/api/1.0/profile/${id}`;
                return axios.get(personalDataUrl);
            }
        })
        .then(personalDataResponse => {
            if (personalDataResponse) {
                dispatch(setAuthPersonalData(personalDataResponse.data));
            }
        })
        .catch(error => console.log(error));
}


