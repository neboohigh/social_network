import './App.css';
import Navbar from './Navbar/Navbar'
import Content from './Content/Content'
import HeaderContainer from "./Header/HeaderContainer";
import React from "react";
import {BrowserRouter, Route, Switch, withRouter} from "react-router-dom";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import Loader from "./common/Loader";
import {initApp} from "./redux/AppReducer";
import Login from "./Login/Login";
import store from "./redux/ReduxStore";


const ContentContainer = (props) => {
    return (
        <div className="App">
            {props.isAuth ? <Navbar/> : <Login/>}
            <Content/>
        </div>
    )
}


class App extends React.Component {

    componentDidMount() {
        this.props.initApp()
    }

    render() {
        if (!this.props.isInit) return <Loader/>
        return (
            <div>
                <HeaderContainer/>
                <Switch>
                    <Route path={'/login'} component={Login}/>
                    <Route path={'*'} render={() => <ContentContainer isAuth={this.props.isAuth}/>}/>
                </Switch>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isInit: state.app.isInit,
    isAuth: state.auth.isAuth
})

App = compose(
    withRouter,
    connect(mapStateToProps, {initApp}),
)(App);

const AppContainer = () => {
    return (
        <div>
            <BrowserRouter>
                <Provider store={store}>
                    <App/>
                </Provider>
            </BrowserRouter>
        </div>
    )
}

export default AppContainer


        
        