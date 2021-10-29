import React from "react";
import { Link } from "react-router-dom";
//nav bar
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Typography from '@mui/material/Typography';
import SignOut from "../SignOut";
//search
import FreeSolo from "./SearchField";
//card
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
//css
import "../App.css";
import "./cHome.css"

//create data(order detail)
function createData(resName, description) {
    return { resName, description };
}
const ress = [
    createData('Pa Somying Yingsom', 'Somying yingsom kai kaomunkai'),
    createData('Niaw kai vidva', 'Vidva niaw kai'),
    createData('Parabola', 'Hyperbola'),
    createData('Sud lhor', 'Lhor sud'),
    createData('Somchai chaisom'),
    createData('Pa Somying Yingsom'),
    createData('Pa Somying Yingsom'),
]

export default function CHome() {
    return (
        <>
            <div className="nav curveBottom bgDarkPink">
                <IconButton size="large"><AccountCircleIcon className="white" fontSize="large" /></IconButton>
                <Typography fontSize="Large" className="white">CU Engineering canteen</Typography>
                <SignOut iconColor="white"/>
            </div>
            <div className="page bgSuperLightPink">
                <FreeSolo />
                {ress.map((res) => (
                    <Card className="resCard">
                        <Link to="/cHome/eachRes" className="darkPink removeUnderLineLink">
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="/Image/iMenu1.jpg"
                                    alt="Restaurant picture"
                                    className="resCardImg"
                                    align="left"
                                />
                                <CardContent>
                                    <Typography className="darkPink superBold">{res.resName}</Typography>
                                    <Typography color="text.secondary">{res.description}</Typography>
                                </CardContent>
                            </CardActionArea>
                        </Link>
                    </Card>
                ))}
            </div>
        </>
    )
}