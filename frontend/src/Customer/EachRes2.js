import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//card
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

//css
import "../App.css";
import "./cHome.css"

//manual
function createDataManual(id, menu, amountLeft, price) {
    return { id, menu, amountLeft, price };
}
const dataManual = [
    createDataManual(101, 'Khaomunkai', 60, 35),
    createDataManual(102, 'Khaomunmoo', 60, 40),
    createDataManual(103, 'Khaomunped', 60, 40),
    createDataManual(104, 'Khaomunpla', 60, 40),
    createDataManual(105, 'Kai jieow', 60, 15),
    createDataManual(106, 'Kai jieow moo sub', 60, 20),
    createDataManual(107, 'Kai jieow kung', 60, 20),
    createDataManual(108, 'Kai jieow poo', 60, 25),
    createDataManual(109, 'Kai jieow pla', 60, 20),
]

export default function EachRes2() {
    //request
    const [dataReq, setDataReq] = useState([])

    useEffect(() => {
        fetch("/").then(response =>
            response.json().then(data => {
                console.log(data.something)
                setDataReq(data.something)
                //change something to ...
            }))
    })

    return (
        <>
            <div className="nav bgSuperLightPink">
                <Link to="/cHome">
                    <IconButton size="large"><ArrowBackIcon className="darkPink" fontSize="large" /></IconButton>
                </Link>
                <IconButton size="large"><ShoppingCartIcon className="darkPink" fontSize="large" /></IconButton>
            </div>
            <div className="page bgSuperLightPink" >
                <div><h1 className="darkPink">Khaomunkai Pa Somying</h1></div>
                <div><h6 className="darkPink">Pick-up time: 10.30-13.00</h6></div>
                <div><h5 className="darkPink">Menu</h5></div>
                <div className="allMenu">
                    {dataReq.map((each) => (
                        <Card>
                            <CardActionArea href={`/cHome/eachRes/${each.id}`} className="removeUnderLineLink">
                                <CardContent className="allMenuCard">
                                    <Typography>
                                        {each.menu}
                                    </Typography>
                                    <Typography>
                                        {each.amountLeft} left | {each.price} ฿
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    ))}
                </div>
            </div>
        </>
    )
}
