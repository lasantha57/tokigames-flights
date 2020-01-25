import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import { useSelector, useDispatch } from 'react-redux';

import { requestFetchFlights } from '../../store/actions/flight-actions';
import DataGrid from '../shared/custom-controls/DataGrid/DataGrid';
import { Button } from '@material-ui/core';

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

    useEffect(() => {
        dispatch(requestFetchFlights());
    }, []);

    const renderGrid = () => {
        return (
            <DataGrid onRowSelected={handleClick} loading={flights.loading} rows={flights.data} columns={grid.columns}></DataGrid>
        )
    }

    const handleClick = (event, id) => {
        console.log(id)
    };

    return (
        <React.Fragment>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Box mt={2} mb={2}>
                    {/* <Typography variant="h5" component="h5">Flights</Typography> */}
                    <Button variant="contained" color="primary">Add Flight</Button>
                </Box>
                {flights ? renderGrid() : ''}
            </Grid>
        </React.Fragment >
    );
}

export default Flights;