
import * as actionTypes from '../constants/action-types';

const INITIAL_STATE = {
    loading: true,
    error: null,
    data: []
};

const flightReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case actionTypes.FETCH_FLIGHTS:
            return {
                ...state,
                loading: false,
                error: null,
                data: payload
            }
        case actionTypes.FETCH_FLIGHTS_ERROR:
            return {
                ...state,
                loading: false,
                error: payload,
                data: []
            }
        case actionTypes.CREATE_FLIGHT:
            return {
                ...state,
                loading: false,
                error: false,
                data: [...state.data, payload]
            }
        default:
            return state;
    }
}

export default flightReducer;