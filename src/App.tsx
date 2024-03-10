import React from "react";
import {Suspense} from "react";
import './App.css';
import Navigation from "./components/Navigation/Navigation.tsx";
import {Route, Routes} from "react-router-dom";
import {Navigate} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer.tsx";
import LoginForm from "./components/LoginForm/LoginForm.tsx";
import {Component} from "react";
import {initialize} from "./assets/redux/app-reducer.ts";
import Preloader from "./components/Preloader/Preloader.tsx";
import {connect} from "react-redux";
import {RootState} from "./assets/redux/store";

const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer.tsx"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer.tsx"));
const Messages = React.lazy(() => import("./components/Messages/Messages.tsx"));
const News = React.lazy(() => import("./components/News/News.tsx"));
const Music = React.lazy(() => import("./components/Music/Music.tsx"));
const Settings = React.lazy(() => import("./components/Settings/Settings.tsx"));
const UserProfileContainer = React.lazy(() => import("./components/Users/UserProfile/UserProfileContainer.tsx"));

interface AppProps {
    initialize: () => void;
    initialized: boolean;
}

class App extends Component<AppProps, {}> {

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

const mapStateToProps = (state: RootState) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initialize})(App);
