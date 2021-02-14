import {UpdateNewPostTextActionCreator, AddPostActionCreator, setUserProfile} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import React from 'react'
import axios from "axios";
import {withRouter} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNewPostTextChange: (text) => {
            dispatch(UpdateNewPostTextActionCreator(text))
        },
        AddNewPost: () => {
            dispatch(AddPostActionCreator())
        },
        setUserProfile: (profile) => {
            dispatch(setUserProfile(profile))
        }
    }
}

let WithURLDataContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(WithURLDataContainer)

