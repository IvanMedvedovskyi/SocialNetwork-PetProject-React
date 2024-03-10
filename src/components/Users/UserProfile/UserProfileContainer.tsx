import UserProfile from "./UserProfile.tsx";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getUserProfile} from "../../../assets/api/users-api.ts";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../../assets/redux/store";

const UserProfileContainer = () => {
    const { id } = useParams();
    const dispatch: AppDispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProfile(id))
    }, [id, dispatch])

    const profile = useSelector((state: RootState) => state.profile.profilePageData);
    const loading = useSelector((state: RootState) =>state.profile.isLoading)

    return (<UserProfile profile={profile} loading={loading}/>)
}

export default UserProfileContainer;