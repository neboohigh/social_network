import './App.css';
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'
import HeaderContainer from "./Header/HeaderContainer";
import React from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
import Loader from "./common/Loader";
import {initApp} from "./redux/AppReducer";


class App extends React.Component {

    componentDidMount() {
        this.props.initApp()
    }

    render() {

        if (!this.props.isInit) return <Loader/>
        return (
            <div className="App">
                <HeaderContainer/>
                <Navbar/>
                <Content/>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isInit: state.app.isInit
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initApp}),
)(App);


        
        