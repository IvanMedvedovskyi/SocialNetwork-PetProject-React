import navigation from './Navigation.module.scss'
import {Link} from "react-router-dom";
import {useLocation} from "react-router-dom";


const Navigation = () => {

    const location = useLocation();

    return(
        <div className={navigation.background}>
            <div className={navigation.main}>
                <div className={`${navigation.link} ${location.pathname === "/profile" ? navigation.active : ""}`}>
                    <Link to="/profile">Profile</Link>
                </div>
                <div className={`${navigation.link} ${location.pathname === "/users" ? navigation.active : ""}`}>
                    <Link to="/users">Users</Link>
                </div>
                <div className={`${navigation.link} ${location.pathname === "/messages" ? navigation.active : ""}`}>
                    <Link to="/messages">Messages</Link>
                </div>
                <div className={`${navigation.link} ${location.pathname === "/news" ? navigation.active : ""}`}>
                    <Link to="/news">News</Link>
                </div>
                <div className={`${navigation.link} ${location.pathname === "/music" ? navigation.active : ""}`}>
                    <Link to="/music">Music</Link>
                </div>
                <div className={`${navigation.link} ${location.pathname === "/settings" ? navigation.active : ""}`}>
                    <Link to="/settings">Settings</Link>
                </div>
            </div>
        </div>

    )
}

export default Navigation;