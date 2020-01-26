import { call, put, takeLatest, } from 'redux-saga/effects';
import { flightService } from '../../api-services/flight-service';
import * as actionTypes from '../constants/action-types';
import { fetchFlights, fetchFlightsError } from '../actions/flight-actions';

function* getFlights() {
    try {
        let flights = yield call(flightService.getAll);
        yield put(fetchFlights(flights));
    } catch (error) {
        yield put(fetchFlightsError(error.message));
    }
}

export default function* onFetchFlights() {
    yield takeLatest(actionTypes.REQUEST_FETCH_FLIGHTS, getFlights)
};