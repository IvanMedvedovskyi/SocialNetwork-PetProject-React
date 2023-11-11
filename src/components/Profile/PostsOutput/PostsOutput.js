import posts from './Postsoutput.module.scss'
import avatar from './../../../testImage/noUserPhoto.png'

const PostsOutput = ({ postsList, authPersonalDataProto }) => {
    return (
        <div className={posts.container}>
            {postsList.map((post, index) => (
                <div className={posts.comments__container} key={index}>
                    <div className="smallAvatar">
                        <img className={posts.postOutPutIMG} src={authPersonalDataProto ? authPersonalDataProto : avatar} />
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