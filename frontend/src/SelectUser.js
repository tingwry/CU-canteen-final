import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    useHistory,
} from "react-router-dom";
import SelectUserComponent from "./SelectUserComponent";
//restaurant
//import RSignIn from "./Restaurant/rSignIn";
//import SignInTry from "./Restaurant/SignInTry";
import SignInTry2 from "./Restaurant/SignInTry2";
//import RSignUp from "./Restaurant/rSignUp";
import SignUpTry2 from "./Restaurant/SignUpTry2";
import RHome from "./Restaurant/rHome";
import OrderList from "./Restaurant/OrderList";
import EditMenu from "./Restaurant/EditMenu";
import AddNewMenu from "./Restaurant/AddNewMenu"
import EditEachMenu from "./Restaurant/EditEachMenu";
import EditRes from "./Restaurant/EditRes";

//customer
import CSignIn from "./Customer/cSignIn";
import CSignUp from "./Customer/cSignUp";
import CHome from "./Customer/cHome";
//import CheckOut from "./Customer/CheckOut";
import EachRes from "./Customer/EachRes";
//import EachRes2 from "./Customer/EachRes2";
//import EachRes3 from "./Customer/EachRes3";
import EachMenu2 from "./Customer/EachMenu2";
//import EachMenu3 from "./Customer/EachMenu3";

//select user component
//import SelectUserComponent from "./SelectUserComponent";
//import SelectUserComponentCopy from "./SelectUserComponent copy";

export default function SelectUser() {
    return (
        <Router>
            <>
                <Switch>
                    <Route exact path="/">
                        <SelectUserComponent />
                    </Route>
                    <Route exact path="/rSignIn">
                        <SignInTry2 />
                    </Route>
                    <Route exact path="/rHome">
                        <RHome />
                    </Route>
                    <Route exact path="/rSignUp">
                        <SignUpTry2 />
                    </Route>
                    <Route exact path="/rHome/orderList">
                        <OrderList />
                    </Route>
                    <Route exact path="/rHome/editMenu">
                        <EditMenu />
                    </Route>
                    <Route exact path="/rHome/editRes">
                        <EditRes />
                    </Route>
                    <Route exact path="/rHome/editMenu/editEachMenu">
                        <EditEachMenu />
                    </Route>
                    <Route exact path="/rHome/editMenu/addNewMenu">
                        <AddNewMenu />
                    </Route>
                    <Route exact path="/cSignIn">
                        <CSignIn />
                    </Route>
                    <Route exact path="/cSignUp">
                        <CSignUp />
                    </Route>
                    <Route exact path="/cHome">
                        <CHome />
                    </Route>
                    <Route exact path="/cHome/eachRes">
                        <EachRes />
                    </Route>
                    <Route exact path="/cHome/eachRes/:id">
                        <EachMenu2 />
                    </Route>
                </Switch>
            </>
        </Router>
    )
}