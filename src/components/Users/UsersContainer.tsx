import {setFollowUser, setUnFollowUser} from "../../assets/api/follow-unfollowAPI.ts";
import {getUsers} from "../../assets/api/users-api.ts";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Users from "./Users.tsx";
import {actions} from "../../assets/redux/users-reducer.ts";
import {useNavigate} from "react-router-dom";
import {AppDispatch, RootState} from "../../assets/redux/store";

const UsersContainer = () => {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector((state: RootState) => state.auth.isAuth)
    const currentPage = useSelector((state: RootState) => state.users.currentPage)
    const count = useSelector((state: RootState) => state.users.count);
    const users = useSelector((state: RootState) => state.users.users);
    const totalUserCount = useSelector((state: RootState) => state.users.totalUserCount);
    const countOfPages: number = Math.ceil(totalUserCount / count);
    const newCurrentPage = useSelector((state: RootState) => state.users.newCurrentPage);
    const loading = useSelector((state: RootState) => state.users.loading)

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        dispatch(actions.noteNewCurrentPage(value))
    }

    const addNewCurrentPage = () => {
        let inputValue = newCurrentPage;
        if (inputValue >= 1 && inputValue <= countOfPages) {
            dispatch(actions.setCurrentPage(inputValue))
        }else {
          alert("Not correct page number!");
        }
    }

    const FOLLOW = (userId) => {
        dispatch(setFollowUser(userId))
    }

    const UNFOLLOW = (userId) => {
        dispatch(setUnFollowUser(userId))
    }

    useEffect(() => {
        dispatch(getUsers(currentPage, count))
    }, [count, currentPage, dispatch])

    useEffect(() => {
        if (!isAuth) {
            navigate("/login");
        }
    }, [isAuth, navigate]);


    return (<Users usersList={users}
                   currentPage={currentPage}
                   countOfPages={countOfPages}
                   handleInputChange={handleInputChange}
                   addNewCurrentPage={addNewCurrentPage}
                   followUser={FOLLOW}
                   unfollowUser={UNFOLLOW}
                   loading={loading}
    />)
}

export default UsersContainer;