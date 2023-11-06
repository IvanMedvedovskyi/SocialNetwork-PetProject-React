import './App.css';
import Header from "./components/Header/Header";
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

function App() {
    return (
            <div className="App">
                <HeaderContainer/>
                <Navigation/>
                    <Routes>
                        <Route path="/" element={<Navigate to="/profile" />} />
                        <Route path="/profile" element={<ProfileContainer/>}/>
                        <Route path="/users" element={<UsersContainer/>}/>
                        <Route path="/messages" element={<Messages/>}/>
                        <Route path="/news" element={<News/>}/>
                        <Route path="/music" element={<Music/>}/>
                        <Route path="/settings" element={<Settings/>}/>
                        <Route path="/userProfile/:id?" element={<UserProfileContainer />}/>
                    </Routes>
            </div>
    );
}

export default App;
