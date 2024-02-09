import header from './Header.module.scss'
import logo from './headerImages/logo.png'
import {NavLink} from "react-router-dom";
import noAvaPhoto from './../../assets/GlobalImage/noUserPhoto.png'

const Header = ({isAuth, personalDataPhoto, handleLogout}) => {
    return (
        <div className={header.main}>
            <div className={header.leftBlock}>
                <div className={header.logo}>
                    <img src={logo} alt="logo"/>
                </div>
                <div className={header.textLogo}>
                    <h1>petproject.com</h1>
                </div>
            </div>

            <div className={header.rightBlock}>
                {isAuth ?
                    (personalDataPhoto === null ?
                        <>
                            <img src={noAvaPhoto} alt="noAvaPhoto"/>
                            <button onClick={handleLogout} className={header.logout}>Log out</button>
                        </>

                        :
                        <>
                            <img src={personalDataPhoto} alt='personalAvatar'/>
                            <button onClick={handleLogout} className={header.logout}>Log out</button>
                        </>
                        )
                    :
                    <div className={header.login}>
                        <NavLink to={`/login`}>Login</NavLink>
                    </div>
                    }
            </div>
        </div>
    )
}

export default Header;