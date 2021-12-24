import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export function MovieDetails({ movies }) {
    const history = useHistory();
    const { id } = useParams();
    //how to get the particular movie when clicked 
    const movie = movies[id];
    console.log(movie);
    return (

        //Get the value from URL
        //here use new hook called useParams-get the value from URL and to give it ot componant.
        <div className="details-movie">
            <h1>🎥{movie.name}</h1>
            {<iframe
                width="80%" height="500"
                src={movie.trailer}
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>}

            <h3>Ratings 💕{movie.rating}</h3>
            <h3><i>{movie.summary}</i></h3>
            <Button onClick={() => history.goBack('./MyMovies')} variant="contained" disableElevation>

                <ArrowBackIosNewIcon />Go Back
            </Button>


        </div>
    );
}
