import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Messages = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.auth.isAuth);

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