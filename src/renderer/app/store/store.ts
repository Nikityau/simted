import {createStore, applyMiddleware, combineReducers} from "redux";

import {ffcReducer} from "../modules/folder-field";


const enhancers = applyMiddleware()

const reducers = combineReducers({
    ffc: ffcReducer
})

export const CreateStore = () => {
    const storeApp = createStore(reducers, enhancers)

    return storeApp
}