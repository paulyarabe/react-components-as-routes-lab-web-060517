import React from 'react';
import { directors } from '../data';

let list = directors.map(director => {
  let movies = director.movies.map((movie, id)=>{
      return <ul key={id}>{movie}</ul>
    })
  return <div><p>Name: {director.name} | Movies: </p>{movies}</div>
})

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      { list }
    </div>
  );
}

export default Directors
