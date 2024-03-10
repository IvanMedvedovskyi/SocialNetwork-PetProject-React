import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {FC, useEffect} from "react";
import {RootState} from "../../assets/redux/store";

const Messages: FC = () => {
    const navigate = useNavigate();
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    return (
        <div>Messages</div>
    )
}

export default Messages;