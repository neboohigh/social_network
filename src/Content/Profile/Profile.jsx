import s from './profile.module.css'
import Posts from './Posts/Posts'
import React from 'react'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostForm from "./NewPostForm/NewPostForm";


function Profile(props) {

    const onSubmit = (formData) => {
        props.AddPost(formData.newPostText)
    }

    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile}
                         updateStatusMessage={props.updateStatusMessage}
                         statusMessage={props.statusMessage}/>

            <NewPostForm onSubmit={onSubmit}/>

            <Posts posts={props.posts}/>
        </div>
    )
}

export default Profile