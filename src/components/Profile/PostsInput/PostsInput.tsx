import posts from './Posts.module.scss';
import PostsOutput from "../PostsOutput/PostsOutput.tsx";
import {PostListType} from "../Profile";
import {PhotosType} from "../../../types/types";

type PostsInputPropsType = {
    setInputChange: () => void
    setNewPost: () => void
    newPostText: string
    postsList: PostListType
    authPersonalDataProto: PhotosType
}

const PostsInput: React.FC<PostsInputPropsType> = ({setInputChange, setNewPost, newPostText, postsList, authPersonalDataProto}) => {

    return (
        <div className={posts.main}>
            <div className={posts.myPosts}><h1>My posts:</h1></div>
            <div><input value={newPostText} onChange={setInputChange} className={posts.input} type="text" placeholder='Enter a comment...'/></div>
            <div className={posts.sendBtnDiv}><button onClick={setNewPost} className={posts.sendButton}>Send comment</button></div>

            <PostsOutput postsList={postsList} authPersonalDataProto={authPersonalDataProto}/>
        </div>
    )
}

export default PostsInput;