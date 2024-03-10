import {actions} from "../redux/users-reducer.ts";
import {instance} from "./instance.ts";
import {AppDispatch} from "../redux/store";

export const setFollowUser = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(actions.setLoading(true));
    try {
        const response = await instance.post(`follow/${id}`);
        if (response.data.resultCode === 0) {
            dispatch(actions.setLoading(false));
            dispatch(actions.setFollow(id));
        }
    } catch (error) {
        console.error("Error when subscribing to user:", error.message);
    }
};

export const setUnFollowUser = (id: number) => async (dispatch: AppDispatch) => {
    dispatch(actions.setLoading(true));
    try {
        const response = await instance.delete(`follow/${id}`);
        if (response.data.resultCode === 0) {
            dispatch(actions.setLoading(false));
            dispatch(actions.setUnFollow(id));
        }
    } catch (error) {
        console.error("Error unsubscribing from user:", error.message);
    }
};
