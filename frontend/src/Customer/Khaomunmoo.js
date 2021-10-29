import React, { useState } from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//css
import "../App.css"
import "./cHome.css"

export default function Khaomunmoo() {
    //response
    const handleSubmit = (event) => {
        event.preventDefault();
        const menu = { menu: "khaomunmoo" };
        console.log(menu)
        alert("Your order has been received.")
    }
    //+/-
    const [counter, setCounter] = useState(1);
    const addClick = () => {
        setCounter(counter + 1);
    };
    const subtractClick = () => {
        if (counter == 1) {
        } else {
            setCounter(counter - 1);
        }
    }
    return (
        <>
            <div>
                <img src="/Image/iMenu2.jpg" className="imgMenu" alt="menu" />
            </div>
            <div className="page bgSuperLightPink">
                <div>
                    <IconButton className="bgDarkPink"><ArrowBackIcon className="white" /></IconButton>
                </div>
                <div className="includeimgPage"><h1 className="darkPink">Khaomunmoo</h1></div>
                <div>price: not available</div>
                <div>description: not available</div>
                <TextField
                    disabled
                    label="Additional note: not available"
                    placeholder="Additional note"
                    multiline
                    rows={4}
                    className="bgWhite"
                />
                <div className="amount">
                    <Button
                        disabled
                        onClick={subtractClick}
                        variant="contained"
                        className="bgDarkPink"
                    >
                        <RemoveIcon />
                    </Button>
                    <div><h4 className="darkPink superBold">{counter}</h4></div>
                    <Button
                        disabled
                        onClick={addClick}
                        variant="contained"
                        className="bgDarkPink"
                    >
                        <AddIcon />
                    </Button>
                </div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="bgDarkPink"
                        >
                            Add to cart
                        </Button>
                    </form>
                </div>

            </div>
        </>
    )
}