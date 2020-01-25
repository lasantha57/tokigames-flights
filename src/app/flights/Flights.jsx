import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

import { requestFetchFlights } from '../../store/actions/flight-actions';

const Flights = (props) => {
    const { requestFetchFlights } = props

    useEffect(() => {
        requestFetchFlights();
    }, []);

    return (
        <React.Fragment>

            <Grid
                container
                direction="row"
                justify="flex-start"
                alignItems="flex-start">

                <Typography variant="h5" color="textPrimary" gutterBottom>Flights</Typography>

            </Grid>
        </React.Fragment >
    );
}

const mapStateToProps = state => ({
    flights: state.flights
})

const mapDispatchToProps = dispatch => {
    return { requestFetchFlights: () => dispatch(requestFetchFlights()) }
}

export default connect(mapStateToProps, mapDispatchToProps)(Flights);