
import { useState } from "react";
import { useHistory } from "react-router-dom";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';

export function EditMovie() {
    const history = useHistory();
    const [movie, setMovie] = useState(null);

    const { id } = useParams();//to get the id
    //how to get the particular movie when clicked 

    //fetch movie by id
    let getMovie = () => {
        fetch(`https://61c412cff1af4a0017d9927b.mockapi.io/movies/${id}`, {
            method: "GET"
        }).then((data) => data.json())
            .then((mv) => setMovie(mv));
    }
    useEffect(getMovie, []);

    //Logic to avoid race condition
    return movie ? <UpdateMovie movie={movie} /> : "";
}


//race is between update movie (form) and GET movie details
//Update movie form is winning
function UpdateMovie({ movie }) {
    console.log("Update", movie, movie.name)

    // const [name, setName] = useState(movie.name);
    // const [poster, setPoster] = useState(movie.poster);
    // const [rating, setRating] = useState(movie.rating);
    // const [summary, setSummary] = useState(movie.summary);
    // const [trailer, setTrailer] = useState(movie.trailer);


    //useHistory to change the URL
    const history = useHistory();
    const validationSchema = yup.object({
        name: yup.string().required("Please Enter name"),
        poster: yup.string().url().required("Please provide poster url"),
        rating: yup.number().required("Please give rating"),
        summary: yup.string().required("Please type summary"),
        trailer: yup.string().url().required("please provide trailer URL")

    })
    const { values, handleSubmit, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: movie,
        // validationSchema: formvalidateSchema,
        onSubmit: (EditMovie) => {
            console.log(JSON.stringify(EditMovie))
            editMovie(EditMovie)
        },
        validationSchema: validationSchema

    })

    const editMovie = (EditMovie) => {
        // const UpdatedMovie = {
        //     name: name,
        //     poster: poster,
        //     rating: rating,
        //     summary: summary,
        //     trailer: trailer
        // };


        //1.PUT
        // 2.Body ->data and json data.
        //3.headers ->you have to say we are passibg json data
        fetch(`https://61c412cff1af4a0017d9927b.mockapi.io/movies/${movie.id}`, {
            method: "PUT",
            body: JSON.stringify(EditMovie),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then((data) => data.json())
            .then(() => history.push('./Mymovies'));


    }







    return (

        <Box sx={{ '& > :not(style)': { m: 1 } }}>
            {<form className="add-movie-form" onSubmit={handleSubmit}>
                <TextField
                    id="name"
                    name="name"
                    className="inputfield"
                    fullWidth label="Enter Movie Name" type="text"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.name && errors.name ? errors.name : ""}
                    helperText={touched.name && errors.name ? errors.name : ""}

                    variant="filled" />
                {touched.name && errors.name ? errors.name : ""}

                <TextField
                    id="poster"
                    name="poster"
                    className="inputfield"
                    variant="filled"
                    fullWidth label="Enter Poster URL" type="text"
                    value={values.poster}
                    onChange={handleChange}
                    error={touched.poster && errors.poster}
                    helperText={touched.poster && errors.poster ? errors.poster : ""}

                    onBlur={handleBlur} />
                {touched.poster && errors.poster ? errors.poster : ""}


                <TextField
                    id="rating"
                    name="rating"
                    className="inputfield"
                    variant="filled"
                    fullWidth label="Enter Movie Ratings" type="text"
                    value={values.rating}
                    onChange={handleChange}
                    error={touched.rating && errors.rating}
                    helperText={touched.rating && errors.rating ? errors.rating : ""}
                    onBlur={handleBlur} />
                {touched.rating && errors.rating ? errors.rating : ""}


                <TextField
                    id="summary"
                    name="summary"
                    className="inputfield"
                    variant="filled"
                    fullWidth label="Write Movie Summary" type="text"
                    value={values.summary}
                    onChange={handleChange}
                    error={touched.summary && errors.summary}
                    helperText={touched.summary && errors.summary ? errors.summary : ""}
                    onBlur={handleBlur} />
                {touched.summary && errors.summary ? errors.summary : ""}

                <TextField
                    id="trailer"
                    name="trailer"
                    className="inputfield"
                    variant="filled"
                    fullWidth label="trailer URL" type="text"
                    value={values.trailer}
                    onChange={handleChange}
                    error={touched.trailer && errors.trailer}
                    helperText={touched.trailer && errors.trailer ? errors.trailer : ""}
                    onBlur={handleBlur} />
                {touched.trailer && errors.trailer ? errors.trailer : ""}
                {/* 

                <Fab color="primary" aria-label="add"
                    onClick={addMovie}>
                    <AddIcon />
                </Fab> */}

                <Button type="submit" variant="contained" disableElevation>
                    Update
                </Button>
                <Button onClick={() => history.push("/Mymovies")} variant="contained" disableElevation>
                    Back to Movies
                </Button>



                {/* <MovieList movies={movieList} setMovieList={setMovieList} /> */}
            </form>}


        </Box>


    );
}


//CRUD completed now you can build any app in world