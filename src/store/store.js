
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/root-reducer'
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = () => {
    const middlewares = [];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(
        rootReducer,
        composeWithDevTools(middlewareEnhancer)
    )

    return store;
}

export default configureStore;