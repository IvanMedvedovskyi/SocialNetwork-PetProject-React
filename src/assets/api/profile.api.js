import {setStatus} from "../redux/profile-reducer";
import {getAuthDataAndPersonalData, instance} from "./api";

export const getStatus = (id) => async (dispatch) => {
    try {
        const response = await instance.get(`profile/status/${id}`);
        const status = response.data === null ? "No status" : response.data;
        dispatch(setStatus(status));
    } catch (error) {
        console.error("Get Status Error:", error.message);
    }
};

export const updateStatus = (status) => async (dispatch) => {
    if (status.length > 300) {
        alert("Status length should not exceed 300 characters.");
        return;
    }

    try {
        const response = await instance.put("profile/status", { status });
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    } catch (error) {
        console.error("Update Status Error:", error.message);
    }
};

export const updateProfileInfo = (profile) => async (dispatch) => {
    try{
        const response = await instance.put("profile", profile)
        if (response.data.resultCode === 0) {
            dispatch(getAuthDataAndPersonalData())
        }
    } catch (error) {
        console.error("Update Profile Error", error.message)
    }
}

