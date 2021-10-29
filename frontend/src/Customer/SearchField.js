import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const menus = [
    { menuName: 'Khao ka Moo'},
    { menuName: 'Khao mun kai'},
    { menuName: 'Khao mun kai tom'},
    { menuName: 'Khao mun kai yang'},
    { menuName: 'Khao mun kai tod'},
    { menuName: 'Khai jieow'},
    { menuName: 'Khai dao'},
    { menuName: 'Khai palo'},
    { menuName: 'Noodle sen yai'},
    { menuName: 'Mama'},
    { menuName: 'Noodle sen lek'},
    { menuName: 'Khao pud'},
    { menuName: 'Ka proaw'},
    { menuName: 'Lemonade'},
    { menuName: 'Tea'},
    { menuName: 'Bubble milk tea'},
    { menuName: 'Mlik'},
    { menuName: 'Milkshake'},
    { menuName: 'Donut'},
    { menuName: 'Icecream'},
    { menuName: 'French fries'},
    { menuName: 'Crape'},
    { menuName: 'Kebub'},
]

export default function FreeSolo() {
  return (
      <Autocomplete
        freeSolo
        options={menus.map((option) => option.menuName)}
        renderInput={(params) => <TextField {...params} label="Search" placeholder="Search..." className="bgWhite"/>}
      />
  );
}
