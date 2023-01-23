import React, { useEffect, useState } from "react";
import Movie from "./components/Movie";
//1-Reach fetch API and convert movies to json format
//2-confirm effect action when movies are called
//3-Get the input values with the handleClick function and send them to the set
//4-render movies


const App = () => {
  //-----------useState und const part
  const [movies, setMovies] = useState([]);
  const [movieTitle, setState] = useState("");
  const api = `https://www.omdbapi.com/?s=${movieTitle}&apikey=${key}`;
  const [isDarkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) ?? false);

  const style = isDarkMode  ? "container-fluid bg-dark text-muted" : "container-fluid bg-light text-muted"

  //----------- useEffect part
  useEffect(() => {
    //-------confirm effect action when movies are called
    getMovieList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  //------------Reach fetch API and convert movies to json format
  const getMovieList = async () => {
    

  };
  //-----------Get the input values with the hadleclick function and send them to the set
  const HandleClickEvent = (e) => {
 
  };

  const toggleDarkMode = () => {
  
  }

  //------------render movies
  return (
    <div className={style} style={{height:"100%",minHeight:"100vh"}}> 
     
    
    </div>
  );
};
export default App;
