import React from 'react';
import {Store} from "redux";
import {Provider} from 'react-redux'

type ReduxProviderProps = {
    store: Store,
} & React.PropsWithChildren

const ReduxProvider = ({store, children}: ReduxProviderProps) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};

export default ReduxProvider;