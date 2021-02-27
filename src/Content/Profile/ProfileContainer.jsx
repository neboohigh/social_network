import {
    AddPost,
    getProfile, updateStatusMessage, getStatusMessage
} from "../../redux/ProfileReducer";
import Profile from "./Profile";
import {connect} from "react-redux";
import React from 'react'
import {Redirect, withRouter} from "react-router-dom";
import {compose} from "redux";
import Loader from "../../common/Loader";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = this.props.authUserId
        }
        if(userId) {
            this.props.getProfile(userId)
            this.props.getStatusMessage(userId)
        }
    }

    render() {
        if (!this.props.isAuth && this.props.match.params.userId === undefined) {
            return <Redirect to={'/login'}/>
        }
        if (!this.props.profile) return <Loader/>
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     statusMessage={this.props.statusMessage}/>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        profile: state.profilePage.profile,
        authUserId: state.auth.id,
        isAuth: state.auth.isAuth,
        statusMessage: state.profilePage.statusMessage
    }
}


export default compose(
    withRouter,
    connect(mapStateToProps, {
        AddPost,
        getProfile,
        getStatusMessage,
        updateStatusMessage
    })
)(ProfileContainer)



