import {actions} from "../redux/users-reducer.ts";
import {setLoadingProfile, setUserProfile} from "../redux/profile-reducer.ts";
import {instance} from "./instance.ts";
import {AppDispatch} from "../redux/store";

export const getUsers = (currentPage: number, count: number) => (dispatch: AppDispatch) => {
    dispatch(actions.setLoading(true));
    instance
        .get(`users?page=${currentPage}&count=${count}`)
        .then((response) => {
            dispatch(actions.setLoading(false));
            dispatch(actions.setUsers(response.data.items));
            dispatch(actions.setTotalUsersCount(response.data.totalCount));
        })
        .catch((error) => console.log(error));
};

export const getUserProfile = (id: number) => (dispatch: AppDispatch) => {
    dispatch(setLoadingProfile(true));
    instance
        .get(`profile/${id}`)
        .then((response) => {
            dispatch(setLoadingProfile(false));
            dispatch(setUserProfile(response.data));
        })
        .catch((error) => console.log(error));
};


