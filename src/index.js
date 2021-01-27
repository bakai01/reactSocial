import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/storeRedux";
import App from "./components/App";
import {Provider} from "react-redux";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>,
        document.getElementById("root")
    );
};

renderEntireTree();

store.subscribe(renderEntireTree);