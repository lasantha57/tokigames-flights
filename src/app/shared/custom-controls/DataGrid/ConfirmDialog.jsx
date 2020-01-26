import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const ConfirmDialog = ({ showDialog, onClose }) => {

    const handleConfirm = (confirm) => {
        onClose(confirm);
    };

    return (
        <Dialog
            open={showDialog}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">Delete Cofirm</DialogTitle>
            <DialogContent>
                <DialogContentText id="alert-dialog-description">
                    Are you sure you want to delete the record?
          </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={(e) => handleConfirm(false)} color="primary">
                    No
          </Button>
                <Button onClick={(e) => handleConfirm(true)} color="primary" autoFocus>
                    Yes
          </Button>
            </DialogActions>
        </Dialog>
    )
}

ConfirmDialog.propTypes = {
    showDialog: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};

export default ConfirmDialog;