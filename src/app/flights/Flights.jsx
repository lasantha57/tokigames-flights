import React from 'react';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

const Flights = () => {
    return (
        <React.Fragment>
            <Typography variant="h4" color="textPrimary" gutterBottom>
                Flights
        </Typography>
            <Grid container spacing={5}></Grid>
        </React.Fragment>
    );
}

export default Flights;