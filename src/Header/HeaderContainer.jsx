import Header from "./Header";
import React from "react";
import {connect} from "react-redux";
import {login} from "../redux/AuthReducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.login()
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


export default connect(mapStateToProps, {login})(HeaderContainer);
