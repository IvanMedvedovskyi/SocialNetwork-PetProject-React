import userProfile from './UserProfile.module.scss'
import background from './UserProfileImages/background.png'
import noUserPhoto from './../../../assets/GlobalImage/noUserPhoto.png'
import Preloader from "../../Preloader/Preloader";

const UserProfile = ({profile, loading}) => {


    return (
        loading && !profile ?
            <Preloader/> :
            <div className={userProfile.container}>
                <div className="userProfile">
                    <div className={userProfile.backgroundContainer}>
                        <img className={userProfile.background} src={background} alt="background"/>
                    </div>
                    <div className={userProfile.avatar}>
                        {profile && profile.photos && profile.photos.large ? (
                            <img className={userProfile.photo} src={profile.photos.large} alt="ava" />
                        ) : (
                            <img className={userProfile.photo} src={noUserPhoto} alt="ava" />
                        )}

                    </div>
                    <div className={userProfile.name}>
                        {profile && profile.fullName ?
                            <h3>{profile.fullName}</h3> :
                            <h3>??????</h3>
                        }
                    </div>
                    <div className={userProfile.about}>
                        {profile && profile.aboutMe  ?
                            <h3>{profile.aboutMe}</h3> :
                            <h3>??????????</h3>
                        }
                    </div>
                    <div className={userProfile.informationContainer}>
                        <div className="websitesBlock">
                            <h5 className={userProfile.contacts}>Web-Sites: </h5>
                            {profile && profile.contacts && profile.contacts.github ?
                                <p className={userProfile.contactsText}>Github: <span className={userProfile.link}>{profile.contacts.github}</span></p> :
                                <p className={userProfile.contactsText}>Github: No info</p>
                            }

                            {profile && profile.contacts && profile.contacts.facebook ?
                                <p className={userProfile.contactsText}>Facebook: <span className={userProfile.link}>{profile.contacts.facebook}</span></p> :
                                <p className={userProfile.contactsText}>Facebook: No info</p>
                            }

                            {profile && profile.contacts && profile.contacts.instagram ?
                                <p className={userProfile.contactsText}>Instagram: <span className={userProfile.link}>{profile.contacts.instagram}</span></p> :
                                <p className={userProfile.contactsText}>Instagram: No info</p>
                            }

                            {profile && profile.contacts && profile.contacts.twitter ?
                                <p className={userProfile.contactsText}>Twitter: <span className={userProfile.link}>{profile.contacts.twitter}</span></p> :
                                <p className={userProfile.contactsText}>Twitter: No info</p>
                            }

                            {profile && profile.contacts && profile.contacts.youtube ?
                                <p className={userProfile.contactsText}>YouTube: <span className={userProfile.link}>{profile.contacts.youtube}</span></p> :
                                <p className={userProfile.contactsText}>YouTube: No info</p>
                            }

                        </div>
                    </div>
                </div>
            </div>

    )
}

export default UserProfile;