import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {addNewPost, onInputChange} from "../redux/profile-reducer";

const ProfileContainer = () => {
    const dispatch = useDispatch()
    const posts = useSelector((state) => state.profile.posts)
    const newPostText = useSelector((state) => state.profile.newPostText);
    const authPersonalData = useSelector((state) => state.auth.authPersonalData);
    const authPersonalDataProto = useSelector((state) => state.auth.authPersonalData.photos?.small);

    let setInputChange = (event) => {
        let text = event.target.value;
        dispatch(onInputChange(text));
    }

    let setNewPost = () => {
        dispatch(addNewPost())
    }

    return (<Profile
        authPersonalData={authPersonalData}
        authPersonalDataProto={authPersonalDataProto}
        setInputChange={setInputChange}
        setNewPost={setNewPost}
        newPostText={newPostText}
        postsList={posts}/>)
}

export default ProfileContainer;