import * as React from "react";
import { BrowserRouter as Router, Link,} from "react-router-dom";
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
    const [Canteen, setCanteen] = React.useState('CU Engineering Canteen');
    const handleChange = (event) => {
        setCanteen(event.target.value);
    }
    return (
        <>
        <div className="nav bgSuperLightBlue"></div>
        <div className="page bgSuperLightBlue">
            <h1 className="darkBlue">Let's get started</h1>
            <TextField
                fullWidth
                variant="outlined"
                label="Email"
                placeholder="Email"
                className="bgWhite"
            />
            <TextField
                fullWidth
                variant="outlined"
                label="Password"
                placeholder="Password"
                type="password"
                className="bgWhite"
            />
            <TextField
                fullWidth
                variant="outlined"
                label="Confirm Password"
                placeholder="Confirm Password"
                type="password"
                className="bgWhite"
            />
            <TextField
                fullWidth
                variant="outlined"
                label="Firstname"
                placeholder="Firstname"
                className="bgWhite"
            />
            <TextField
                fullWidth
                variant="outlined"
                label="Lastname"
                placeholder="Lastname"
                className="bgWhite"
            />
            <TextField
                fullWidth
                variant="outlined"
                label="Restaurant name"
                placeholder="Restaurant name"
                className="bgWhite"
            />
            <TextField
                fullWidth
                variant="outlined"
                label="Telephone number"
                placeholder="Telephone number"
                className="bgWhite"
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
                <Link to="/rSignIn" className="removeUnderLineLink">
                    <Button
                        fullWidth
                        variant="contained"
                        className="bgDarkBlue"
                    >
                        Sign Up
                    </Button>
                </Link>
            </div>
        </div>
        </>
    )
}
