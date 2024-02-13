import {
    setAuthData,
    setAuthPersonalData, setPersonalPhoto,
} from "../redux/auth-reducer";
import {setStatus} from "../redux/profile-reducer";
import {instance} from "./instance";



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

export const getAuthDataAndPersonalData = () => async (dispatch) => {
    try {
        const authResponse = await instance.get("auth/me");

        if (authResponse.data.resultCode === 0) {
            const { id, login, email } = authResponse.data.data;
            dispatch(setAuthData(id, email, login, true));

            const personalDataResponse = await instance.get(`profile/${id}`);

            if (personalDataResponse.data) {
                dispatch(setAuthPersonalData(personalDataResponse.data));
            }
        }
    } catch (error) {
        console.error("Error while retrieving user data:", error.message);
    }
};

export const savePhoto = (file) => async (dispatch) => {
    try{
        const formData = new FormData()
        formData.append("image", file);

        const savePhotoResponse = await instance.put("/profile/photo", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        })

        if(savePhotoResponse.data.resultCode === 0) {
            await dispatch(setPersonalPhoto(savePhotoResponse.data.data.photos))
            await dispatch(getAuthDataAndPersonalData())
        }
    } catch (error) {
        console.log('Error while updating photo', error.message)
    }
}








