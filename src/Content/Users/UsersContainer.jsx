import {connect} from 'react-redux';
import {
    changeFollowStatus, getUsers,
    setSelectedPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress, toggleFollowStatus,
    toggleIsFetching
} from '../../redux/UsersReducer';
import Users from './Users';
import React from 'react';
import {AuthRedirect} from "../../HOC/authredirect";


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.selectedPage, this.props.pageSize)
    }

    onPageChanging = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      setSelectedPage={this.onPageChanging}
                      pageSize={this.props.pageSize}
                      selectedPage={this.props.selectedPage}
                      users={this.props.users}
            // changeFollowStatus={this.props.changeFollowStatus}
                      isFetching={this.props.isFetching}
            // toggleFollowingProgress={this.props.toggleFollowingProgress}
                      FollowingProgress={this.props.FollowingProgress}
                      toggleFollowStatus={this.props.toggleFollowStatus}

        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        selectedPage: state.usersPage.selectedPage,
        isFetching: state.usersPage.isFetching,
        FollowingProgress: state.usersPage.FollowingProgress
    }
}


export default connect(mapStateToProps, {
    changeFollowStatus,
    setUsers,
    setSelectedPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress,

    getUsers,
    toggleFollowStatus
})(AuthRedirect(UsersContainer))