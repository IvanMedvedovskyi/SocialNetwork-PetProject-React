import axios, {AxiosHeaders, AxiosRequestConfig, RawAxiosRequestHeaders} from "axios";

interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    baseURL?: string;
    withCredentials: boolean;
    headers?: RawAxiosRequestHeaders | AxiosHeaders;
}

export const instance = axios.create({
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    withCredentials: true,
    headers: {
        "API-KEY": "8746e110-1bed-4493-bdb9-67af6a296037",
    },
}as CustomAxiosRequestConfig);