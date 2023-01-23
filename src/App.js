import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
import './App.css'
//1-Reach fetch API and convert movies to json format
//2-confirm effect action when movies are called
//3-Get the input values with the handleClick function and send them to the set
//4-render movies


const App = () => {
  //-----------useState und const part
  const [movies, setMovies] = useState([]);
  const [movieTitle, setState] = useState("");
  const key = "b68279fe"
  const api = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${key}`;
  const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) ?? false);

  const style = isDarkMode ? "container-fluid bg-dark text-muted" : "container-fluid bg-light text-muted"

  //----------- useEffect part
  useEffect(() => {
    //-------confirm effect action when movies are called

    // eslint-disable-next-line react-hooks/exhaustive-deps
    localStorage.setItem('movieTitle', JSON.stringify(movieTitle));
  }, [movieTitle]);
  //------------Reach fetch API and convert movies to json format
  const getMovieList = async () => {
    const response = await fetch(api)
    const data = await response.json()

    if (data.Search) {
      setMovies(data.Search)
    }
  };

  console.log(movies)
  //-----------Get the input values with the hadleclick function and send them to the set
  const HandleClickEvent = (e) => {
    e.preventDefault()
    getMovieList()
  };

  const toggleDarkMode = () => {

  }

  //------------render movies
  return (
    <div className={isDarkMode ? "darkMode" : "lightMode"}>
      <h1>Movies</h1>
      <form onSubmit={HandleClickEvent}>
        <input value={movieTitle} onChange={(event) => setState(event.target.value)} placeholder="Enter movie title" />
        <button type="submit">Search</button>
      </form>
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onChange={() => setDarkMode(!isDarkMode)} />
        <label className="form-check-label" for="flexSwitchCheckDefault">Toggle Dark Mode</label>
      </div>
      <div className="container my-3"></div>
      <div className="row justify-content-md-end" style={{ display: "flex", gap: "2rem", width: "100vw" }}>{movies.map((movie, index) => <Movie movie={movie} key={index} />)}</div>
    </div >
  );
};
export default App;
