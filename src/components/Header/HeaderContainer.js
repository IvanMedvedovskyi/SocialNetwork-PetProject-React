import Header from "./Header";
import {useEffect} from "react";
import {getAuthDataAndPersonalData} from "../api/api";
import {useDispatch, useSelector} from "react-redux";

const HeaderContainer = () => {

    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuth);
    const personalDataPhoto = useSelector((state) => state.auth.authPersonalData.photos?.small);

    useEffect(() => {
        dispatch(getAuthDataAndPersonalData())
    }, [dispatch]);

    return <Header isAuth={isAuth} personalDataPhoto={personalDataPhoto}/>
}

export default HeaderContainer;