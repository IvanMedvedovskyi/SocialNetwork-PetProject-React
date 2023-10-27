import posts from './Postsoutput.module.scss'
import avatar from '../profileImages/avatar_small.png'

const PostsOutput = ({ postsList }) => {
    return (
        <div className={posts.container}>
            {postsList.map((post, index) => (
                <div className={posts.comments__container} key={index}>
                    <div className="smallAvatar">
                        <img src={avatar} alt="small_avatar" />
                    </div>
                    <div className={posts.comments}>
                        <h1>{post.message}</h1>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PostsOutput;