import {getUsers} from "../api/api";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import Users from "./Users";
import {noteNewCurrentPage, setCurrentPage, setFollow, setUnFollow} from "../redux/users-reducer";


const UsersContainer = () => {
    const dispatch = useDispatch()
    const currentPage = useSelector((state) => state.users.currentPage)
    const count = useSelector((state) => state.users.count);
    const users = useSelector((state) => state.users.users);
    const totalUserCount = useSelector((state) => state.users.totalUserCount);
    const countOfPages = Math.ceil(totalUserCount / count);
    const newCurrentPage = useSelector((state) => state.users.newCurrentPage);

    const handleInputChange = (event) => {
        const value = parseInt(event.target.value, 10);
        dispatch(noteNewCurrentPage(value))
    }

    const addNewCurrentPage = (event) => {
        const inputValue = newCurrentPage;
        if( event.key === 'Enter') {
            if(inputValue >=1 && inputValue <= countOfPages) {
                dispatch(setCurrentPage(inputValue))
            } else {
                alert("Not correct page number!")
            }
        }
    }

    const FOLLOW = (userId) => {
        dispatch(setFollow(userId))
    }

    const UNFOLLOW = (userId) => {
        dispatch(setUnFollow(userId))
    }

    useEffect(() => {
        dispatch(getUsers(currentPage, count))
    }, [count, currentPage])

    return (<Users usersList={users}
                   currentPage={currentPage}
                   countOfPages={countOfPages}
                   handleInputChange={handleInputChange}
                   addNewCurrentPage={addNewCurrentPage}
                   followUser={FOLLOW}
                   unfollowUser={UNFOLLOW}
                   />)
}

export default UsersContainer;