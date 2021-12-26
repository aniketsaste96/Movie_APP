import { Movie } from './Movie';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';




export function MovieList() {


    const [movies, setMovieList] = useState([]);

    // function refresh() {
    //     setTimeout(function () {
    //         location.reload()
    //     }, 100);
    // }

    //Remounted when route is changed hence useEffect is triggered

    //delete and refresh the list
    const getMovies = () => fetch("https://61c412cff1af4a0017d9927b.mockapi.io/movies", {
        method: 'GET'
    })
        .then((data) => data.json())
        .then((mvs) => setMovieList(mvs))


    const deleteMovie = (id) => {

        fetch(`https://61c412cff1af4a0017d9927b.mockapi.io/movies/${id}`, {
            method: 'DELETE',
        })
            .then((data) => data.json())
            .then(() => getMovies());
        //Race condition who is called first and later we must ensure that race condition should not happen
        //when deleted you have to refresh the list. 
    }
    useEffect(getMovies, [])

    return (
        <div>
            <div>
                <div className="movie-list">
                    {
                        movies.map(({ name, poster, rating, summary, id, trailer }, index) => (
                            <Movie
                                key={id}
                                deleteButton={<Button variant="outlined" color="error" onClick={() => { deleteMovie(id) }}> Delete</Button>}
                                id={id}
                                name={name}
                                poster={poster}
                                rating={rating}
                                summary={summary}
                                trailer={trailer} />
                        ))}
                </div>
            </div>
        </div>

    );

}

                                // const deleteIndex = index;
                                // //remove the movie with delete index..
                                // //in other words allow other movies except deleteIndex(index)
                                // const remainingMovies = movies.filter((mv, idx) => deleteIndex !== idx);
                                // console.log(movies, remainingMovies);
                                // setMovieList(remainingMovies);