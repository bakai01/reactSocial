import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import "./app.css";
import Header from "../Header";
import SidebarContainer from "../Sidebar/SidebarContainer";
import Profile from "../Profile";
import News from "../News";
import Music from "../Music";
import Settings from "../Settings";
import DialogsContainer from "../Dialogs/DialogsContainer";
import UsersContainer from "../Users/UsersContainer";

const App = () => {
    return (
        <BrowserRouter>
            <div className="app__wrapper">
                <Header />
                <SidebarContainer />
                <div className="wrapper__content">
                    <Route path="/profile" render={ () => <Profile /> } />
                    <Route path="/dialogs" render={ () => <DialogsContainer /> } />
                    <Route path="/news" component={News} />
                    <Route path="/music" component={Music} />
                    <Route path="/settings" component={Settings} />
                    <Route path="/users" render={ () => <UsersContainer /> } />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;