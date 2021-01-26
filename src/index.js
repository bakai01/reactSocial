import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/storeRedux";
import App from "./components/App";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <App store={store} />
        </React.StrictMode>,
        document.getElementById("root")
    );
};

renderEntireTree();

store.subscribe(renderEntireTree);