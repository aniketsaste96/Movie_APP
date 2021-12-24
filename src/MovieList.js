import { Movie } from './Movie';
import Button from '@mui/material/Button'
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";



export function MovieList({ movies, setMovieList }) {
    const history = useHistory()
    console.log(movies);

    const deleteMovie = (id) => {

        fetch(`https://61c412cff1af4a0017d9927b.mockapi.io/movies/${id}`, {
            method: 'DELETE',
        })
            .then((data) => data.json())

        // deleteMovie()
    }


    return (

        <div>
            <div>

                <div className="movie-list">
                    {movies.map(({ name, poster, rating, summary, id }, index) => (

                        <Movie
                            ket={index}
                            deleteButton={<p onClick={() => {
                                deleteMovie(id)
                                window.location.reload();
                                // return false;
                                // window.location.href = window.location.href;
                                // setMovieList(movies);
                            }



                                // const deleteIndex = index;
                                // //remove the movie with delete index..
                                // //in other words allow other movies except deleteIndex(index)
                                // const remainingMovies = movies.filter((mv, idx) => deleteIndex !== idx);
                                // console.log(movies, remainingMovies);
                                // setMovieList(remainingMovies);









                            }>Delete</p>}


                            id={index}
                            name={name}
                            poster={poster}
                            rating={rating}
                            summary={summary} />

                    ))}


                </div>


            </div>
        </div>







    );

}
