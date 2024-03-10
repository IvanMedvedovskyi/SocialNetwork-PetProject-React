import navigation from './Navigation.module.scss'
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {RootState} from "../../assets/redux/store";


const Navigation = () => {

    const location = useLocation();
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);

    return(
        <div className={navigation.background}>
            <div className={navigation.main}>
                <div className={`${navigation.link} ${location.pathname === "/profile" ? navigation.active : ""}`}>
                    <Link to={isAuth ? '/profile' : '/login'}>Profile</Link>
                </div>
                <div className={`${navigation.link} ${location.pathname === "/users" ? navigation.active : ""}`}>
                    <Link to={isAuth ? '/users' : '/login'}>Users</Link>
                </div>
                <div className={`${navigation.link} ${location.pathname === "/messages" ? navigation.active : ""}`}>
                    <Link to={isAuth ? '/messages' : '/login'}>Messages</Link>
                </div>
                <div className={`${navigation.link} ${location.pathname === "/news" ? navigation.active : ""}`}>
                    <Link to={isAuth ? '/news' : '/login'}>News</Link>
                </div>
                <div className={`${navigation.link} ${location.pathname === "/music" ? navigation.active : ""}`}>
                    <Link to={isAuth ? '/music' : '/login'}>Music</Link>
                </div>
                <div className={`${navigation.link} ${location.pathname === "/settings" ? navigation.active : ""}`}>
                    <Link to={isAuth ? '/settings' : '/login'}>Settings</Link>
                </div>
            </div>
        </div>

    )
}

export default Navigation;