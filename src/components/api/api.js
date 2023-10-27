import axios from "axios";
import {setLoading, setTotalUsersCount, setUsers} from "../redux/users-reducer";

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