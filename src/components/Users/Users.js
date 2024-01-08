import users from './Users.module.scss'
import noUsersPhoto from "./../../assets/GlobalImage/noUserPhoto.png"
import {NavLink} from "react-router-dom";
import Preloader from "../Preloader/Preloader";


const Users = ({
                   usersList,
                   currentPage,
                   countOfPages,
                   handleInputChange,
                   addNewCurrentPage,
                   unfollowUser,
                   followUser,
                   loading
               }) => {

    return (
        loading && !usersList ?
            <Preloader/> :
            <>
                <div className={users.container}>
                    {
                        usersList.map((userItem) => (
                            <div className={users.card} key={userItem.id}>
                                <NavLink to={`/userProfile/` + userItem.id}>
                                    <div className={users.ava}>
                                        <img src={userItem.photos.large ? userItem.photos.large : noUsersPhoto} alt="ava"/>
                                    </div>
                                </NavLink>
                                <div className={users.fullName}><h3>{userItem.name}</h3></div>
                                <div className={users.status}><span>{userItem.status ? userItem.status : "NO STATUS"}</span>
                                </div>
                                <div className={users.button}>
                                    {userItem.followed ?
                                        <button className={users.follow} onClick={() => unfollowUser(userItem.id)}>Unfollow</button> :
                                        <button className={users.unfollow} onClick={() => followUser(userItem.id)}>Follow</button>}
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className={users.pagesController}>
                    <div className={users.pagesControllerPosition}>
                        <input className={users.inputPages}
                               type="number"
                               name="input"
                               placeholder={currentPage}
                               onChange={(event) => handleInputChange(event)}
                               onBlur={() => addNewCurrentPage()}/>
                        <span className={users.countOfPages}>of {countOfPages}</span>
                    </div>
                </div>
            </>



)
}

export default Users