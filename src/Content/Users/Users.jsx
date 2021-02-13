import React from 'react'
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import Loading from "../../common/Loader";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            {props.isFetching ? <Loading/> : null}
            <div>
                {pages.map(p => {
                    return (<span onClick={() => props.setSelectedPage(p)}
                                  className={props.selectedPage === p ? s.selectedPage : s.pageNumber}>{p}</span>)}
                )}
            </div>
            <div>
                {props.users.map((user) => (
                    <div key={user.id}>
                        <div>
                            {user.name}{'    '}
                            <NavLink to={'/profile/' + user.id}>
                                {user.photos.small != null ? <img src={user.photos.small}/> : 'photo_here' }
                            </NavLink>

                            <button onClick={(userId) => props.changeFollowStatus(user.id)}>
                                {user.followStatus ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Users

