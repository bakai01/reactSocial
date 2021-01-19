import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import state, {subscribe} from "./redux/state";
import App from "./components/App";
import {addMessage, addPost, updateMessageOfText, updatePostOfText} from "./redux/state";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addMessage={addMessage} addPost={addPost}
                updateTextOfPost={updatePostOfText}
                updateMessageOfText={updateMessageOfText} />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

renderEntireTree(state);

subscribe(renderEntireTree);