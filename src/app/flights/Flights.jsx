import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

import { useSelector, useDispatch } from 'react-redux';
import { requestFetchFlights, deleteFlight } from '../../store/actions/flight-actions';
import DataGrid from '../shared/custom-controls/DataGrid/DataGrid';
import ConfirmDialog from '../shared/custom-controls/DataGrid/ConfirmDialog';
import FlightModal from './FlightModal';
import SearchInput from '../shared/custom-controls/DataGrid/SearchInput';

const Flights = () => {

    const [columns] = useState([
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
        }
    ]);

    const [deleteConfirm, setDeleteConfirm] = useState(false);
    const [flightModal, setFlightModal] = useState(false);
    const [selectedFlight, setSelectedFlight] = useState({});
    const [filteredData, setFilteredData] = useState([]);
    const flights = useSelector(state => state.flights);
    const dispatch = useDispatch();

    const initFetch = useCallback(() => {
        dispatch(requestFetchFlights());
    }, [dispatch]);

    useEffect(() => {
        initFetch();
    }, [initFetch]);

    const handleRowClick = (action, flight) => {
        setSelectedFlight(flight);
        switch (action) {
            case 'DELETE':
                setDeleteConfirm(true);
                break;
            case 'EDIT':
                setFlightModal(true);
                break;
            default:
                break;
        }
    };

    const renderDataGrid = useMemo(() => {
        const rows = filteredData.length > 0 ? filteredData : flights.data
        return (
            <DataGrid onRowSelected={handleRowClick} loading={flights.loading} rows={rows} columns={columns}></DataGrid>
        )
    }, [columns, filteredData, flights]);

    const closeFlightModal = () => {
        setFlightModal(false);
        setSelectedFlight({});
    }

    const openFlightDataModal = useMemo(() => {
        if (flightModal) {
            return <FlightModal flight={selectedFlight} showDialog={flightModal} onClose={closeFlightModal}></FlightModal>
        }
    }, [flightModal, selectedFlight]);

    const handleFlightDelete = (confirm) => {
        if (confirm) {
            dispatch(deleteFlight(selectedFlight.id))
        }
        setDeleteConfirm(false);
    }

    const showDeleteConfirmDialog = useMemo(() => {
        if (deleteConfirm) {
            return <ConfirmDialog showDialog={deleteConfirm} onClose={handleFlightDelete}></ConfirmDialog>
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [deleteConfirm]);

    const handleSearch = (query) => {

        let currentList = [];
        let newList = [];

        if (query !== '') {
            currentList = flights.data;
            newList = currentList.filter(item => {
                const lc = item['departure'].toLowerCase();
                const filter = query.toLowerCase();
                return lc.includes(filter);
            });
        }

        setFilteredData(newList);
    }

    return (
        <React.Fragment>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Box mt={2} mb={2}>
                    <Button variant="contained" color="primary" onClick={() => setFlightModal(true)}>Add Flight</Button>
                    <SearchInput onSearch={handleSearch}></SearchInput>
                </Box>
                {renderDataGrid}
                {showDeleteConfirmDialog}
                {openFlightDataModal}
            </Grid>
        </React.Fragment >
    );
}

export default Flights;