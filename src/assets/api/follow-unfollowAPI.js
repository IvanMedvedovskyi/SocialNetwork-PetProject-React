import {setFollow, setLoading, setUnFollow} from "../redux/users-reducer";
import {instance} from "./instance";

export const setFollowUser = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await instance.post(`follow/${id}`);
        if (response.data.resultCode === 0) {
            dispatch(setLoading(false));
            dispatch(setFollow(id));
        }
    } catch (error) {
        console.error("Error when subscribing to user:", error.message);
    }
};

export const setUnFollowUser = (id) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await instance.delete(`follow/${id}`);
        if (response.data.resultCode === 0) {
            dispatch(setLoading(false));
            dispatch(setUnFollow(id));
        }
    } catch (error) {
        console.error("Error unsubscribing from user:", error.message);
    }
};
