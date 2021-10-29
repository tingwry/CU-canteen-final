import * as React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import { useState } from 'react';
//components
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
//css
import "../App.css"

async function loginUser(credentials) {
    return fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function CSignIn() {
    const [username, setEmail] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log(username, password)
        const response = await loginUser({
            username,
            password
        });
        console.log(response)
        if ('token' in response) {
            localStorage.setItem('token', response.token);
            window.location.href = "/cHome";
        } else {
            alert("Could not find your account. Sign up to create a new account.");
        }
    }

    return (
        <>
        <div className="nav bgSuperLightPink"></div>
        <div className="page bgSuperLightPink">
            <div><h1 className="darkPink">Sign in</h1></div>
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
                    onChange={e => setEmail(e.target.value)}
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
                    onChange={e => setPassword(e.target.value)}
                />
                <div>
                    <Button
                        fullWidth
                        variant="contained"
                        className="bgDarkPink"
                        type="submit"
                    >
                        Sign In
                    </Button>
                </div>
            </form>
            <div>
                <Link to="/cSignUp" className="darkPink">sign up</Link>
            </div>
        </div>
        </>
    );
}
