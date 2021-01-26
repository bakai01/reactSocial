import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import "./app.css";
import Header from "../Header";
import SidebarContainer from "../Sidebar/SidebarContainer";
import Profile from "../Profile";
import News from "../News";
import Music from "../Music";
import Settings from"../Settings";
import DialogsContainer from "../Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
      <Header />
      <SidebarContainer store={props.store} />
      <div className="wrapper__content">
        <Route path="/profile" render = { () => {
          return (
            <Profile store={props.store} />
          );
        } } />
        <Route path="/dialogs" render = { () => {
          return (
            <DialogsContainer store={props.store}/>
          );
        }} />
        <Route path="/news" component={News} />
        <Route path="/music" component={Music} />
        <Route path="/settings" component={Settings} />
      </div>
    </div>
    </BrowserRouter>
  );
};

export default App;