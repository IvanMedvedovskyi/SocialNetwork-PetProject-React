import {setFollowUser, setUnFollowUser} from "../../assets/api/follow-unfollowAPI";
import {getUsers} from "../../assets/api/users-api";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Users from "./Users";
import {noteNewCurrentPage, setCurrentPage} from "./../../assets/redux/users-reducer";
import {Navigate, useNavigate} from "react-router-dom";

const UsersContainer = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuth = useSelector(state => state.auth.isAuth)
    const currentPage = useSelector((state) => state.users.currentPage)
    const count = useSelector((state) => state.users.count);
    const users = useSelector((state) => state.users.users);
    const totalUserCount = useSelector((state) => state.users.totalUserCount);
    const countOfPages = Math.ceil(totalUserCount / count);
    const newCurrentPage = useSelector((state) => state.users.newCurrentPage);
    const loading = useSelector((state) => state.users.loading)


    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        dispatch(noteNewCurrentPage(value))
    }

    const addNewCurrentPage = () => {
        let inputValue = newCurrentPage;
        if (inputValue >= 1 && inputValue <= countOfPages) {
            dispatch(setCurrentPage(inputValue))
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
    }, [count, currentPage])

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