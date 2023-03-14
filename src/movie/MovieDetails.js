import { useState } from "react";
import * as React from 'react';
import { useParams } from "react-router-dom";
import { useEffect } from 'react';
import { api } from "../api";


export function MovieDetails() {
  let { key } = useParams();
  const [movie, Setmovie] = useState([]);

  useEffect(() => {

    fetch(`${api}/movies/${key}`).then((data) => data.json()).then((val) => Setmovie(val));

  }, []);
  console.log(movie.trailer);

  return (
    <div className="movie-trailer">
      <iframe width="100%" height="400px" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className='movie-desc'>
        <div className='movie-info'>
          <div className='movie-head'>
            <h3 className="movie-title">{movie.name}</h3>
            <p>{movie.rating}🌟</p>
          </div>

          <p>{movie.summary}</p>
        </div>
      </div>
    </div>

  );
}
