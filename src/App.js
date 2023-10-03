// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieDetails from './components/MovieDetails';

const API_KEY = 'bd34b97d'; // Replace with your actual API key

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    // Fetch initial movie list (e.g., popular movies)
    fetch(`https://www.omdbapi.com/?s=popular&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  }, []);

  const searchMovies = (query) => {
    fetch(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        }
      });
  };

  const selectMovie = (imdbID) => {
    fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedMovie(data);
      });
  };

  return (
    <div className="App">
      <Header />
      <SearchBar onSearch={searchMovies} />
      <div className="content">
        <MovieList movies={movies} onMovieClick={selectMovie} />
        {selectedMovie && <MovieDetails movie={selectedMovie} />}
      </div>
    </div>
  );
}

export default App;
