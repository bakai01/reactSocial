import React from "react";
import {BrowserRouter, Route} from "react-router-dom";

import "./app.css";
import Header from "../Header";
import Sidebar from "../Sidebar";
import Profile from "../Profile";
import Dialogs from "../Dialogs";
import News from "../News";
import Music from "../Music";
import Settings from"../Settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app__wrapper">
      <Header />
      <Sidebar state={props.state.sideBar} />
      <div className="wrapper__content">
        <Route path="/profile" render = { () => {
          return (
            <Profile profilePage={props.state.profilePage} addPost={props.addPost} 
            updateTextOfPost={props.updateTextOfPost} />
          );
        } } />
        <Route path="/dialogs" render = { () => {
          return (
            <Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} 
            updateMessageOfText={props.updateMessageOfText} />
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