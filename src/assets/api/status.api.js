import {setStatus} from "../redux/profile-reducer";
import {instance} from "./api";

export const getStatus = (id) => (dispatch) => {
    instance.get("profile/status/" + id)
        .then((response) => {
            if(response.data === null) {
                dispatch(setStatus("No status"))
            } else {
                dispatch(setStatus(response.data))
            }
        } )
}
export const updateStatus = (status) => (dispatch) => {
    if (status.length > 300) {
        alert("Status length should not exceed 300 characters.");
        return;
    }

    instance.put("profile/status", { status })
        .then((response) => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
        .catch((error) => {
            console.error("Update Status Error:", error);
        });
};
