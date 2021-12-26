import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useState, useEffect } from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Paper, label } from '@mui/material';


export function UpdateMovie() {
    const history = useHistory();
    const [editMovie, setEdit] = useState([]);
    console.log(editMovie);
    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");

    const { id } = useParams();//to get the id
    //how to get the particular movie when clicked 

    //fetch movie by id
    const UpdateMovie = () => {
        const UpMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
        };


        //1.Post
        // 2.Body ->data and json data.
        //3.headers ->you have to say we are passibg json data
        fetch(`https://61c412cff1af4a0017d9927b.mockapi.io/movies/${id}`, {
            method: "PUT",
            body: JSON.stringify(UpMovie
                //     {

                //     name: editMovie.name,
                //     poster: editMovie.poster,
                //     rating: editMovie.rating,
                //     summary: editMovie.summary,
                //     trailer: editMovie.trailer

                // }
            ),
            headers: {
                Accept: "application/json",
                "Content-type": "application/json"
            }
        })
            .then((data) => data.json())
            .then(() => history.push("../Mymovies"));


    }


    let getMovie = () => {
        fetch(`https://61c412cff1af4a0017d9927b.mockapi.io/movies/${id}`, {
            method: "GET"
        }).then((data) => data.json())
            .then((mv) => setEdit(mv));
    }


    useEffect(getMovie, []);
    // var movie = movies[id];
    const handleChange0 = (event) => setName(event.target.value);
    const handleChange1 = (event) => setPoster(event.target.value);
    const handleChange2 = (event) => setRating(event.target.value);
    const handleChange3 = (event) => setSummary(event.target.value);
    const handleChange4 = (event) => setTrailer(event.target.value);

    return (

        //Get the value from URL
        //here use new hook called useParams-get the value from URL and to give it ot componant.
        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <>
                {<div className="add-movie-form">

                    <TextField
                        key={editMovie.name}
                        className="inputfield"
                        fullWidth type="text"
                        defaultValue={editMovie.name}
                        name="name"
                        // value={editMovie.name}
                        onChange={handleChange0}
                        variant="filled" />

                    <TextField
                        key={editMovie.poster}
                        className="inputfield"
                        variant="filled"
                        fullWidth type="text"
                        defaultValue={editMovie.poster}
                        name="poster"
                        // value={editMovie.poster}

                        onChange={handleChange1} />


                    <TextField
                        key={editMovie.rating}
                        className="inputfield"
                        variant="filled"
                        fullWidth type="text"
                        name="rating"
                        defaultValue={editMovie.rating}
                        onChange={handleChange2} />


                    <TextField
                        key={editMovie.summary}
                        className="inputfield"
                        variant="filled"
                        fullWidth type="text"
                        name="summary"
                        defaultValue={editMovie.summary}
                        onChange={handleChange3} />

                    <TextField
                        key={editMovie.trailer}
                        className="inputfield"
                        variant="filled"
                        fullWidth type="text"
                        defaultValue={editMovie.trailer}
                        name="trailer"
                        onChange={handleChange4} />



                    <Button onClick={UpdateMovie} variant="contained" disableElevation>
                        Update
                    </Button>
                    <Button onClick={() => history.push("../Mymovies")} variant="contained" disableElevation>
                        Cancel
                    </Button>

                    {/* <MovieList movies={movieList} setMovieList={setMovieList} /> */}
                </div>}
            </>
        </Box>
    );
}
