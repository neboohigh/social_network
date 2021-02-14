import React from 'react'
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import Loader from "../../common/Loader";
import axios from "axios";


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
                                {user.photos.small != null ? <img src={user.photos.small}/> : 'photo_here'}
                            </NavLink>

                            <button onClick={(userId) => {
                                debugger
                                if (!user.followed) {
                                    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {},
                                        {
                                            withCredentials: true,
                                            headers: {"API-KEY": "cd7aaa8a-355e-437a-a626-fd99460c3d13"}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.changeFollowStatus(user.id)
                                            }
                                        })
                                } else {
                                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                        {
                                            withCredentials: true,
                                            headers: {"API-KEY": "cd7aaa8a-355e-437a-a626-fd99460c3d13"}
                                        })
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.changeFollowStatus(user.id)
                                            }
                                        })
                                }
                            }}>
                                {user.followed ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Users

