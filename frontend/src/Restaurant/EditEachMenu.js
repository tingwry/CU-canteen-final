import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
//
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
//css
import "../App.css"

//manual
const dataManual = {
    menu: 'Khaomunkaitom',
    limitedAmount: 60,
    price: 35,
    description: 'This is khaomunkai by pa Somying'
}

export default function EditEachMenu() {
    const [inputFields, setInputFields] = useState({
        unavailable: '',
        recommended: '',
        limitedAmount: '',
        price: '',
        description: '',
        category: '',
    });

    const handleChange2 = e => {
        const { target } = e;
        const { name } = target;
        const value = target.value;
        setInputFields({
            ...inputFields,
            [name]: value
        });
    };
    const handleSubmit = e => {
        e.preventDefault();
        console.log(inputFields)
        alert("Saved")
        window.location.href = "/rHome/editMenu"
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <img src="/Image/iMenu2.jpg" className="imgMenu" alt="menu" />
                </div>
                <div className="nav">
                    <Link to="/rHome/editMenu">
                        <IconButton size="large" className="bgSuperDarkBlue"><ArrowBackIcon className="white" fontSize="large" /></IconButton>
                    </Link>
                </div>
                <div className="page">
                    <div className="pageIncludeImage"><h1 className="darkBlue">{dataManual.menu}</h1></div>
                    <FormControlLabel
                        name="unavailable"
                        control={<Checkbox className="darkBlue" />}
                        label="Unavailable"
                        className="darkBlue"
                        onChange={handleChange2}
                    />
                    <FormControlLabel
                        name="recommended"
                        control={<Checkbox className="darkBlue" />}
                        label="Recommended"
                        className="darkBlue"
                        onChange={handleChange2}
                    />
                    <TextField
                        name="limitedAmount"
                        fullWidth
                        variant="outlined"
                        label="Limited order per day"
                        placeholder="Limited order per day"
                        type="number"
                        defaultValue={dataManual.limitedAmount}
                        className="bgWhite"
                        onChange={handleChange2}
                    />
                    <TextField
                        name="price"
                        fullWidth
                        required
                        variant="outlined"
                        label="Base price"
                        placeholder="Base price"
                        type="number"
                        defaultValue={dataManual.price}
                        className="bgWhite"
                        onChange={handleChange2}
                    />
                    <TextField
                        name="description"
                        fullWidth
                        variant="outlined"
                        label="Description"
                        placeholder="Description"
                        defaultValue={dataManual.description}
                        multiline
                        rows={4}
                        className="bgWhite"
                        onChange={handleChange2}
                    />
                    <TextField 
                        name="category"
                        fullWidth
                        required
                        variant="outlined"
                        label="Category"
                        placeholder="Category"
                        className="bgWhite"
                        onChange={handleChange2}
                    />
                    <div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="success"
                        >
                            Save Change
                        </Button>
                    </div>
                    <div>
                        <Link to="/rHome/EditMenu" className="removeUnderLineLink">
                            <Button
                                variant="contained"
                                color="error"
                                fullWidth
                            >
                                Discard change
                            </Button>
                        </Link>
                    </div>
                </div>
            </form>
        </>
    )
}
