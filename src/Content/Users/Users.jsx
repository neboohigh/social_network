import React from 'react'
import s from "./users.module.css";
import {NavLink} from "react-router-dom";
import Loader from "../../common/Loader";


const Pagination = (props) => {
    let {selectedPage, pageSize, totalUsersCount, setSelectedPage} = props
    let pages = []
    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    for (let i = 1; i < pagesCount; i++) {
        pages.push(i)
    }
    let leftPages, rightPages = []
    if (selectedPage === 1) {
        leftPages = []
        rightPages = pages.slice(selectedPage)
    } else {
        leftPages = pages.slice(0, selectedPage - 1)
        rightPages = pages.slice(selectedPage)
    }
    if (leftPages.length > 5) leftPages = leftPages.slice(leftPages.length - 5)
    if (rightPages.length > 5) rightPages = rightPages.slice(0,5)
    return (
        <div>
            {leftPages.map( p => {
                return(<span className={s.pageNumber} onClick={() => setSelectedPage(p)}>{p}</span>)
            })}
            <span className={s.selectedPage}>{selectedPage}</span>
            {rightPages.map( p => {
                return(<span className={s.pageNumber} onClick={() => setSelectedPage(p)}>{p}</span>)
            })}
        </div>
    )
}

let Users = (props) => {
    if(props.isFetching) return <Loader/>
    return (
        <div>
            <Pagination selectedPage={props.selectedPage} pageSize={props.pageSize}
                        totalUsersCount={props.totalUsersCount} setSelectedPage={props.setSelectedPage}/>
            <div>
                {props.users.map((user) => (
                    <div key={user.id}>
                        <div>
                            {user.name}{'    '}
                            <NavLink to={'/profile/' + user.id}>
                                {user.photos.small != null ?
                                    <img src={user.photos.small} alt={'photo_here'}/> : 'photo_here'}
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

