import React from 'react';
import PropTypes from 'prop-types';
import Input from '@material-ui/core/Input';
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
    }, 500);

    return (
        <Grid container className={classes.searchInput} direction="row" alignItems="center">
            <Grid item>
                <SearchIcon />
            </Grid>
            <Grid item>
                <Input type="search" placeholder="Search Flight..." onChange={(e) => doSearch(e.target.value)} inputProps={{ 'aria-label': 'search' }} />
            </Grid>
        </Grid>
    );
}

SearchInput.propTypes = {
    onSearch: PropTypes.func.isRequired
};

export default SearchInput;