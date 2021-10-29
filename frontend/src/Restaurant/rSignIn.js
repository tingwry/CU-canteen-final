import * as React from 'react';
import { BrowserRouter as Router, Link,} from "react-router-dom";
//components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
//css
import "../App.css";

export default function RSignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const password = data.get('password');
        const rememberMe = data.get('rememberMe')
        console.log({
            email: email,
            password: password,
            rememberMe: rememberMe
        });
    };

    return (
        <>
        <div className="nav bgSuperLightBlue"></div>
        <div className="page bgSuperLightBlue">
            <div><h1 className="darkBlue">Sign in</h1></div>
            <form onSubmit={handleSubmit} className="submitForm">
                <TextField
                    name="email"
                    required
                    fullWidth
                    variant="outlined"
                    label="Email"
                    placeholder="Email"
                    type="email"
                    className="bgWhite"
                />
                <TextField
                    name="password"
                    required
                    fullWidth
                    variant="outlined"
                    label="Password"
                    placeholder="Password"
                    type="password"
                    className="bgWhite"
                />
                <FormControlLabel name="rememberMe" control={<Checkbox className="almostDarkBlue"/>} label="Remember me" />
                <div>
                    <Link to="/rHome" className="removeUnderLineLink">
                        <Button
                            fullWidth
                            variant="contained"
                            className="bgDarkBlue"
                            type="submit"
                        >
                            Sign In
                        </Button>
                    </Link>
                </div>
                <div>
                    <Link to="/rSignUp" className="darkBlue">sign up</Link>
                </div>
            </form>
        </div>
        </>
    );
}
