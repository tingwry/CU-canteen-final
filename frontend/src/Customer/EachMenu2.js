import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
//css
import "../App.css"
import "./cHome.css"

//manual
const dataManual = {
    menuName: 'Khaomunkaitom',
    amountLeft: 60,
    price: 35,
    description: 'This is khaomunkai by pa Somying'
}

export default function EachMenu2() {
    //request
    const { id } = useParams();

    //response
    const handleSubmit = async event => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const customerName= data.get('customerName');
        const dataRes = {
            dish: menuReq,
            customer: customerName,
            amount: counter,
        };
        console.log({ dataRes })

        const response = await fetch('/add_order', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataRes)
        },[]);
        if (response.ok) {
            alert("Your order has been received.");
            window.location.href = "/cHome/eachRes"
        }
    }

    //request
    const [dataReq, setDataReq] = useState([])
    const [menuReq, setMenuReq] = useState([])
    const [amountLeftReq, setAmountLeftReq] = useState([])
    const [priceReq, setPriceReq] = useState([])

    useEffect(() => {
        console.log(id)
        fetch(`/allMenu/${id}`)
            .then(response =>
                response.json().then(data => {
                    console.log(data)
                    // console.log(data)
                    // console.log(data.amountLeft)
                    // console.log(data.price)
                    setDataReq(data)
                    setMenuReq(data.menu)
                    setAmountLeftReq(data.amountLeft)
                    setPriceReq(data.price)
                }))
    },[])

    //+/
    const [counter, setCounter] = useState(1);
    const addClick = () => {
        setCounter(counter + 1);
        if (counter ==  amountLeftReq ) {
        } else {
            setCounter(counter + 1);
        }
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
            <div className="nav bgSuperLightPink">
                <Link to="/cHome/eachRes">
                    <IconButton size="large" className="bgDarkPink"><ArrowBackIcon className="white" fontSize="large" /></IconButton>
                </Link>
            </div>
            <div className="page bgSuperLightPink">
                <form onSubmit={handleSubmit} className="submitForm">
                    <div className="pageIncludeImage"><h1 className="darkPink">{menuReq}</h1></div>
                    <div>{amountLeftReq} left</div>
                    <div>price: {priceReq} ฿</div>
                    <div>description: not available</div>
                    <TextField
                        label="Additional note"
                        placeholder="Additional note"
                        multiline
                        rows={4}
                        className="bgWhite"
                    />
                    <TextField
                        name="customerName"
                        label="Name"
                        placeholder="Please enter your name"
                        className="bgWhite"
                        fullWidth
                        required
                    />
                    <div className="amount">
                        <Button
                            onClick={subtractClick}
                            variant="contained"
                            className="bgDarkPink"
                        >
                            <RemoveIcon />
                        </Button>
                        <div><h4 className="darkPink superBold">{counter}</h4></div>
                        <Button
                            onClick={addClick}
                            variant="contained"
                            className="bgDarkPink"
                        >
                            <AddIcon />
                        </Button>
                    </div>
                    
                    <div>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className="bgDarkPink"
                        >
                            Place order
                        </Button>
                    </div>
                </form>
            </div>
        </>
    )
}
