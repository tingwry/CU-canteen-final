import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//add new menu
import Button from "@mui/material/Button";
//card
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
//css
import "../App.css";
import "./rHome"

//manual
const dataManual = {
    resName: 'Khaomunkai Pa Somying',
    pickUpTime: '10.30-13.00',
}
function createMenu(menu, limitedAmount) {
    return { menu, limitedAmount}
}
const categ1 = [
    createMenu('Kai jieow thammada', 40),
    createMenu('Kai jieow moo sub', 40),
    createMenu('Kai jieow kung sub', 40),
    createMenu('Kai jieow pla sub', 40),
    createMenu('Kai jieow phuk sub', 40),
    createMenu('Kai jieow kai sub', 40),
    createMenu('Kai jieow ped sub', 40),
    createMenu('Kai jieow hoi sub', 40),
]
const categ2 = [
    createMenu('Kao Kai jieow thammada', 60),
    createMenu('Kao Kai jieow moo sub', 50),
    createMenu('Kao Kai jieow kung sub', 30),
    createMenu('Kao Kai jieow pla sub', 30),
    createMenu('Kao Kai jieow phuk sub', 30),
    createMenu('Kao Kai jieow kai sub', 30),
    createMenu('Kao Kai jieow ped sub', 30),
    createMenu('Kao Kai jieow hoi sub', 30),
]
const categ3 = [
    createMenu('Kaomunkaitom', 60),
    createMenu('Kaomunkaitod', 40),
    createMenu('Kaomunkaiyang', 40),
    createMenu('Kaomunkaipalo', 40),
]
const categ4 = [
    createMenu('Kaomunpedyang', 40),
    createMenu('Kaomunpedpalo', 40),
]
const recommended = [
    createMenu('Khaomunkaitom', 60),
    createMenu('Khaomunped', 60),
    createMenu('Khaomunmoo', 60),
    createMenu('Khaomunpla', 60)
]

export default function EditMenu() {
    return (
        <>
            <div className="nav bgSuperLightBlue">
                <Link to="/rHome">
                    <IconButton size="large"><ArrowBackIcon className="superDarkBlue" fontSize="large" /></IconButton>
                </Link>
            </div>
            <div className="page bgSuperLightBlue">
                <div><h1 className="darkBlue">Menu List</h1></div>
                <div>
                    <Link to="/rHome/editMenu/addNewMenu" className="removeUnderLineLink">
                        <Button
                            variant="contained"
                            className="bgDarkBlue"
                            fullWidth
                        >
                            Add new menu
                        </Button>
                    </Link>
                </div>
                <div className="allMenu">
                    <div>
                        <div><h3 className="darkBlue">Recommended</h3></div>
                        <div className="recommended">
                            {recommended.map((each) => (
                                <Card className="recommendedCard">
                                    <Link to="/rHome/editMenu/editEachMenu" className="darkBlue removeUnderLineLink">
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                image="/Image/iMenu2.jpg"
                                                className="recommendedImg"
                                            />
                                            <CardContent>
                                                <Typography>{each.menu}</Typography>
                                                <div className="recommendedNumbers">
                                                    <Typography className="superBold">{each.limitedAmount} orders per day</Typography>
                                                </div>
                                            </CardContent>
                                        </CardActionArea>
                                    </Link>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div><h3 className="darkBlue">Kub Khao</h3></div>
                        <Card>
                            <CardContent>
                                {categ1.map((categ) => (
                                    <Link to="/rHome/editMenu/editEachMenu" className="black removeUnderLineLink">
                                        <CardActionArea>
                                            <div className="categoryCardMenuRes">
                                                <Typography>{categ.menu}</Typography>
                                                <Typography>{categ.limitedAmount} orders per day</Typography>
                                            </div>
                                        </CardActionArea>
                                    </Link>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <div><h3 className="darkBlue">Jarn diew</h3></div>
                        <Card>
                            <CardContent>
                                {categ2.map((categ) => (
                                    <Link to="/rHome/editMenu/editEachMenu" className="black removeUnderLineLink">
                                        <CardActionArea className="removeUnderLineLink">
                                            <div className="categoryCardMenuRes">
                                                <Typography>{categ.menu}</Typography>
                                                <Typography>{categ.limitedAmount} orders per day</Typography>
                                            </div>
                                        </CardActionArea>
                                    </Link>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <div><h3 className="darkBlue">Khaomunkai</h3></div>
                        <Card>
                            <CardContent>
                                {categ3.map((categ) => (
                                    <Link to="/rHome/editMenu/editEachMenu" className="black removeUnderLineLink">
                                        <CardActionArea className="removeUnderLineLink">
                                            <div className="categoryCardMenuRes">
                                                <Typography>{categ.menu}</Typography>
                                                <Typography>{categ.limitedAmount} orders per day</Typography>
                                            </div>
                                        </CardActionArea>
                                    </Link>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <div><h3 className="darkBlue">Khaomunped</h3></div>
                        <Card>
                            <CardContent>
                                {categ4.map((categ) => (
                                    <Link to="/rHome/editMenu/editEachMenu" className="black removeUnderLineLink">
                                        <CardActionArea className="removeUnderLineLink">
                                            <div className="categoryCardMenuRes">
                                                <Typography>{categ.menu}</Typography>
                                                <Typography>{categ.limitedAmount} orders per day</Typography>
                                            </div>
                                        </CardActionArea>
                                    </Link>
                                ))}
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div >
        </>
    )
}