import React from "react";
import Users from "./Users";
import {connect} from "react-redux";
import {changeFollowStatus, setUsers} from "../../redux/UsersReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeFollowStatus: (userId) => dispatch(changeFollowStatus(userId)),
        setUsers: (users) => dispatch(setUsers(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)