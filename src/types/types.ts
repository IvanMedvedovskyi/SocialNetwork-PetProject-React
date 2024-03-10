export type ProfileDataType = {
    aboutMe: string;
    contacts: ContactsType;
    lookingForAJob: boolean;
    lookingForAJobDescription: string;
    fullName: string;
    userId: number;
    photos: PhotosType
}

export type ContactsType = {
    facebook: string | null;
    website:  string | null;
    vk:  string | null;
    twitter:  string | null;
    instagram:  string | null;
    youtube:  string | null;
    github:  string | null;
    mainLink:  string | null;
}

export type PhotosType = {
    small: string | null;
    large: string | null;
}

export type PropertiesType<T> = T extends {[key: string]: infer U} ? U : never
export type ActionTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>