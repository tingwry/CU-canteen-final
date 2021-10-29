import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
//card
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//css
import "../App.css";
import "./cHome.css"

//manual
const dataManual = {
    resName: 'Khaomunkai Pa Somying',
    pickUpTime: '10.30-13.00',
}
function createMenu(menu, amountLeft, price) {
    return { menu, amountLeft, price }
}
const categ1 = [
    createMenu('Kai jieow thammada', 40, 15),
    createMenu('Kai jieow moo sub', 40, 20),
    createMenu('Kai jieow kung sub', 40, 20),
    createMenu('Kai jieow pla sub', 40, 20),
    createMenu('Kai jieow phuk sub', 40, 20),
    createMenu('Kai jieow kai sub', 40, 20),
    createMenu('Kai jieow ped sub', 40, 20),
    createMenu('Kai jieow hoi sub', 40, 20),
]
const categ2 = [
    createMenu('Kao Kai jieow thammada', 3, 25),
    createMenu('Kao Kai jieow moo sub', 28, 30),
    createMenu('Kao Kai jieow kung sub', 30, 30),
    createMenu('Kao Kai jieow pla sub', 39, 30),
    createMenu('Kao Kai jieow phuk sub', 29, 30),
    createMenu('Kao Kai jieow kai sub', 17, 30),
    createMenu('Kao Kai jieow ped sub', 12, 30),
    createMenu('Kao Kai jieow hoi sub', 5, 30),
]
const categ3 = [
    createMenu('Kaomunkai tom', 4, 35),
    createMenu('Kaomunkai tod', 11, 35),
    createMenu('Kaomunkai yang', 23, 35),
    createMenu('Kaomunkai palo', 15, 35),
]
const categ4 = [
    createMenu('Kaomunped yang', 40, 35),
    createMenu('Kaomunped palo', 40, 35),
]

const recommended = [
    createMenu('Khaomunkaitomtomkai', 60, 30),
    createMenu('Khaomunped', 60, 35),
    createMenu('Khaomunmoo', 60, 35),
    createMenu('Khaomunpla', 60, 35)
]

export default function EachRes() {
    //request
    const [dataReq, setDataReq] = useState([])

    useEffect(() => {
        fetch("/allMenu").then(response =>
            response.json().then(data => {
                console.log(data.allMenu)
                setDataReq(data.allMenu)
                //change something to ...
            }))
    }, [])

    return (
        <>
            <div className="nav bgSuperLightPink">
                <Link to="/cHome">
                    <IconButton size="large"><ArrowBackIcon className="darkPink" fontSize="large" /></IconButton>
                </Link>
                <IconButton size="large"><ShoppingCartIcon className="darkPink" fontSize="large" /></IconButton>
            </div>
            <div className="page bgSuperLightPink " >
                <div><h1 className="darkPink">{dataManual.resName}</h1></div>
                <div><h3 className="darkPink">Pick-up time: {dataManual.pickUpTime}</h3></div>
                <Card>
                    <CardMedia
                        component="img"
                        image="/Image/iMenu1.jpg"
                        alt="Restaurant picture"
                        className="maxHeight200px"
                    />
                </Card>
                <div className="allMenu">
                    <div>
                        <div><h3 className="darkPink">Recommended</h3></div>
                        <div className="recommended">
                            {dataReq.map((each) => (
                                <Card className="recommendedCard">
                                    <Link to={`/cHome/eachRes/${each.id}`} className="darkPink removeUnderLineLink">
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                image="/Image/iMenu2.jpg"
                                                className="recommendedImg"
                                            />
                                            <CardContent>
                                                <Typography>{each.menu}</Typography>
                                                <div className="recommendedNumbers">
                                                    <Typography className="superBold">{each.amountLeft} left</Typography>
                                                    <Typography>{each.price} ฿</Typography>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div><h3 className="darkPink">Kub Khao</h3></div>
                        <Card>
                            <CardContent>
                                {categ1.map((categ) => (
                                    <>
                                        <CardActionArea className="removeUnderLineLink">
                                            <div className="categoryCardMenu">
                                                <Typography>{categ.menu}</Typography>
                                                <Typography>{categ.amountLeft} left | {categ.price} ฿</Typography>
                                            </div>
                                        </CardActionArea>
                                    </>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <div><h3 className="darkPink">Jarn diew</h3></div>
                        <Card>
                            <CardContent>
                                {categ2.map((categ) => (
                                    <>
                                        <CardActionArea className="removeUnderLineLink">
                                            <div className="categoryCardMenu">
                                                <Typography>{categ.menu}</Typography>
                                                <Typography>{categ.amountLeft} left | {categ.price} ฿</Typography>
                                            </div>
                                        </CardActionArea>
                                    </>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <div><h3 className="darkPink">Khaomunkai</h3></div>
                        <Card>
                            <CardContent>
                                {categ3.map((categ) => (
                                    <>
                                        <CardActionArea className="removeUnderLineLink">
                                            <div className="categoryCardMenu">
                                                <Typography>{categ.menu}</Typography>
                                                <Typography>{categ.amountLeft} left | {categ.price} ฿</Typography>
                                            </div>
                                        </CardActionArea>
                                    </>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <div><h3 className="darkPink">Khaomunped</h3></div>
                        <Card>
                            <CardContent>
                                {categ4.map((categ) => (
                                    <>
                                        <CardActionArea className="removeUnderLineLink">
                                            <div className="categoryCardMenu">
                                                <Typography>{categ.menu}</Typography>
                                                <Typography>{categ.amountLeft} left | {categ.price} ฿</Typography>
                                            </div>
                                        </CardActionArea>
                                    </>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div >
        </>
    )
}
