import Profile from "./Profile";
import {useDispatch, useSelector} from "react-redux";
import {addNewPost, onInputChange} from "../redux/profile-reducer";


const ProfileContainer = () => {
    const posts = useSelector((state) => state.profile.posts)
    const newPostText = useSelector((state) => state.profile.newPostText)

    const dispatch = useDispatch()

    let setInputChange = (event) => {
        let text = event.target.value;
        dispatch(onInputChange(text));
    }

    let setNewPost = () => {
        dispatch(addNewPost())
    }

    return (<Profile
        setInputChange={setInputChange}
        setNewPost={setNewPost}
        newPostText={newPostText}
        postsList={posts}/>)
}

export default ProfileContainer;