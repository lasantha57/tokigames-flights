import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from '../store/reducers/root-reducer'

export default props => {
    return (
        <Provider store={createStore(rootReducer, {})}>
            {props.children}
        </Provider>
    );
}