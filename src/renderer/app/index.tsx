import React from "react";
import ReactDOM from "react-dom/client";

import App from "./app/app";

import {CreateStore, ReduxProvider} from './store'

const render = () => {
    const root = ReactDOM.createRoot(document.querySelector('#root'))
    root.render(
        <ReduxProvider store={CreateStore()}>
            <App/>
        </ReduxProvider>
    )
}


render()