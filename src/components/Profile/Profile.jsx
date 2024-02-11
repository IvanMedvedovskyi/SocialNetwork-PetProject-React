import profile from './Profile.module.scss';
import banner from './profileImages/banner.png';
import avatar from './../../assets/GlobalImage/noUserPhoto.png';
import PostsInput from "./PostsInput/PostsInput";
import Status from "./Status";
import AddNewPhoto from "./AddNewPhoto";
import ProfileInformation from "./ProfileInformation";
import {useState} from "react";
import changeIcon from '../../assets/GlobalImage/changeIcon.svg'
import ProfileInformationForm from "./ProfileInformationForm/ProfileInformationForm";

const Profile = ({setInputChange, setNewPost, newPostText, postsList, authPersonalData, authPersonalDataProto, status, onMainPhotoSelected}) => {
    const [editMode, setEditMode] = useState(false);
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
                    {editMode ?
                        <ProfileInformationForm authPersonalData={authPersonalData} editMode={setEditMode}/>
                        : <div>
                            <h1 className={profile.title}>{authPersonalData.fullName}</h1>
                            <Status status={status}/>
                            <ProfileInformation authPersonalData={authPersonalData} />
                        </div>}
                </div>
                <div className={profile.changeInfo} onClick={() => setEditMode(true)}>
                    <img src={changeIcon} alt="changeIcon"/>
                </div>
            </div>
            <PostsInput setInputChange={setInputChange} setNewPost={setNewPost} newPostText={newPostText} postsList={postsList} authPersonalDataProto={authPersonalDataProto}/>
        </div>
    )
}

export default Profile;