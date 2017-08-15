import React from 'react';
import { movies } from '../data';

let list = movies.map(movie => {
  let genres = movie.genres.map((genre, id)=>{
      return <ul key={id}>{genre}</ul>
    })
  return <div><p>Title: {movie.title} | Run Time: {movie.time} | Genres: </p>{genres}</div>
})

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      { list }
    </div>
  );
};

export default Movies;
