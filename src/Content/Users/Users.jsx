import React from "react";
import * as axios from "axios";

class Users extends React.Component {
    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('http://localhost:8080/users').then(response => {
                this.props.setUsers(response.data.users)
            })
        }
    }


    render() {
        return (
            <div>
                <button onClick={() => this.getUsers() } >get users</button>
                {this.props.users.map((user) => (
                    <div key={user.id}>
                        {user.lastName + ' ' + user.firstName + ' ' + user.location.country + ' ' + user.location.city}
                        <div>
                            <button onClick={(userId) => this.props.changeFollowStatus(user.id)}>
                                {user.followStatus ? 'Unfollow' : 'Follow'}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

export default Users


// let Users = (props) => {
//     // let {users, changeFollowStatus, setUsers} = props
//     return (
//         <div>
//             {props.users.map((user) => (
//                     <div key={user.id}>
//                         {user.lastName + ' ' + user.firstName + ' ' + user.location.country + ' ' + user.location.city}
//                         <div>
//                             <button onClick={(userId) => props.changeFollowStatus(user.id)}>
//                                 {user.followStatus ? 'Unfollow' : 'Follow'}
//                             </button>
//                         </div>
//                     </div>
//
//                 )
//             )}
//         </div>
//     )
// }

// export default Users
