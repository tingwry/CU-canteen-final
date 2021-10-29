import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//table format
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
//css
import "./rHome.css"
import "../App.css"

//manual
function createData(noReq, customerReq, orderReq, additionalNoteReq, amountReq) {
    return { noReq, customerReq, orderReq, additionalNoteReq, amountReq };
}
const rows = [
    createData('ABC105', 'John', 'Lemonade', '','2'),
    createData('ABC105', 'John', 'Lemonade', '','2'),
    createData('ABC106', 'Jane', 'Tea', '', '3'),
    createData('ABC107', 'Jim', 'Coffee', '', '1'),
    createData('ABC108', 'Joe', 'Milk', '', '6'),
    createData('ABC109', 'James', 'Lemonade', '', '3'),
    createData('ABC110', 'Jason', 'Bubble tea milk', 'extra bubble, low sugar', '100'),
    createData('ABC111', 'Jason', 'Bubble tea milk', 'extra bubble, low sugar', '1'),
    createData('ABC112', 'Jason', 'Bubble tea milk', 'extra bubble, low sugar', '2'),
    createData('ABC113', 'Jason', 'Bubble tea milk', 'extra bubble, low sugar', '3'),
    createData('ABC114', 'Jason', 'Bubble tea milk', 'extra bubble, low sugar', '4'),
    createData('ABC115', 'Jason', 'Bubble tea milk', 'extra bubble, low sugar', '5'),
    createData('ABC116', 'Jason', 'Bubble tea milk', 'extra bubble, low sugar', '6'),
]

//table header
const columns = [
    { id: 'customer', label: 'Customer' },
    { id: 'dish', label: 'Dish' },
    { id: 'amount', label: 'Amount' },
]

export default function OrderList() {
    //request
    const [dataReq, setDataReq] = useState([])

    useEffect(() => {
        fetch("/orders").then(response =>
            response.json().then(data => {
                console.log(data)
                console.log(data.orders)
                setDataReq(data.orders)
            }))
    }, [])

    return (
        <>
        <div className="nav bgSuperLightBlue">
                <Link to="/rHome">
                    <IconButton size="large"><ArrowBackIcon className="superDarkBlue" fontSize="large" /></IconButton>
                </Link>
            </div>
        <div className="page bgSuperLightBlue">
            <h1 className="darkBlue">Order List</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        {columns.map((column) =>
                            <TableCell key={column.id} align="center" className="almostDarkBlue superBold">
                                {column.label}
                            </TableCell>
                        )}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {dataReq.map((eachOrder) => (
                        <TableRow key={eachOrder.dish}>
                            <TableCell className="almostDarkBlue">{eachOrder.customer}</TableCell>
                            <TableCell className="almostDarkBlue">{eachOrder.dish}</TableCell>
                            <TableCell align="center" className="almostDarkBlue">{eachOrder.amount}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
        </>
    );
}
