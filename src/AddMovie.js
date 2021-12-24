import { useState } from "react";
import { useHistory } from "react-router-dom";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export function AddMovie({ movieList, setMovieList }) {

    const [name, setName] = useState("");
    const [poster, setPoster] = useState("");
    const [rating, setRating] = useState("");
    const [summary, setSummary] = useState("");


    //useHistory to change the URL
    const history = useHistory();
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


                <Fab color="primary" aria-label="add"
                    onClick={() => {

                        const newMovie = {
                            name: name,
                            poster: poster,
                            rating: rating,
                            summary: summary
                        };
                        console.log(newMovie);
                        //create a copy of movieList and add newMovie into it
                        setMovieList([...movieList, newMovie]);
                        history.push('./Mymovies');

                    }}>
                    <AddIcon />
                </Fab>
                {/* <MovieList movies={movieList} setMovieList={setMovieList} /> */}
            </div>}
        </Box>


    );
}
