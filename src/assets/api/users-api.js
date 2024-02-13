import {setLoading, setTotalUsersCount, setUsers} from "../redux/users-reducer";
import {setLoadingProfile, setUserProfile} from "../redux/profile-reducer";
import {instance} from "./instance";


export const getUsers = (currentPage, count) => (dispatch) => {
    dispatch(setLoading(true));
    instance
        .get(`users?page=${currentPage}&count=${count}`)
        .then((response) => {
            dispatch(setLoading(false));
            dispatch(setUsers(response.data.items));
            dispatch(setTotalUsersCount(response.data.totalCount));
        })
        .catch((error) => console.log(error));
};

export const getUserProfile = (id) => (dispatch) => {
    dispatch(setLoadingProfile(true));
    instance
        .get(`profile/${id}`)
        .then((response) => {
            dispatch(setLoadingProfile(false));
            dispatch(setUserProfile(response.data));
        })
        .catch((error) => console.log(error));
};


