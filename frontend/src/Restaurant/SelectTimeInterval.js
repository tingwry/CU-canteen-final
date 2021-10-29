import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import "./rHome.css"

const time = [
    { value: 'xx.xx-xx.xx', label: 'xx.xx-xx.xx', },
    { value: '6.00-6.30', label: '6.00-6.30', },
    { value: '6.30-7.00', label: '6.30-7.00', },
    { value: '7.00-7.30', label: '7.00-7.30', },
    { value: '7.30-8.00', label: '7.30-8.00', },
    { value: '8.00-8.30', label: '8.00-8.30', },
    { value: '8.30-9.00', label: '8.30-9.00', },
    { value: '9.00-9.30', label: '9.00-9.30', },
    { value: '9.30-10.00', label: '9.30-10.00', },
    { value: '10.00-10.30', label: '10.00-10.30', },
    { value: '10.30-11.00', label: '10.30-11.00', },
    { value: '11.00-11.30', label: '11.00-11.30', },
    { value: '11.30-12.00', label: '11.30-12.00', },
    { value: '12.00-12.30', label: '12.00-12.30', },
    { value: '12.30-13.00', label: '12.30-13.00', },
    { value: '13.00-13.30', label: '13.00-13.30', },
    { value: '13.30-14.00', label: '13.30-14.00', },
    { value: '14.00-14.30', label: '14.00-14.30', },
    { value: '14.30-15.00', label: '14.30-15.00', },
    { value: '15.00-15.30', label: '15.00-15.30', },
    { value: '15.30-16.00', label: '15.30-16.00', },
    { value: '16.00-16.30', label: '16.00-16.30', },
    { value: '16.30-17.00', label: '16.30-17.00', },
    { value: '17.00-17.30', label: '17.00-17.30', },
    { value: '17.30-18.00', label: '17.30-18.00', },
    { value: '18.00-18.30', label: '18.00-18.30', },
    { value: '18.30-19.00', label: '18.30-19.00', },
]

export default function SelectTimeInterval() {
    const [Time, setTime] = React.useState('xx.xx-xx.xx');
    const handleChange = (event) => {
        setTime(event.target.value);
    }

    return (
        <div>
            <TextField
                select
                value={Time}
                onChange={handleChange}
                className="selectTime"
            >
                    {time.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}    
            </TextField>
        </div>
    );
}