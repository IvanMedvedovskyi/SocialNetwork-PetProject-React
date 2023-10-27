import profile from './Profile.module.scss'
import banner from './profileImages/banner.png'
import avatar from './profileImages/avatar.png'
import PostsInput from "./PostsInput/PostsInput";

const Profile = ({setInputChange, setNewPost, newPostText, postsList }) => {
    return (
        <div className={profile.main}>
            <div className={profile.banner}><img src={banner} alt="banner"/></div>
            <div className={profile.profileInfo}>
                <div className={profile.avatar}><img src={avatar} alt="avatar"/></div>
                <div className={profile.information}>
                    <div>
                        <h1 className={profile.title}>Ivan Medvedovskiy</h1>
                        <div className={profile.data} style={{marginBottom: '35px'}}>@ivanmedvedovskiy</div>
                        <div className={profile.data}>Date of Birth: 6th of April</div>
                        <div className={profile.data}>City: Dnipro</div>
                        <div className={profile.data}>Education: NTU DP</div>
                        <div className={profile.data}>WebSite: https://github.com/IvanMedvedovskyi</div>
                    </div>
                </div>
            </div>

            <PostsInput setInputChange={setInputChange} setNewPost={setNewPost} newPostText={newPostText} postsList={postsList}/>

        </div>
    )
}

export default Profile;