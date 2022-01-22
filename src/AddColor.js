import { useState } from "react";
import Button from '@mui/material/Button';


export function AddColor() {
    const [color, setColor] = useState("orange");
    const style = { background: color };
    const [colorList, setColorList] = useState([]);
    return (
        <div>
            <input
                id="colorinput"
                value={color}
                onChange={event => setColor(event.target.value)} style={style} placeholder="Enter Color" />

            {/* { Creat copy of colorList and the new color to it } */}
            {<Button variant="contained" onClick={() => setColorList([...colorList, color])} id="addbutton">Add Color</Button>}
            {colorList.map((clr) => (
                <ColorBox clr={clr} />
            ))}

        </div>);
}
function ColorBox({ clr }) {
    const style = {
        height: "25px",
        width: "250px",
        background: clr,
        marginTop: "10px"
    };
    return <div id="addcolor" style={style}></div>;

}
