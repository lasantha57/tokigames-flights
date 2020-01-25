
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'

import flightsSaga from './sagas/flights-saga';

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();

    const middlewares = [sagaMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middlewareEnhancer)
    )

    sagaMiddleware.run(flightsSaga);

    return store;
}

export default configureStore;