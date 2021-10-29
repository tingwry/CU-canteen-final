import * as React from "react";
import { BrowserRouter as Router, Link, } from "react-router-dom";
import { useState, useEffect } from "react";
//components
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
//css
import "../App.css";

const canteen = [
    { value: 'CU Engineering Canteen', label: 'CU Engineering Canteen', },
    { value: 'Canteen1', label: 'Canteen1', },
    { value: 'Canteen2', label: 'Canteen2', },
    { value: 'Canteen3', label: 'Canteen3', },
]

export default function RSignUp() {
    const [Canteen, setCanteen] = useState('CU Engineering Canteen');
    //const handleChange = (event) => {
    //    setCanteen(event.target.value);

    //dataRes
    const [inputFields, setInputFields] = useState({
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        telephonenumber: '',
        restaurantname: ''   //
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

            const response = await fetch('/rnewuser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputFields)
            });
            if (response.ok) {
                alert("Registration Successful!");
                window.location.href = "/rSignIn"
            }

        }
    };

    return (
        <>
            <div className="nav bgSuperLightBlue"></div>
            <div className="page bgSuperLightBlue">
                <div><h1 className="darkBlue">Let's get started</h1></div>
                <form onSubmit={handleSubmit} className="submitForm">
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Email"
                        placeholder="Email"
                        className="bgWhite"
                        name="email"
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Password"
                        placeholder="Password"
                        type="password"
                        className="bgWhite"
                        name="password"
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Confirm Password"
                        placeholder="Confirm Password"
                        type="password"
                        className="bgWhite"
                        onChange={(e) => setConfirmpassword(e.target.value)}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Firstname"
                        placeholder="Firstname"
                        className="bgWhite"
                        name="firstname"
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Lastname"
                        placeholder="Lastname"
                        className="bgWhite"
                        name="lastname"
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Restaurant name"
                        placeholder="Restaurant name"
                        className="bgWhite"
                        name="restaurantname"
                        onChange={handleChange}
                    />
                    <TextField
                        fullWidth
                        variant="outlined"
                        label="Telephone number"
                        placeholder="Telephone number"
                        className="bgWhite"
                        name="telephonenumber"
                        onChange={handleChange}
                    />
                    <TextField
                        select
                        fullWidth
                        variant="outlined"
                        label="Select canteen"
                        value={Canteen}
                        onChange={handleChange}
                        disabled
                    >
                        {canteen.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="signButton"
                            className="bgDarkBlue"
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
            </div>
        </>

    )
}
