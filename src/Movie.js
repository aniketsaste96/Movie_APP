import { Link } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import InfoIcon from '@mui/icons-material/Info';
import Card from '@mui/material/Card';
import { Counter } from "./Counter";

export function Movie({ name, poster, rating, summary, deleteButton, id }) {



    //conditional styling
    const style = rating >= 8.5 ? {
        color: 'green'
    } : {
        color: 'red'
    };
    //Conditional styeling
    // const [show, setShow] = useState(true);
    // const description = {display: show ? "block" : "none" }
    const [show, setShow] = useState(true);
    const history = useHistory();

    return (


        <Card elevation={24} className="container">

            <img
                className="movie-poster"
                alt={name}
                src={poster}></img>
            <div className="movie-specs">
                <h3 className="movie-name">{name} </h3> <Link onClick={() => history.push(`/movies/${id}`)}><InfoIcon /></Link>

                <p className="movie-rating" style={style}>⭐<span>{rating}</span> </p>
                <Counter />

            </div>
            <Button onClick={() => setShow(!show)} variant="contained" disableElevation>
                Summary
            </Button>

            <Button variant="outlined" color="error" startIcon={<DeleteIcon />}
                onClick={() => (window.location.reload(false))}
            >
                {deleteButton}
            </Button>


            {/* <q style={description} className="summary">{summary}</q> */}
            {/* {show ? <q className="summary">{summary}</q> : ""} */}

            {/* {conditional rendering} */}
            {show ? <p className="summary">{summary}</p> : ""}

            <div>

            </div>

        </Card>


    );
}
