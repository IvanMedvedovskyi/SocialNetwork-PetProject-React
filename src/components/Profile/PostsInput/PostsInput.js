import posts from './Posts.module.scss';
import PostsOutput from "../PostsOutput/PostsOutput";

const PostsInput = ({setInputChange, setNewPost, newPostText, postsList}) => {

    return (
        <div className={posts.main}>
            <div className={posts.myPosts}><h1>My posts:</h1></div>
            <div><input value={newPostText} onChange={setInputChange} className={posts.input} type="text" placeholder='Enter a comment...'/></div>
            <div className={posts.sendBtnDiv}><button onClick={setNewPost} className={posts.sendButton}>Send comment</button></div>

            <PostsOutput postsList={postsList}/>
        </div>
    )
}

export default PostsInput;