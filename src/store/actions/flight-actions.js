
import * as actionTypes from '../constants/action-types';

export const requestFetchFlights = () => ({ type: actionTypes.REQUEST_FETCH_FLIGHTS });
export const fetchFlights = payload => ({ type: actionTypes.FETCH_FLIGHTS, payload });
export const fetchFlightsError = payload => ({ type: actionTypes.FETCH_FLIGHTS_ERROR, payload });