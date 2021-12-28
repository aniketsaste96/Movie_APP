import { useState } from "react";
import { useHistory } from "react-router-dom";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";
import * as yup from 'yup';


export function AddMovie() {
    //useHistory to change the URL
    const history = useHistory();
    // const [name, setName] = useState("");
    // const [poster, setPoster] = useState("");
    // const [rating, setRating] = useState("");
    // const [summary, setSummary] = useState("");
    // const [trailer, setTrailer] = useState("");



    //FORM VALIDATION
    const movievalidateSchema = yup.object({
        name: yup.string().required("Please Enter name"),
        poster: yup.string().url().required("Please provide poster url"),
        rating: yup.number().min(0).max(10).required(),
        summary: yup.string().min(20).required("Please type summary"),
        trailer: yup.string().url().required("please provide trailer URL")

    })
    const { values, handleSubmit, handleChange, handleBlur, touched, errors } = useFormik({
        initialValues: {
            name: "",
            poster: "",
            rating: "",
            summary: "",
            trailer: ""

        },
        // validationSchema: formvalidateSchema,
        onSubmit: (newMovie) => {
            console.log(JSON.stringify(newMovie))
            addMovie(newMovie)
        },
        validationSchema: movievalidateSchema

    })







    const addMovie = (newMovie) => {



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


                <Fab type="submit" color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
                {/* here we are removeing coz we need to stop form submition if any errors */}

                {/* <MovieList movies={movieList} setMovieList={setMovieList} /> */}
            </form>}
        </Box>


    );
}
