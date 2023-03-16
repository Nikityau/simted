import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/app";

const render = () => {
    const root = ReactDOM.createRoot(document.querySelector('#root'))
    root.render(
        <App/>
    )
}


render()