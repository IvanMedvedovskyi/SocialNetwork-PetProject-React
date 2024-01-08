import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

const Music = () => {
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.auth.isAuth);

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);

    return (
        <div>Music</div>
    )
}

export default Music;