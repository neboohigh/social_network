import s from './profile.module.css'
import Post from '../Post/Post'
import React from 'react'

function ProfileInfo() {
    return (
        <div className={s.profileInfo}>
            ProfileInfo
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
            <ProfileInfo/>
            <NewPost newPostText={props.newPostText}
                     onNewPostTextChange={props.onNewPostTextChange}
                     AddNewPost={props.AddNewPost}/>
            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile