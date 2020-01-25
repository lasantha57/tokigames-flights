import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useSelector, useDispatch } from 'react-redux';

import { requestFetchFlights } from '../../store/actions/flight-actions';
import DataGrid from '../shared/custom-controls/DataGrid/DataGrid';

const Flights = () => {

    const [grid, setGrid] = useState({
        columns: [
            {
                id: 'id',
                numeric: false,
                disablePadding: true,
                label: 'Id'
            },
            {
                id: 'departure',
                numeric: false,
                disablePadding: false,
                label: 'Departure'
            },
            {
                id: 'arrival',
                numeric: false,
                disablePadding: false,
                label: 'Arrival'
            },
            {
                id: 'departureDate',
                numeric: false,
                disablePadding: false,
                label: 'Departure Date'
            },
            {
                id: 'departureTime',
                numeric: false,
                disablePadding: false,
                label: 'Departure Time'
            },
            {
                id: 'arrivalDate',
                numeric: false,
                disablePadding: false,
                label: 'Arrival Date'
            },
            {
                id: 'arrivalTime',
                numeric: false,
                disablePadding: false,
                label: 'Arrival Time'
            }
        ],
        rows: [],
        title: 'Flights'
    });

    const flights = useSelector(state => state.flights);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(requestFetchFlights());
    }, []);

    const renderGrid = () => {
        return (
            <DataGrid title={grid.title} rows={flights.data} columns={grid.columns}></DataGrid>
        )
    }

    return (
        <React.Fragment>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                {flights ? renderGrid() : ''}
            </Grid>
        </React.Fragment >
    );
}

export default Flights;