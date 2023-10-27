import header from './Header.module.scss'
import logo from './headerImages/logo.png'

const Header = () => {
    return (
        <div className={header.main}>
            <div className={header.logo}>
                <img src={logo} alt="logo"/>
            </div>
            <div className={header.textLogo}>
                <h1>petproject.com</h1>
            </div>
        </div>
    )
}

export default Header;