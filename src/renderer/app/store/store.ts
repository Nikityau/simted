import {createStore, applyMiddleware, combineReducers} from "redux";

import {ffcReducer} from "../modules/folder-field";
import {codeFieldReducer} from "../modules/code-field";


const enhancers = applyMiddleware()

const reducers = combineReducers({
    ffc: ffcReducer,
    codeField: codeFieldReducer
})

export const CreateStore = () => {
    const storeApp = createStore(reducers, enhancers)

    return storeApp
}