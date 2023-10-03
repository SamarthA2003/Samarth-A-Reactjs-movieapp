// src/components/MovieDetails.js
import React from 'react';
import './MovieDetails.css';

const MovieDetails = ({ movie }) => {
  return (
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <p>{movie.Plot}</p>
      <p>Released: {movie.Year}</p>
      <p>IMDb Rating: {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetails;
