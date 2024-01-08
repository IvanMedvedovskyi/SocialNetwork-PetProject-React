import {setFollow, setLoading, setUnFollow} from "../redux/users-reducer";
import {instance} from "./api";

export const setFollowUser = (id) => (dispatch) => {
    dispatch(setLoading(true));
    instance
        .post(`follow/${id}`)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setLoading(false));
                dispatch(setFollow(id));
            }
        })
        .catch((error) => console.log(error));
};
export const setUnFollowUser = (id) => (dispatch) => {
    dispatch(setLoading(true));
    instance
        .delete(`follow/${id}`)
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setLoading(false));
                dispatch(setUnFollow(id));
            }
        })
        .catch((error) => console.log(error));
};