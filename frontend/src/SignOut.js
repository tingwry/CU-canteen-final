import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
//
import IconButton from '@mui/material/IconButton';
import LogoutIcon from '@mui/icons-material/Logout';
//
import { Redirect } from 'react-router-dom';

export default function SignOut({iconColor}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    //redirect
    const [signOut, setSignOut] = React.useState(false);
    const handleSignOut = () => {
        setSignOut(true);
    };
    if (signOut) {
        return <Redirect to="/" />
    }

    return (
        <>
            <IconButton size="large" onClick={handleClickOpen}><LogoutIcon className="white" fontSize="large" className={iconColor}/></IconButton>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    Are you sure?
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to sign out?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>cancel</Button>
                    <Button autoFocus onClick={handleSignOut}>
                        Sign out
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}