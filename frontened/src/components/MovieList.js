import React from 'react';
import "../App.css"

const MovieList = (props) => {
  return (
    <div>
      {props.movies.map((movie, index) => (
        <div className='card'>
          <span className='title'>{movie.Title}</span> 
           <span className='date'> {movie.Year}</span> 
           <span className='rating'> {movie.Rating}</span>
        </div>
         
      ))}
    </div>
  );
}

export default MovieList;
