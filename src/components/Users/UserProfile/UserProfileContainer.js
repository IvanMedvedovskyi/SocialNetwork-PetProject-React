import UserProfile from "./UserProfile";
import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {getUserProfile} from "../../api/api";
import {useDispatch, useSelector} from "react-redux";

const UserProfileContainer = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserProfile(id))
    }, [id, dispatch])

    const profile = useSelector((state) => state.profile.profilePageData);
    const loading = useSelector((state) =>state.profile.isLoading)

    return (<UserProfile profile={profile} loading={loading}/>)
}

export default UserProfileContainer;