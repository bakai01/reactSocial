import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import store from "./redux/storeRedux";
import App from "./components/App";
import myContext from "./Context";

const renderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <myContext.Provider value={store}>
                <App />
            </myContext.Provider>
        </React.StrictMode>,
        document.getElementById("root")
    );
};

renderEntireTree();

store.subscribe(renderEntireTree);