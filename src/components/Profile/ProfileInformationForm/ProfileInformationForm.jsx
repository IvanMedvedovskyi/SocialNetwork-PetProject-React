import {Form, Formik} from "formik";
import React from "react";
import FormSection from "./FormSection";
import {useDispatch} from "react-redux";
import {updateProfileInfo} from "../../../assets/api/profile-api";

const ProfileInformationForm = ({authPersonalData, editMode}) => {
    const dispatch = useDispatch();
    const initialValues = {
        aboutMe: authPersonalData.aboutMe || '',
        contacts: {
            facebook: authPersonalData.contacts.facebook || '',
            website: authPersonalData.contacts.website || '',
            vk: authPersonalData.contacts.vk || '',
            twitter: authPersonalData.contacts.twitter || '',
            instagram: authPersonalData.contacts.instagram || '',
            youtube: authPersonalData.contacts.youtube || '',
            github: authPersonalData.contacts.github || '',
            mainLink: authPersonalData.contacts.mainLink || '',
        },
        lookingForAJob: authPersonalData.lookingForAJob,
        lookingForAJobDescription: authPersonalData.lookingForAJobDescription,
        fullName: authPersonalData.fullName || '',
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(updateProfileInfo(values))
                    editMode(false)
                }}
            >
                {({ isSubmitting }) => (
                    <Form style={{display: "flex", flexDirection: "column"}}>
                        <FormSection type='text' name='fullName' text='FullName' placeholder='FullName'/>
                        <FormSection type='text' name='aboutMe' text='AboutMe' placeholder='AboutMe'/>
                        <FormSection type='checkbox' name='lookingForAJob' text='LookingForAJob' placeholder='LookingForAJob'/>
                        <FormSection type='text' name='lookingForAJobDescription' text='LookingForAJobDescription' placeholder='LookingForAJobDescription'/>
                        <FormSection type='text' name='contacts.facebook' text='Facebook' placeholder='Facebook'/>
                        <FormSection type='text' name='contacts.github' text='GitHub' placeholder='GitHub'/>
                        <FormSection type='text' name='contacts.instagram' text='Instagram' placeholder='Instagram'/>
                        <FormSection type='text' name='contacts.mainLink' text='MainLink' placeholder='MainLink'/>
                        <FormSection type='text' name='contacts.twitter' text='Twitter' placeholder='Twitter'/>
                        <FormSection type='text' name='contacts.vk' text='Vk' placeholder='Vk'/>
                        <FormSection type='text' name='contacts.website' text='Website' placeholder='Website'/>
                        <FormSection type='text' name='contacts.youtube' text='YouTube' placeholder='YouTube'/>
                        <button type="submit" disabled={isSubmitting}>
                            Save
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default ProfileInformationForm;