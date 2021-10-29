import React from "react";
import {
    BrowserRouter as Router,
    Link,
    useRouteMatch
} from "react-router-dom";
//profile
import SignOut from "../SignOut";
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';
//list of pages
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
//list of pages' icons
import ViewListIcon from '@mui/icons-material/ViewList';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StorefrontIcon from '@mui/icons-material/Storefront';
//css
import "./rHome.css";
import "../App.css";

const Input = styled('input')({
    display: 'none',
});

export default function RHome() {
    let { path, url } = useRouteMatch();
    return (
        <>
            <div className="nav logOut">
                <SignOut iconColor="superDarkBlue"/>
            </div>
            <div className="page bgSuperLightBlue">
                <div id="profile">
                    <div className="uploadImage">
                        <img src="/Image/iSelectUserR.jpg" className="imgProfile" alt="Profile" />
                        <Stack direction="row" alignItems="center" spacing={2}>
                            <label htmlFor="contained-button-file">
                                <Input accept="image/*" id="contained-button-file" type="file" />
                                <Button variant="contained" component="span" className="bgDarkBlue">
                                    Upload
                                </Button>
                            </label>
                        </Stack>
                    </div>
                    <h2 className="darkBlue superBold">
                        Somying Yingsom
                    </h2>
                    <h3 className="almostDarkBlue">
                        Khaomunkai Pa Somying
                    </h3>
                </div>
                <List className="FullWidth">
                    <Divider />
                    <ListItem>
                        <Link
                            to={`${url}/orderList`}
                            className="darkBlue superBold removeUnderLineLink fullWidth">
                            <ListItemButton>
                                <ListItemIcon><ViewListIcon className="superDarkBlue" /></ListItemIcon>
                                Order List
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem className="darkBlue superBold removeUnderLineLink fullWidth" disabled>
                        <ListItemButton>
                            <ListItemIcon><CircleNotificationsIcon className="superDarkBlue" /></ListItemIcon>
                            Notification
                        </ListItemButton>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link
                            to={`${url}/editMenu`}
                            className="darkBlue superBold removeUnderLineLink fullWidth">
                            <ListItemButton>
                                <ListItemIcon><MenuBookIcon className="superDarkBlue" /></ListItemIcon>
                                Edit your menu
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem>
                        <Link
                            to={`${url}/editRes`}
                            className="darkBlue superBold removeUnderLineLink fullWidth" >
                            <ListItemButton >
                                <ListItemIcon><StorefrontIcon className="superDarkBlue" /></ListItemIcon>
                                Edit your restaurant
                            </ListItemButton>
                        </Link>
                    </ListItem>
                    <Divider />
                </List>
            </div>
        </>
    )
}