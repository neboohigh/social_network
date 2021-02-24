import {
    AddPost,
    getProfile, getStatusMessage, updateStatusMessage
} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import React from 'react'
import {Redirect, withRouter} from "react-router-dom";
import {AuthRedirect} from "../../HOC/authredirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
            // return <Redirect to={'/login'}/>
        }
        this.props.getProfile(userId)
        this.props.getStatusMessage(userId)
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
        // newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddPost: (newPostText) => {
            dispatch(AddPost(newPostText))
        },
        getProfile: (userId) => {
            dispatch(getProfile(userId))
        },
        getStatusMessage,
        updateStatusMessage
    }
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer)



