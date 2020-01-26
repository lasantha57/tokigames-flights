import React from 'react';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import _ from 'lodash';

const useStyles = makeStyles({
    searchInput: {
        marginTop: '20px',

    },
});

const SearchInput = ({ onSearch }) => {
    const classes = useStyles();

    const doSearch = _.debounce((query) => {
        onSearch(query);
    }, 1000);

    return (
        <Grid container className={classes.searchInput} direction="row" alignItems="center">
            <Grid item>
                <SearchIcon />
            </Grid>
            <Grid item>
                <InputBase type="search" placeholder="Search Flight..." onChange={(e) => doSearch(e.target.value)} inputProps={{ 'aria-label': 'search' }} />
            </Grid>
        </Grid>
    );
}

export default SearchInput;