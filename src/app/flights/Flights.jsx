import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { requestFetchFlights } from '../../store/actions/flight-actions';
import DataGrid from '../shared/custom-controls/DataGrid/DataGrid';

const Flights = () => {

    const [grid, setGrid] = useState({
        columns: [
            {
                id: 'id',
                numeric: false,
                disablePadding: false,
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
            },
            {
                id: 'isBusiness',
                numeric: false,
                disablePadding: false,
                label: 'Category'
            }
        ],
        rows: [],
        title: 'Flights'
    });

    const flights = useSelector(state => state.flights);
    const dispatch = useDispatch()
    const history = useHistory();

    const initFetch = useCallback(() => {
        dispatch(requestFetchFlights());
    }, [dispatch]);

    useEffect(() => {
        initFetch();
    }, [initFetch]);

    const renderGrid = () => {
        return (
            <DataGrid onRowSelected={handleRowClick} loading={flights.loading} rows={flights.data} columns={grid.columns}></DataGrid>
        )
    }

    const handleRowClick = (event, id) => {
        console.log(id)
    };

    const addNewFlight = () => {
        history.push('/flights/new')
    }

    return (
        <React.Fragment>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Box mt={2} mb={2}>
                    {/* <Typography variant="h5" component="h5">Flights</Typography> */}
                    <Button variant="contained" color="primary" onClick={addNewFlight}>Add Flight</Button>
                </Box>
                {flights ? renderGrid() : ''}
            </Grid>
        </React.Fragment >
    );
}

export default Flights;