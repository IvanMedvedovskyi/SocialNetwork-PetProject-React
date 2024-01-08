import Header from "./Header";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../assets/api/login-api";

const HeaderContainer = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();
    const personalDataPhoto = useSelector((state) => state.auth.authPersonalData.photos?.small);

    const handleLogout = () => {
        dispatch(logout())
    }


    return <Header handleLogout={handleLogout} isAuth={isAuth} personalDataPhoto={personalDataPhoto}/>
}

export default HeaderContainer;