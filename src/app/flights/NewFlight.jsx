import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { getUniqueId, } from '../../utils/util';
import { useDispatch } from 'react-redux';
import { createFlight } from '../../store/actions/flight-actions';

const useStyles = makeStyles(theme => ({
    formControl: {
        marginBottom: theme.spacing(2),
        width: 400,
    }
}));

const NewFlight = ({ showDialog, onClose }) => {
    const classes = useStyles();
    const dispatch = useDispatch()

    const [departure, setDeparture] = React.useState('');
    const [arrival, setArrival] = React.useState('');
    const [departureDate, setDepartureDate] = React.useState('');
    const [departureTime, setDepartureTime] = React.useState('');
    const [arrivalDate, setArrivalDate] = React.useState('');
    const [arrivalTime, setArrivalTime] = React.useState('');
    const [category, setCategory] = React.useState('business');

    const handleSubmit = () => {
        dispatch(createFlight({
            id: getUniqueId(), departure, arrival, departureDate, departureTime, arrivalDate, arrivalTime, category
        }));
        onClose();
    }

    return (
        <React.Fragment>
            <Dialog open={showDialog} aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" >
                <DialogTitle id="alert-dialog-title">Add New Flight</DialogTitle>
                <DialogContent>
                    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                        <form noValidate autoComplete="off">
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
                        </form>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button variant="contained" color="primary" onClick={handleSubmit}
                        disabled={departure === '' || arrival === '' || departureDate === '' || departureTime === '' || arrivalDate === '' || arrivalTime === ''}
                    >Add Flight</Button>
                    <Button variant="contained" color="secondary" onClick={onClose}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </React.Fragment >
    )
}

export default NewFlight;