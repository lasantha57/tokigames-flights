import React, { useState, useEffect, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { requestFetchFlights, deleteFlight } from '../../store/actions/flight-actions';
import DataGrid from '../shared/custom-controls/DataGrid/DataGrid';
import ConfirmDialog from '../shared/custom-controls/DataGrid/ConfirmDialog';

const Flights = () => {

    const [grid, setGrid] = useState({
        columns: [
            {
                id: 'id',
                numeric: false,
                disablePadding: false,
                hidden: true,
                label: 'Id'
            },
            {
                id: 'category',
                numeric: false,
                disablePadding: false,
                label: 'Category'
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
                id: 'actions',
                numeric: false,
                disablePadding: false,
                label: ''
            }
        ],
        rows: [],
        title: 'Flights'
    });

    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [selectedFlightId, setSelectedFlightId] = useState('');
    const flights = useSelector(state => state.flights);
    const dispatch = useDispatch();
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

    const handleRowClick = (action, id) => {
        setSelectedFlightId(id);

        switch (action) {
            case 'DELETE':
                setDeleteConfirm(true);
                break;
            case 'UPDATE':
                //TODO:
                break;
            default:
                break;
        }
    };

    const handleFlightDelete = (confirm) => {
        if (confirm) {
            dispatch(deleteFlight(selectedFlightId))
        }
        setDeleteConfirm(false);
    }

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
                {deleteConfirm ? <ConfirmDialog showDialog={deleteConfirm} onClose={handleFlightDelete}></ConfirmDialog> : ''}
            </Grid>
        </React.Fragment >
    );
}

export default Flights;