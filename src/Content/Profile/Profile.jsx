import s from './profile.module.css'
import Post from '../Post/Post'
import React from 'react'
import Loading from "../../common/Loader";

function ProfileInfo(props) {
    return (
        <div className={s.profileInfo}>
            {props.profile != null ? <img src={props.profile.photos.large}/> : <Loading/>}
        </div>
    )
}

function Posts(props) {
    return (
        <div>
            {props.posts.map((el) => <Post text={el.text}/>)}
        </div>
    )
}

function NewPost(props) {
    let onNewPostTextChange = (e) => {
        let text = e.target.value
        props.onNewPostTextChange(text)
    }

    let AddNewPost = () => {
        props.AddNewPost()
    }

    return (
        <div>
            <div>
                <textarea onChange={onNewPostTextChange}
                          value={props.newPostText}/>
            </div>
            <div>
                <button onClick={AddNewPost}>add post</button>
            </div>
        </div>
    )
}

function Profile(props) {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}/>
            <NewPost newPostText={props.newPostText}
                     onNewPostTextChange={props.onNewPostTextChange}
                     AddNewPost={props.AddNewPost}/>
            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile