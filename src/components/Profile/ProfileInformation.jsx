import React from 'react';
import profile from './Profile.module.scss';

const ProfileInformation = ({ authPersonalData }) => {
    return (
        <div>
            <div className={profile.data}><span style={{fontWeight: "600"}}>about me</span>: {authPersonalData.aboutMe ? authPersonalData.aboutMe : "No information"}</div>
            <div className={profile.data}><span style={{fontWeight: "600"}}>looking for a job</span>: {authPersonalData.lookingForAJob ? "Yes" : "No"}</div>
            <div className={profile.data}><span style={{fontWeight: "600"}}>looking for a job description</span>: {authPersonalData.lookingForAJobDescription ? authPersonalData.lookingForAJobDescription : "No information"}</div>
            {authPersonalData.contacts && Object.keys(authPersonalData.contacts).map(key => (
                <div className={profile.data} key={key}>
                    <span style={{fontWeight: "600"}}>{key}</span>: <span>{authPersonalData.contacts[key] ? authPersonalData.contacts[key] : 'No information'}</span>
                </div>
            ))}
        </div>
    );
}

export default ProfileInformation;
