import {setLoading, setTotalUsersCount, setUsers} from "../redux/users-reducer";
import {setLoadingProfile, setUserProfile} from "../redux/profile-reducer";
import {instance} from "./api";

// export const getUsers = (currentPage, count) => (dispatch) => {
//     dispatch(setLoading(true));
//     instance
//         .get(`users?page=${currentPage}&count=${count}`)
//         .then((response) => {
//             dispatch(setLoading(false));
//             dispatch(setUsers(response.data.items));
//             dispatch(setTotalUsersCount(response.data.totalCount));
//         })
//         .catch((error) => console.log(error));
// };
// export const getUserProfile = (id) => (dispatch) => {
//     dispatch(setLoadingProfile(true));
//     instance
//         .get(`profile/${id}`)
//         .then((response) => {
//             dispatch(setLoadingProfile(false));
//             dispatch(setUserProfile(response.data));
//         })
//         .catch((error) => console.log(error));
// };

export const fetchData = (endpoint, setLoadingAction, setDataAction, setTotalUsersCountAction) => (dispatch) => {
    dispatch(setLoadingAction(true));

    instance
        .get(endpoint)
        .then((response) => {
            dispatch(setLoadingAction(false));

            if (setDataAction) {
                dispatch(setDataAction(response.data.items));
            }

            if (setTotalUsersCountAction) {
                dispatch(setTotalUsersCountAction(response.data.totalCount));
            }
        })
        .catch((error) => console.error("Fetch Data Error:", error.message));
};

export const getUsers = (currentPage, count) => fetchData(
    `users?page=${currentPage}&count=${count}`,
    setLoading,
    setUsers,
    setTotalUsersCount
);

export const getUserProfile = (id) => fetchData(
    `profile/${id}`,
    setLoadingProfile,
    setUserProfile
);



