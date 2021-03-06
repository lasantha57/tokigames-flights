
import * as actionTypes from '../constants/action-types';

export const requestFetchFlights = () => ({ type: actionTypes.REQUEST_FETCH_FLIGHTS });
export const fetchFlights = payload => ({ type: actionTypes.FETCH_FLIGHTS, payload });
export const fetchFlightsError = payload => ({ type: actionTypes.FETCH_FLIGHTS_ERROR, payload });

export const createFlight = payload => ({ type: actionTypes.CREATE_FLIGHT, payload });
export const deleteFlight = payload => ({ type: actionTypes.DELETE_FLIGHT, payload });
export const updateFlight = payload => ({ type: actionTypes.UPDATE_FLIGHT, payload });