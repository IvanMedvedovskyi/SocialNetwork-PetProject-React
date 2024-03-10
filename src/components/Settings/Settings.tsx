import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {FC, useEffect} from "react";
import {RootState} from "../../assets/redux/store";

const Settings: FC = () => {
    const navigate = useNavigate();
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);

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