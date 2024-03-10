import posts from './Postsoutput.module.scss'
import avatar from './../../../assets/GlobalImage/noUserPhoto.png'
import {PostListType} from "../Profile";
import {PhotosType} from "../../../types/types";

type PostOutputType = {
    postsList: PostListType
    authPersonalDataProto: PhotosType
}

const PostsOutput: React.FC<PostOutputType> = ({ postsList, authPersonalDataProto }) => {
    return (
        <div className={posts.container}>
            {postsList.map((post, index) => (
                <div className={posts.comments__container} key={index}>
                    <div className="smallAvatar">
                        <img className={posts.postOutPutIMG} src={authPersonalDataProto ? authPersonalDataProto : avatar} alt="smallAvatar"/>
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