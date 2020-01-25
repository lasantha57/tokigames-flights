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
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
    container: {
        margin: theme.spacing(3),
    },
    formControl: {
        marginBottom: theme.spacing(2),
        width: 400,
    },
}));

const NewFlight = () => {
    const classes = useStyles();
    const history = useHistory();
    const [value, setValue] = React.useState('business');

    const handleChange = event => {
        setValue(event.target.value);
    };

    const handleSubmit = (e) => {

    }

    const redirect = () => {
        history.push('/flights');
    }

    return (
        <React.Fragment>
            <Typography variant="h5" component="h5">Add New Flight</Typography>

            <form className={classes.container} noValidate autoComplete="off">
                <div><TextField id="departure" name="departure" label="Departure" className={classes.formControl} /></div>
                <div><TextField id="arrival" name="arrival" label="Arrival" className={classes.formControl} /></div>
                <div><TextField id="departureDate" name="departureDate" label="Departure Date" type="date" defaultValue="2017-05-24" className={classes.formControl}
                    InputLabelProps={{
                        shrink: true,
                    }}
                /></div>
                <div><TextField id="departureTime" name="departureTime" label="Departure Time" type="time" defaultValue="07:30" className={classes.formControl}
                    InputLabelProps={{
                        shrink: true,
                    }} inputProps={{
                        step: 300
                    }}
                /></div>
                <div><TextField id="arrivalDate" name="arrivalDate" label="Arrival Date" type="date" defaultValue="2017-05-24" className={classes.formControl}
                    InputLabelProps={{
                        shrink: true,
                    }}
                /></div>
                <div><TextField id="arrivalTime" name="arrivalTime" label="Arrival Time" type="time" defaultValue="07:30" className={classes.formControl}
                    InputLabelProps={{
                        shrink: true,
                    }} inputProps={{
                        step: 300
                    }}
                /></div>
                <div>
                    <FormControl component="fieldset" className={classes.formControl}>
                        <FormLabel component="legend">Category</FormLabel>
                        <RadioGroup name="category" value={value} onChange={handleChange}>
                            <FormControlLabel value="business" control={<Radio />} label="Business" />
                            <FormControlLabel value="cheap" control={<Radio />} label="Cheap" />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div>
                    <Button variant="contained" color="primary" onClick={handleSubmit}>Add Flight</Button>
                    <Button variant="contained" onClick={redirect}>Back</Button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default NewFlight;