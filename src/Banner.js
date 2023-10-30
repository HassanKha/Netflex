import React, { useState, useEffect } from "react";
import "../src/Banner.css";
import axios from "../src/axios";
import requests from "./Request";
import { useSelector } from 'react-redux';
import { selectMovie , setMovie } from './features/movieSlice';
import {  useDispatch } from 'react-redux';

function Banner() {
  //const [movie, setMovie] = useState([]);
 const movie = useSelector(selectMovie)

const dispatch = useDispatch()
 //setMovie(Selectedmovie)
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflexOriginals);
      dispatch(setMovie(request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
      ]))
      // setMovie(
      //   request.data.results[
      //     Math.floor(Math.random() * request.data.results.length - 1)
      //   ]
      // );
      return request;
    }
    fetchData();
  }, []);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  //console.log(movie);
  return (
    <header
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
      className="banner"
    >
      <div className="banner_contents">
        <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
