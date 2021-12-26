import { useState } from "react";
import { useHistory } from "react-router-dom";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export function AddMovie() {

    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");
    const [trailer, setTrailer] = useState("");


    //useHistory to change the URL
    const history = useHistory();

    const addMovie = () => {
        const newMovie = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer
        };


        //1.Post
        // 2.Body ->data and json data.
        //3.headers ->you have to say we are passibg json data
        fetch("https://61c412cff1af4a0017d9927b.mockapi.io/movies", {
            method: "POST",
            body: JSON.stringify(newMovie),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((data) => data.json())
            .then(() => history.push('./Mymovies'));


    }



    // const [user, setUser] = useState(InitialValues);
    // const [name, poster, ratings, summary] = user;


    return (

        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            {<div className="add-movie-form">
                <TextField
                    className="inputfield"
                    fullWidth label="Enter Movie Name" type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    variant="filled" />

                <TextField
                    className="inputfield"
                    variant="filled"
                    fullWidth label="Enter Poster URL" type="text"
                    value={poster}
                    onChange={(event) => setPoster(event.target.value)} />


                <TextField
                    className="inputfield"
                    variant="filled"
                    fullWidth label="Enter Movie Ratings" type="text"
                    value={rating}
                    onChange={(event) => setRating(event.target.value)} />


                <TextField
                    className="inputfield"
                    variant="filled"
                    fullWidth label="Write Movie Summary" type="text"
                    value={summary}
                    onChange={(event) => setSummary(event.target.value)} />

                <TextField
                    className="inputfield"
                    variant="filled"
                    fullWidth label="trailer URL" type="text"
                    value={trailer}
                    onChange={(event) => setTrailer(event.target.value)} />


                <Fab color="primary" aria-label="add"
                    onClick={addMovie}>
                    <AddIcon />
                </Fab>


                {/* <MovieList movies={movieList} setMovieList={setMovieList} /> */}
            </div>}
        </Box>


    );
}
