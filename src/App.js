
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab'
// import WestIcon from '@mui/icons-material/West';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
// import { styled } from '@mui/system';
import { createMuiTheme, ThemeProvider } from '@mui/material/styles';
import { Paper, label } from '@mui/material';
import { createTheme } from '@mui/material/styles'
// import { dark } from '@mui/material/colors';
import MaterialSwitch from '@mui/material/Switch';
// import MaterialUISwitch from '@mui/material/Switch';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
// import Stack from '@mui/material/Stack';
import { TicTacToe } from './TicTacToe';
import { MovieDetails } from './MovieDetails';
import { NotFound } from './NotFound';
import { AddColor } from './AddColor';
import { AddMovie } from './AddMovie';
import { MovieList } from './MovieList';
import { Home } from './Home';
import { EditMovie } from './UpdateMovie.js'
import { BasicForm } from './BasicForm';


function App() {
    const history = useHistory()
    const [darkMode, setDarkMode] = useState(false)
    const [movieList, setMovieList] = useState([]);

    const darkTheme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',

        },
    });
    //[] empty dependency array because we want only once.
    // C -create- POST
    // R  -Read - GET  check
    // U  -Update -PUT
    // D -Delete-Delete

    return (

        <ThemeProvider theme={darkTheme} >
            {/* <Navbar /> */}
            <Paper square variant="outlined" style={{ minHeight: '100vh' }} >
                <div className="App">
                    <AppBar position="static">
                        <Toolbar >
                            <MenuItem color="inherit" onClick={() => history.push('/Home')}>Home</MenuItem>
                            <MenuItem color="inherit" onClick={() => history.push('/MyMovies')}>MyMovies</MenuItem>
                            <MenuItem color="inherit" onClick={() => history.push('/AddColor')}>AddColor</MenuItem>
                            <MenuItem color="inherit" onClick={() => history.push('/AddMovie')}>Add Movie</MenuItem>
                            <MenuItem color="inherit" onClick={() => history.push('/tic-tac-toe')}>Tic-Tac-Toe</MenuItem>
                            <MenuItem style={{ marginLeft: 'auto' }}> <MaterialSwitch Checked={darkMode} onChange={() => setDarkMode(!darkMode)} /></MenuItem>

                        </Toolbar>
                    </AppBar>

                    <div>

                        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                        <Switch>
                            <Route exact path="/">
                                <Home />
                            </Route>
                            <Route path="/AddColor">
                                <AddColor />
                            </Route>
                            <Route path="/Home">
                                <Home />
                            </Route>
                            <Route path="/MyMovies">
                                <MovieList />
                            </Route>
                            <Route path="/movies/:id">
                                <MovieDetails />
                            </Route>
                            <Route path="/AddMovie">
                                <AddMovie />
                            </Route>
                            <Route path="/tic-tac-toe">
                                <TicTacToe />
                            </Route>
                            <Route path="/movie/edit/:id">
                                <EditMovie />
                            </Route>
                            <Route path="/basicform">
                                <BasicForm />
                            </Route>

                            <Route path="**">
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Paper>
        </ThemeProvider >

    );
}



export default App;
