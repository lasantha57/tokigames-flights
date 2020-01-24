import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const Footer = () => {

    function Copyright() {
        return (
            <Typography variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://tokigames.com/">
                    Tokigames
            </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    }

    return (
        <React.Fragment>
            <Box mt={3}>
                <Copyright />
            </Box>
        </React.Fragment>
    )
}

export default Footer;