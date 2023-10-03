// src/components/MovieList.js
import React from 'react';
import './MovieList.css';

const MovieList = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="movie"
          onClick={() => onMovieClick(movie.imdbID)}
        >
          <img src={movie.Poster} alt={movie.Title} />
          <h2>{movie.Title}</h2>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
