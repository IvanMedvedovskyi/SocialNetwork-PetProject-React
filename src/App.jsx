import React from "react";
import {Suspense} from "react";
import './App.css';
import Navigation from "./components/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginForm from "./components/LoginForm/LoginForm";
import {Component} from "react";
import {initialize} from "./assets/redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {connect} from "react-redux";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));
const Messages = React.lazy(() => import("./components/Messages/Messages"));
const News = React.lazy(() => import("./components/News/News"));
const Music = React.lazy(() => import("./components/Music/Music"));
const Settings = React.lazy(() => import("./components/Settings/Settings"));
const UserProfileContainer = React.lazy(() => import("./components/Users/UserProfile/UserProfileContainer"));

class App extends Component {

    componentDidMount() {
        this.props.initialize();
    }

    render() {

        if (!this.props.initialized) {
            return (
                <div className="App">
                    <HeaderContainer/>
                    <Navigation/>
                    <Preloader/>
                </div>
            );
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Navigation/>
                <Suspense fallback={<div><Preloader/></div>}>
                    <Routes>
                        <Route path="/" element={<Navigate to="/login"/>}/>
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/messages" element={<Messages/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/userProfile/:id?" element={<UserProfileContainer/>}/>
                        <Route path="/login" element={<LoginForm/>}/>
                    </Routes>
                </Suspense>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initialize})(App);
