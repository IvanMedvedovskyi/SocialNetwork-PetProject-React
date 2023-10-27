import users from './Users.module.scss'
import noUsersPhoto from "./../../testImage/noUserPhoto.png"


const Users = ({usersList, currentPage, countOfPages, handleInputChange, addNewCurrentPage, unfollowUser, followUser}) => {
    return (
        <div className={users.container}>
            {
                usersList.map((userItem) => (
                    <div className={users.card} key={userItem.id}>
                        <div className={users.ava}><img
                            src={userItem.photos.large ? userItem.photos.large : noUsersPhoto} alt="ava"/></div>
                        <div className={users.fullName}><h3>{userItem.name}</h3></div>
                        <div className={users.status}><span>{userItem.status ? userItem.status : "NO STATUS"}</span>
                        </div>
                        <div className={users.button}>
                            {userItem.followed ?
                                <button onClick={() => unfollowUser(userItem.id)}>Unfollow</button> :
                                <button onClick={() => followUser(userItem.id)}>Follow</button>}
                        </div>
                    </div>
                ))
            }
            <div className={users.pagesController}>
                <div className={users.pagesControllerPosition}>
                    <input className={users.inputPages}
                           type="number"
                           name="input"
                           placeholder={currentPage}
                           onChange={(event) => handleInputChange(event)}
                           onKeyPress={addNewCurrentPage}/>
                    <span className={users.countOfPages}>of {countOfPages}</span>
                </div>
                <div className={users.countOfPages}><h4>Press "Enter" to change</h4></div>

            </div>
        </div>

    )
}

export default Users