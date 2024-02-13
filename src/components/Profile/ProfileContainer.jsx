import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {addNewPost, onInputChange} from "./../../assets/redux/profile-reducer";
import React, {useEffect} from "react";
import {getStatus} from "../../assets/api/profile-api";
import {useNavigate} from "react-router-dom";
import {savePhoto} from "../../assets/api/profile-api";

const ProfileContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const id = useSelector((state) => state.auth.authPersonalData.userId);
    const status = useSelector((state) => state.profile.status);
    const posts = useSelector((state) => state.profile.posts)
    const newPostText = useSelector((state) => state.profile.newPostText);
    const authPersonalData = useSelector((state) => state.auth.authPersonalData);
    const authPersonalDataProto = useSelector((state) => state.auth.authPersonalData.photos?.small);
    const isAuth = useSelector(state => state.auth.isAuth)

    const setInputChange = (event) => {
        let text = event.target.value;
        dispatch(onInputChange(text));
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