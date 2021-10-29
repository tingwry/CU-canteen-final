import * as React from "react";
import {
    BrowserRouter as Router,
    Link,
} from "react-router-dom";
import TextField from '@mui/material/TextField'; // for textfield and select canteen
import Button from '@mui/material/Button'; //for sign up button
import { useState, useEffect } from "react";
//css
import "../App.css";

export default function SignUpTry2() {
    //dataRes
    const [inputFields, setInputFields] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        telephonenumber: '',
    });

    const handleChange = e => {
        const { target } = e;
        const { name } = target;
        const value = target.value;
        setInputFields({
            ...inputFields,
            [name]: value
        });
    };
    const [confirmpassword, setConfirmpassword] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();

        if (inputFields.password != confirmpassword) {
            alert("Passwords don't match. Please re-enter your password.");

        } else {
            console.log(inputFields); //check data to be sent

            const response = await fetch('/newuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputFields)
            }, []);
            if (response.ok) {
                alert("Registration Successful!");
                window.location.href = "/cSignIn"
            }
            
        }
    };

    return (
        <>
            <div className="nav bgSuperLightPink"></div>
            <div className="page bgSuperLightPink">
                <div><h1 className="darkPink">Let's get started</h1></div>
                <form onSubmit={handleSubmit} className="submitForm">
                    <TextField
                        name="email"
                        fullWidth
                        variant="outlined"
                        label="Email"
                        placeholder="Email"
                        type="email"
                        onChange={handleChange}
                        required
                        className="bgWhite"
                    />
                    <TextField
                        name="password"
                        fullWidth
                        variant="outlined"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        onChange={handleChange}
                        required
                        className="bgWhite"
                    />
                    <TextField
                        name="confirmpassword"
                        fullWidth
                        variant="outlined"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        type="password"
                        onChange={(e) => setConfirmpassword(e.target.value)}
                        required
                        className="bgWhite"
                    />
                    <TextField
                        name="firstname"
                        fullWidth
                        variant="outlined"
                        label="Firstname"
                        placeholder="Firstname"
                        onChange={handleChange}
                        required
                        className="bgWhite"
                    />
                    <TextField
                        name="lastname"
                        fullWidth
                        variant="outlined"
                        label="Lastname"
                        placeholder="Lastname"
                        onChange={handleChange}
                        required
                        className="bgWhite"
                    />
                    <TextField
                        name="telephonenumber"
                        fullWidth
                        variant="outlined"
                        label="Telephone number"
                        placeholder="Telephone number"
                        onChange={handleChange}
                        required
                        className="bgWhite"
                    />
                    <div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="signButton"
                            className="bgDarkPink"
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
}
