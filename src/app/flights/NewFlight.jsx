import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { getUniqueId, } from '../../utils/util';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { createFlight } from '../../store/actions/flight-actions';

const useStyles = makeStyles(theme => ({
    container: {
        margin: theme.spacing(3),
    },
    formControl: {
        marginBottom: theme.spacing(2),
        width: 400,
    },
    submitButton: {
        marginRight: theme.spacing(2)
    }
}));

const NewFlight = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch()

    const [departure, setDeparture] = React.useState('');
    const [arrival, setArrival] = React.useState('');
    const [departureDate, setDepartureDate] = React.useState('');
    const [departureTime, setDepartureTime] = React.useState('');
    const [arrivalDate, setArrivalDate] = React.useState('');
    const [arrivalTime, setArrivalTime] = React.useState('');
    const [category, setCategory] = React.useState('business');

    const handleSubmit = (e) => {
        dispatch(createFlight({
            id: getUniqueId(), departure, arrival, departureDate, departureTime, arrivalDate, arrivalTime, category
        }));
    }

    const redirect = () => {
        history.push('/flights');
    }

    return (
        <React.Fragment>
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <form className={classes.container} noValidate autoComplete="off">
                    <Typography variant="h5" component="h5">Add New Flight</Typography>
                    <div><TextField id="departure" name="departure" label="Departure" className={classes.formControl} value={departure} onChange={(e) => setDeparture(e.target.value)} /></div>
                    <div><TextField id="arrival" name="arrival" label="Arrival" className={classes.formControl} value={arrival} onChange={(e) => setArrival(e.target.value)} /></div>
                    <div><TextField id="departureDate" name="departureDate" label="Departure Date" type="date" className={classes.formControl}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={departureDate} onChange={(e) => setDepartureDate(e.target.value)} /></div>
                    <div><TextField id="departureTime" name="departureTime" label="Departure Time" type="time" className={classes.formControl}
                        InputLabelProps={{
                            shrink: true,
                        }} inputProps={{
                            step: 300
                        }}
                        value={departureTime} onChange={(e) => setDepartureTime(e.target.value)} /></div>
                    <div><TextField id="arrivalDate" name="arrivalDate" label="Arrival Date" type="date" className={classes.formControl}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        value={arrivalDate} onChange={(e) => setArrivalDate(e.target.value)} /></div>
                    <div><TextField id="arrivalTime" name="arrivalTime" label="Arrival Time" type="time" className={classes.formControl}
                        InputLabelProps={{
                            shrink: true,
                        }} inputProps={{
                            step: 300
                        }}
                        value={arrivalTime} onChange={(e) => setArrivalTime(e.target.value)} /></div>
                    <div>
                        <FormControl component="fieldset" className={classes.formControl}>
                            <FormLabel component="legend">Category</FormLabel>
                            <RadioGroup name="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                                <FormControlLabel value="business" control={<Radio />} label="Business" />
                                <FormControlLabel value="cheap" control={<Radio />} label="Cheap" />
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <div>
                        <Button variant="contained" className={classes.submitButton}
                            disabled={departure === '' || arrival === '' || departureDate === '' || departureTime === '' || arrivalDate === '' || arrivalTime === ''}
                            color="primary" onClick={handleSubmit}>Add Flight</Button>
                        <Button variant="contained" color="secondary" onClick={redirect}>Back</Button>
                    </div>
                </form>
            </Grid>
        </React.Fragment >
    )
}

export default NewFlight;