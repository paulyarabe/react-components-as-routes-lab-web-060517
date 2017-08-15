import React from 'react';
import { actors } from '../data';

let list = actors.map(actor => {
  let movies = actor.movies.map((movie, id)=>{
      return <ul key={id}>{movie}</ul>
    })
  return <div><p>Name: {actor.name} | Movies: </p>{movies}</div>
})


const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      { list }
    </div>
  );
};

export default Actors;
