import React from 'react'
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import Loader from "../../common/Loader";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    let activePages = 10;
    for (let i = 1; i < activePages; i++) {
        pages.push(i)
    }
    return (
        <div>
            {props.isFetching ? <Loader/> : null}
            <div>
                {pages.map(p => {
                        return (<span onClick={() => props.setSelectedPage(p)}
                                      className={props.selectedPage === p ? s.selectedPage : s.pageNumber}>{p}</span>)
                    }
                )}
            </div>
            <div>
                {props.users.map((user) => (
                    <div key={user.id}>
                        <div>
                            {user.name}{'    '}
                            <NavLink to={'/profile/' + user.id}>
                                {user.photos.small != null ? <img src={user.photos.small} alt={'photo_here'}/> : 'photo_here'}
                            </NavLink>

                            <button disabled={props.FollowingProgress.some(id => id === user.id)}
                                    onClick={() => props.toggleFollowStatus(user.id, user.followed)}>
                                {user.followed ? 'Unfollow' : ' Follow'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Users

