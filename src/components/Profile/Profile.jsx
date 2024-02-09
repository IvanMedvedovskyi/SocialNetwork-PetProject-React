import profile from './Profile.module.scss';
import banner from './profileImages/banner.png';
import avatar from './../../assets/GlobalImage/noUserPhoto.png';
import PostsInput from "./PostsInput/PostsInput";
import Status from "./Status";
import AddNewPhoto from "./AddNewPhoto";

const Profile = ({setInputChange, setNewPost, newPostText, postsList, authPersonalData, authPersonalDataProto, status, onMainPhotoSelected}) => {
    return (
        <div className={profile.main}>
            <div className={profile.banner}>
                <img src={banner} alt="banner"/>
            </div>
            <div className={profile.profileInfo}>
                <div className={profile.avatar}>
                    <img src={authPersonalData.photos?.large ? authPersonalData.photos?.large : avatar} alt="avatar"/>
                    <AddNewPhoto onMainPhotoSelected={onMainPhotoSelected}/>
                </div>
                <div className={profile.information}>
                    <div>
                        <h1 className={profile.title}>{authPersonalData.fullName}</h1>
                        <Status status={status}/>
                        <div className={profile.data}>Looking for a job: {authPersonalData.lookingForAJob ? authPersonalData.lookingForAJob : "No information"}</div>
                        <div className={profile.data}>Facebook: {authPersonalData.contacts?.facebook ? authPersonalData.contacts?.facebook : "No information"}</div>
                        <div className={profile.data}>GitHub: {authPersonalData.contacts?.github ? authPersonalData.contacts?.github : "No information"}</div>
                        <div className={profile.data}>MainLink: {authPersonalData.contacts?.mainLink ? authPersonalData.contacts?.mainLink : "No information"}</div>
                        <div className={profile.data}>Twitter: {authPersonalData.contacts?.twitter ? authPersonalData.contacts?.twitter : "No information"}</div>
                        <div className={profile.data}>Vk: {authPersonalData.contacts?.vk ? authPersonalData.contacts?.vk : "No information"}</div>
                        <div className={profile.data}>WebSite: {authPersonalData.contacts?.website ? authPersonalData.contacts?.website : "No information"}</div>
                        <div className={profile.data}>YouTube: {authPersonalData.contacts?.youtube ? authPersonalData.contacts?.youtube : "No information"}</div>
                    </div>
                </div>
            </div>

            <PostsInput setInputChange={setInputChange} setNewPost={setNewPost} newPostText={newPostText} postsList={postsList} authPersonalDataProto={authPersonalDataProto}/>

        </div>
    )
}

export default Profile;