import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {useEffect} from "react";

const Settings = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.auth.isAuth);

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    return (
        <div>Settings</div>
    )
}

export default Settings;