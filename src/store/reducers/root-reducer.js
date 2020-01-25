import { combineReducers } from 'redux';
import flightReducer from './flight-reducer';

export const rootReducer = combineReducers({
    flights: flightReducer
});

