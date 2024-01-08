import './App.css';
import Navigation from "./components/Navigation/Navigation";
import {Route, Routes} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Navigate} from "react-router-dom";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/UsersContainer";
import UserProfileContainer from "./components/Users/UserProfile/UserProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginForm from "./components/LoginForm/LoginForm";
import {Component} from "react";

import {initialize} from "./assets/redux/app-reducer";
import Preloader from "./components/Preloader/Preloader";
import {connect} from "react-redux";

class App extends Component {

    componentDidMount() {
        this.props.initialize();
    }

    render() {

        if (!this.props.initialized) {
            return (
                <div className="App">
                    <HeaderContainer />
                    <Navigation />
                    <Preloader />
                </div>
            );
        }

        return (
            <div className="App">
                <HeaderContainer/>
                <Navigation/>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, { initialize })(App);
