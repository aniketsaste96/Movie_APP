
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Button from '@mui/material/Button';
import Badge from '@mui/material/Badge';


import { useState } from "react";

import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
// import AddIcon from '@mui/icons-material/Add';
// import DeleteIcon from '@mui/icons-material/Delete';
// import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
// import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
// import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
// import LaptopIcon from '@mui/icons-material/Laptop';
// import TvIcon from '@mui/icons-material/Tv';
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// import ToggleButton from '@mui/material/ToggleButton';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import FolderIcon from '@mui/icons-material/Folder';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// import Navbar from './componants/Navbar.js'

// import Badge from '@mui/material/Badge';




















function App() {
  return (

    <Router>
      <Navbar />
      <div className="App">
        <div>
          {/* <ul>
            <li>
              <a href="/about">About with anchor</a>
            </li>

            <li>
              <Link to="/MyMovies">MyMovies</Link>
            </li>
            <li>
              <Link to="/AddColor">AddColor</Link>
            </li>
            <li>
              <Link to="/Home">Home</Link>
            </li>
            <li>
              <a href="/about" >Go to about</a>
            </li>
          </ul>

          <hr /> */}

          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route path="/AddColor">
              <AddColor />
            </Route>
            <Route path="/Home">
              <Home />

            </Route>
            <Route path="/MyMovies">
              <MyMovies />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}




function Home() {
  return (
    <div id="home">
      <h1>Welcome To My Movie App!!!</h1>
    </div>
  );
}

function AddColor() {
  const [color, setColor] = useState("orange")
  const style = { background: color };
  const [colorList, setColorList] = useState(["teal", "crimson", "orange"])
  return (
    <div>
      <input
        id="colorinput"
        value={color}
        onChange={event => setColor(event.target.value)} style={style} placeholder="Enter Color" />

      {/* { Creat copy of colorList and the new color to it } */}
      {<button onClick={() => setColorList([...colorList, color])} id="addbutton">Add Color</button>}
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
  }
  return <div id="addcolor" style={style}></div>

}


function MyMovies() {
  const url = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2luZW1hfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
  const style = {
    backgroundImage: `${url}`
  }
  const movies = [
    {
      name: "The Social Network",
      poster: "https://ogden_images.s3.amazonaws.com/www.lockhaven.com/images/2021/05/19143504/social-network-592x840.jpg",
      rating: 8.2,
      summary: "Mark Zuckerberg creates a social networking site, Facebook, with his friend Eduardo's help. Though it turns out to be a successful venture, he severs ties with several people along the way."
    },
    {
      name: "Apollo 13",
      poster: "https://m.media-amazon.com/images/M/MV5BNjEzYjJmNzgtNDkwNy00MTQ4LTlmMWMtNzA4YjE2NjI0ZDg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
      rating: 8.7,
      summary: "Apollo 13 was the seventh crewed mission in the Apollo space program and the third meant to land on the Moon. The craft was launched from Kennedy Space Center on April 11, 1970, but the lunar landing was aborted after an oxygen tank in the service module failed two days into the mission."
    },
    {
      name: "Fury",
      poster: "https://m.media-amazon.com/images/M/MV5BMjA4MDU0NTUyN15BMl5BanBnXkFtZTgwMzQxMzY4MjE@._V1_.jpg",
      rating: 8.8,
      summary: "Wardaddy, along with his crew of five members, embarks on a mission that puts many lives in danger. The crew members realise that the odds are against them, but still decide to attack the Nazi army."
    },
    {
      name: "The Pursuit of Happyness",
      poster: "https://images-na.ssl-images-amazon.com/images/P/B000N6U0E2.jpg",
      rating: 9.6,
      summary: "Tired of Chris's professional failures, his wife decides to separate, leaving him financially broke with an unpaid internship in a brokerage firm and his son's custody to deal with."
    },
    {
      name: "1917",
      poster: "https://movieposters2.com/images/1706798-b.jpg",
      rating: 9.4,
      summary: "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush."
    },


    {
      name: "Battle Ship",
      poster: "https://i.ytimg.com/an/nCqDdsZY7RA/13955749347178297462_mq.jpg?v=5f49aa10",
      rating: 8.7,
      summary: "An international fleet of ships encounter an alien armada and discover their destructive goals. To defeat their enemies, they are forced to fight an intense battle on sea, land and air."
    },
    {
      name: "Free Guy",
      poster: "https://www.filmibeat.com/img/320x100x392/popcorn/trending_news/ryan-reynolds-free-guy-5723-20211028191646.jpg",
      rating: 8.9,
      summary: "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him."
    },
    {
      name: "Iron man 2",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
      rating: 7,
      summary:
        "With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy."
    },
    {
      name: "No CountryOld Men",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
      rating: 8.1,
      summary:
        "A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money."
    },
    {
      name: "Jai Bhim",
      poster:
        "https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
      summary:
        "A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
      rating: 8.8
    },
    {
      name: "The Avengers",
      rating: 8,
      summary: `Marvel's The Avengers (classified under the name Marvel Avengers
  Assemble in the United Kingdom and Ireland), or simply The Avengers, is
  a 2012 American superhero film based on the Marvel Comics superhero team
  of the same name.`,
      poster:
        "https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg"
    },
    {
      name: "Interstellar",
      poster: "https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
      rating: 8.6,
      summary: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA
pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team
of researchers, to find a new planet for humans.`
    },
    {
      name: "Baahubali",
      poster: "https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
      rating: 8,
      summary: `In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.`
    },
    {
      name: "Ratatouille",
      poster:
        "https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
      rating: 8,
      summary: `Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.`
    },

    {
      name: 96,
      poster:
        "https://a10.gaanacdn.com/gn_img/albums/9En3peWXDV/En3pYMLPWX/size_xxl_1535086576.webp",
      rating: 8.6,
      summary: `K Ramachandran, a photographer, gets nostalgic after he visits his school in his hometown. During a reunion with his classmates, he meets Janaki, his childhood sweetheart.`
    },

    {
      name: "M.S. Dhoni: The Untold Story",
      poster: "https://m.media-amazon.com/images/I/71miTEyKvYL._SL1112_.jpg",
      rating: 7.9,
      summary: `M S Dhoni, a boy from Ranchi, aspires to play cricket for India. Though he initially tries to please his father by working for the Indian Railways, he ultimately decides to chase his dreams.`
    },
    {
      name: "Dark Knight",
      poster:
        "https://i.pinimg.com/originals/0f/a9/af/0fa9afc141f0096e064a5ab1854b36f1.jpg",
      rating: 9,
      summary:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice."
    },
    {
      name: "King Kong",
      poster: "https://m.media-amazon.com/images/I/817FBcXLN2L._SL1500_.jpg",
      rating: 9,
      summary:
        "Peter Jackson's expansive remake of the 1933 classic follows director Carl Denham (Jack Black) and his crew on a journey from New York City to the ominous Skull Island to film a new movie. Accompanying him are playwright Jack Driscoll (Adrien Brody) and actress Ann Darrow (Naomi Watts), who is whisked away by the monstrous ape, Kong, after they reach the island. The crew encounters dinosaurs and other creatures as they race to rescue Ann, while the actress forms a bond with her simian captor."
    }
  ];
  //same way we done it in color with
  //const [colorList,setColorList]=useState(["red","blue","green"])
  const [movieList, setMovieList] = useState(movies);
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");



  return (


    <div className="App" id="App" >


      {/* <div className="toggle">
          <ToggleButton value="laptop" aria-label="laptop">
              <LaptopIcon />
          </ToggleButton>
          <ToggleButton value="tv" aria-label="tv">
              <TvIcon />
          </ToggleButton>
          <ToggleButton value="phone" aria-label="phone">
              <PhoneAndroidIcon />
          </ToggleButton>
      </div> */}
      {/* <Welcome /> */}
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
            onChange={(event) => setPoster(event.target.value)}
          />


          <TextField
            className="inputfield"
            variant="filled"
            fullWidth label="Enter Movie Ratings" type="text"
            value={rating}
            onChange={(event) => setRating(event.target.value)}
          />


          <TextField
            className="inputfield"
            variant="filled"
            fullWidth label="Write Movie Summary" type="text"
            value={summary}
            onChange={(event) => setSummary(event.target.value)}
          />


          <Fab color="primary" aria-label="add"
            onClick={() => {

              const newMovie = {
                name: name,
                poster: poster,
                rating: rating,
                summary: summary
              }
              console.log(newMovie)
              //create a copy of movieList and add newMovie into it
              setMovieList([...movieList, newMovie])

            }}>
            <AddIcon />
          </Fab>


        </div>}
      </Box>
      <MovieList movies={movieList} setMovieList={setMovieList} />




    </div >
  );

}

function Movie({ name, poster, rating, summary, deleteButton }) {
  //conditional styling
  const style = rating >= 8.5 ? {
    color: 'green'
  } : {
    color: 'red'
  };
  //Conditional styeling
  // const [show, setShow] = useState(true);
  // const description = { display: show ? "block" : "none" }
  const [show, setShow] = useState(true);
  return (


    <div className="container">

      <img
        className="movie-poster"
        alt={name}
        src={poster}></img>
      <div className="movie-specs">
        <h3 className="movie-name">{name}</h3>
        <p className="movie-rating" style={style}>⭐<span>{rating}</span> </p>
        <Counter />
      </div>
      <Button onClick={() => setShow(!show)} variant="contained" disableElevation>
        Summary
      </Button>

      <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
        {deleteButton}
      </Button>

      {/* <q style={description} className="summary">{summary}</q> */}
      {/* {show ? <q className="summary">{summary}</q> : ""} */}

      {/* {conditional rendering} */}
      {show ? <p className="summary">{summary}</p> : ""}

      <div>

      </div>

    </div>


  );
}





function MovieList({ movies, setMovieList }) {
  return (
    <div className="movie-list">
      {movies.map(({ name, poster, rating, summary }, index) => (

        < Movie deleteButton={

          <p onClick={() => {

            const deleteIndex = index;
            //remove the move with delete index..
            //in other words allow other movies except deleteIndex(index)
            const remainingMovies = movies.filter((mv, idx) => deleteIndex !== idx)
            console.log(movies, remainingMovies)
            setMovieList(remainingMovies);
          }}>Delete</p>}
          name={name}
          poster={poster}
          rating={rating}
          summary={summary} />

      ))}


    </div >
  );
}



function Counter() {
  const [like, setLike] = useState(0);
  const [dislike, setDisLike] = useState(0);
  const incremnetLike = () => { setLike(like + 1); }
  const decremnetLike = () => { setDisLike(dislike + 1); }
  return (
    <div className="Badge">

      <Button onClick={incremnetLike}>

        <Badge badgeContent={like} color="primary"
          size="large">
          <i class="fas fa-thumbs-up"></i>
        </Badge>
      </Button>



      <Button onClick={decremnetLike} color="error">
        <Badge size="large" color="error" variant="outlined" badgeContent={dislike} color="error">
          <i class="fas fa-thumbs-down"></i>
        </Badge>
      </Button>

    </div>
  );

}




function Navbar({ MyMovies, Home, AddColor }) {
  return (
    <nav className="navbar navbar-expand-lg py-5 navbar-dark bg-dark fs-5">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Home">Movie App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/MyMovies">My Movies</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/AddColor">Color Game</Link >
            </li>
          </ul>

        </div>
      </div>
    </nav>
  )
}



export default App;
