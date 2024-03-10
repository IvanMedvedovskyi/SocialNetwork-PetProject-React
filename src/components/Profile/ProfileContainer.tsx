import Profile from "./Profile.tsx";
import {useDispatch, useSelector} from "react-redux";
import {addNewPost} from "../../assets/redux/profile-reducer.ts";
import {actions} from "../../assets/redux/profile-reducer.ts";
import React, {FC, useEffect} from "react";
import {getStatus, savePhoto} from "../../assets/api/profile-api.ts";
import {useNavigate} from "react-router-dom";
import {AppDispatch, RootState} from "../../assets/redux/store";

const ProfileContainer: FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const id = useSelector((state: RootState) => state.auth.authPersonalData.userId);
    const status = useSelector((state: RootState) => state.profile.status);
    const posts = useSelector((state: RootState) => state.profile.posts)
    const newPostText = useSelector((state: RootState) => state.profile.newPostText);
    const authPersonalData = useSelector((state: RootState) => state.auth.authPersonalData);
    const authPersonalDataProto = useSelector((state: RootState) => state.auth.authPersonalData.photos?.small);
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)

    const setInputChange = (event) => {
        let text = event.target.value;
        dispatch(actions.onInputChange(text));
    }

    const setNewPost = () => {
        dispatch(addNewPost())
    }

    const onMainPhotoSelected = (e) => {
        if(e.target.files.length) {
            dispatch(savePhoto(e.target.files[0]))
        }
    }

    useEffect(() => {
        if(id !== undefined) {
            dispatch(getStatus(id))
        }
    }, [id, dispatch])


    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    return (<Profile
        onMainPhotoSelected={onMainPhotoSelected}
        status={status}
        authPersonalData={authPersonalData}
        authPersonalDataProto={authPersonalDataProto}
        setInputChange={setInputChange}
        setNewPost={setNewPost}
        newPostText={newPostText}
        postsList={posts}/>)
}

export default ProfileContainer;