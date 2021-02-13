import {connect} from 'react-redux';
import {
    changeFollowStatus,
    setSelectedPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching
} from '../../redux/UsersReducer';
import * as axios from 'axios';
import Users from './Users';
import React from 'react';


class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.selectedPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChanging = (pageNumber) => {
        this.props.toggleIsFetching(true)
        this.props.setSelectedPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return <Users totalUsersCount={this.props.totalUsersCount}
                      setSelectedPage={this.onPageChanging}
                      pageSize={this.props.pageSize}
                      selectedPage={this.props.selectedPage}
                      users={this.props.users}
                      changeFollowStatus={this.props.changeFollowStatus}
                      isFetching={this.props.isFetching}
        />
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        selectedPage: state.usersPage.selectedPage,
        isFetching: state.usersPage.isFetching
    }
}


export default connect(mapStateToProps, {
    changeFollowStatus,
    setUsers,
    setSelectedPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersContainer)