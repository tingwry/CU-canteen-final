import * as React from "react";
import { Link } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//description and slogan
import TextField from '@mui/material/TextField';
//toggle
import Switch from '@mui/material/Switch';
//opening hours
import ToggleButton from '@mui/material/ToggleButton';
import SelectTimeExact from "./SelectTimeExact";
//tags
import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
//css 
import "./rHome.css"

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const resDescription = data.get('resDescription')
    const slogan = data.get('slogan')
    const limit = data.get('limit');
    const tagThai = data.get('tagThai')
    const tagWestern = data.get('tagWestern')
    const tagJapanese = data.get('tagJapanese')
    const tagKorean = data.get('tagKorean')
    const tagIsarn = data.get('tagIsarn')
    const tagHalal = data.get('tagHalal')
    const tagDrinks = data.get('tagDrinks')
    const tagDessert = data.get('tagDessert')
    console.log({
        resDescription: resDescription,
        slogan: slogan,
        limit: limit,
        tagThai: tagThai,
        tagWestern: tagWestern,
        tagJapanese: tagJapanese,
        tagKorean: tagKorean,
        tagIsarn: tagIsarn,
        tagHalal: tagHalal,
        tagDrinks: tagDrinks,
        tagDessert: tagDessert,
    });
};

//create data(default value)
function createData(resDescriptionReq, sloganReq, limitReq,) {
    return { resDescriptionReq, sloganReq, limitReq, };
}
const dataReq = [
    createData('This is your default description.', 'This is your default slogan.', true,),
]

export default function EditRes() {
    //opening hours
    const [selectedSUN, setSelectedSUN] = React.useState(false);
    const [selectedMON, setSelectedMON] = React.useState(false);
    const [selectedTUE, setSelectedTUE] = React.useState(false);
    const [selectedWED, setSelectedWED] = React.useState(false);
    const [selectedTHU, setSelectedTHU] = React.useState(false);
    const [selectedFRI, setSelectedFRI] = React.useState(false);
    const [selectedSAT, setSelectedSAT] = React.useState(false);

    return (
        <>
            <div className="nav bgSuperLightBlue">
                <Link to="/rHome">
                    <IconButton size="large"><ArrowBackIcon className="superDarkBlue" fontSize="large" /></IconButton>
                </Link>
            </div>
            <div className="page bgSuperLightBlue">
                <h1 className="darkBlue">Edit your restaurant</h1>
                {dataReq.map((data) =>
                    <form onSubmit={handleSubmit} className="submitForm">
                        <div className="uploadImage">
                            <img src="/Image/iRes1.jpg" className="imgRes" />
                        </div>
                        <TextField
                            name="resDescription"
                            fullWidth
                            variant="outlined"
                            label="Description"
                            placeholder="Description"
                            defaultValue={data.resDescriptionReq}
                            className="bgWhite"
                        />
                        <TextField
                            name="slogan"
                            fullWidth
                            variant="outlined"
                            label="Slogan"
                            placeholder="Enter your slogan"
                            defaultValue={data.sloganReq}
                            className="bgWhite"
                        />
                        <FormControlLabel
                            name="limit"
                            control={<Switch defaultChecked className="darkBlue" />}
                            label="Limit orders per pick-up time"
                        />
                        <FormControlLabel disabled control={<Switch />} label="Receive order notification" className="darkBlue" />
                        <div>
                            <h3 className="darkBlue">Open</h3>
                            <Card>
                                <CardContent >
                                    <div className="selectDate">
                                        <div><ToggleButton selected disabled>OPEN</ToggleButton></div>
                                        <div>
                                            <ToggleButton 
                                                value="SUN" 
                                                selected={selectedSUN}
                                                onChange={() => {
                                                setSelectedSUN(!selectedSUN);
                                            }}>
                                                SUN
                                            </ToggleButton>
                                        </div>
                                        <div>
                                            <ToggleButton 
                                                value="MON" 
                                                selected={selectedMON}
                                                onChange={() => {
                                                setSelectedMON(!selectedMON);
                                            }}>
                                                MON
                                            </ToggleButton>
                                        </div>
                                        <div>
                                            <ToggleButton 
                                                value="TUE" 
                                                selected={selectedTUE}
                                                onChange={() => {
                                                setSelectedTUE(!selectedTUE);
                                            }}>
                                                TUE
                                            </ToggleButton>
                                        </div>
                                        <div>
                                            <ToggleButton 
                                                value="WED" 
                                                selected={selectedWED}
                                                onChange={() => {
                                                setSelectedWED(!selectedWED);
                                            }}>
                                                WED
                                            </ToggleButton>
                                        </div>
                                        <div>
                                            <ToggleButton 
                                                value="THU" 
                                                selected={selectedTHU}
                                                onChange={() => {
                                                setSelectedTHU(!selectedTHU);
                                            }}>
                                                THU
                                            </ToggleButton>
                                        </div>
                                        <div>
                                            <ToggleButton 
                                                value="FRI" 
                                                selected={selectedFRI}
                                                onChange={() => {
                                                setSelectedFRI(!selectedFRI);
                                            }}>
                                                FRI
                                            </ToggleButton>
                                        </div>
                                        <div>
                                            <ToggleButton 
                                                value="SAT" 
                                                selected={selectedSAT}
                                                onChange={() => {
                                                setSelectedSAT(!selectedSAT);
                                            }}>
                                                SAT
                                            </ToggleButton>
                                        </div>
                                        <div><ToggleButton disabled>CLOSED</ToggleButton></div>
                                    </div>
                                    <div className="openingHours">
                                        <div>From<SelectTimeExact /></div>
                                        <div>To<SelectTimeExact /></div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            <h3 className="darkBlue">Tag</h3>
                            <Card>
                                <CardContent className="tags">
                                    <FormControlLabel name="tagThai" control={<Checkbox />} label="Thai" />
                                    <FormControlLabel name="tagWestern" control={<Checkbox />} label="Western" />
                                    <FormControlLabel name="tagJapanese" control={<Checkbox />} label="Japanese" />
                                    <FormControlLabel name="tagKorean" control={<Checkbox />} label="Korean" />
                                    <FormControlLabel name="tagIsarn" control={<Checkbox />} label="Isarn" />
                                    <FormControlLabel name="tagHalal" control={<Checkbox />} label="Halal" />
                                    <FormControlLabel name="tagDrinks" control={<Checkbox />} label="Drinks" />
                                    <FormControlLabel name="tagDessert" control={<Checkbox />} label="Dessert" />
                                </CardContent>
                            </Card>
                        </div>
                        <div>
                            <Button
                                fullWidth
                                variant="contained"
                                className="bgDarkBlue"
                                type="submit"
                            >
                                Save Changes
                            </Button>
                        </div>
                    </form>
                )}
            </div>
        </>
    );
}