import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:4000/movies')
      .then(response => {
        console.log(response.data);
        setMovies(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <div className="flex flex-wrap">
      
      
    
      {movies.map((movie) => (
        <div
          key={movie.id}
          className="max-w-sm rounded overflow-hidden shadow-lg mx-4 my-4"
        >
          <img
            className="w-full h-48 object-cover"
            src={movie.image}
            alt={movie.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{movie.title}</div>
            <p className="text-gray-700 text-base">
              {movie.description}
            </p>
          </div>
          <div className="px-6 py-4">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {movie.genre[0]}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {movie.rating}
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {movie.year}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
