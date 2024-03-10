import Header from "./Header.tsx";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../assets/api/login-api.ts";
import {FC} from "react";
import {AppDispatch, RootState} from "../../assets/redux/store";

const HeaderContainer: FC = () => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);
    const dispatch: AppDispatch = useDispatch();
    const personalDataPhoto = useSelector((state: RootState) => state.auth.authPersonalData.photos?.small);

    const handleLogout = () => {
        dispatch(logout())
    }

    return <Header handleLogout={handleLogout} isAuth={isAuth} personalDataPhoto={personalDataPhoto}/>
}

export default HeaderContainer;