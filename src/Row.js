import React, { useState, useEffect ,useRef} from "react";
import "../src/Row.css";
import axios from "../src/axios";
import { useSelector, useDispatch } from 'react-redux';

import { selectMovie , setMovie} from './features/movieSlice';

function Row({ title, fetchURL, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  //const movie = useSelector(selectMovie)
  const dispatch = useDispatch()
  const base_url = "https://image.tmdb.org/t/p/original/";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

const ReplaceMovie = (movie) => {
//console.log(movie)
dispatch(setMovie(movie))
}

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie,i) => 
            ((isLargeRow && movie.poster_path) ||
            (!isLargeRow && movie.backdrop_path)) && (
              <img onClick = {()=> ReplaceMovie(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                key={movie.id}
              />
            )
            )}
      </div>
    </div>
  );
}

export default Row;
