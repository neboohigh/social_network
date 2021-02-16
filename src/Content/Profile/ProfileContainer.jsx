import {
    UpdateNewPostTextActionCreator,
    AddPostActionCreator,
    setUserProfile,
    getProfile
} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import React from 'react'
import {withRouter} from "react-router-dom";
import {AuthRedirect} from "../../HOC/authredirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getProfile(userId)
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
        },
        getProfile: (userId) => {
            dispatch(getProfile(userId))
        }
    }
}

let WithURLDataContainer = withRouter(ProfileContainer)


export default connect(mapStateToProps, mapDispatchToProps)(AuthRedirect(WithURLDataContainer))

