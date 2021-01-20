import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/state";
import App from "./components/App";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={store.getState()} addMessage={store.addMessage.bind(store)} 
                addPost={store.addPost.bind(store)}
                updateTextOfPost={store.updatePostOfText.bind(store)}
                updateMessageOfText={store.updateMessageOfText.bind(store)} />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

renderEntireTree();

store.subscribe(renderEntireTree);