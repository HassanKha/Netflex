import React from "react";
import "../screens/HomeScreen.css";
import Nav from "../Nav";
import Banner from "../Banner";
import Row from "./../Row"
import requests from "../Request";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Nav />

      <Banner />

      <Row
        title="NETFLEX ORIGINALS"
        fetchURL={requests.fetchNetflexOriginals}
        isLargeRow
      />
      <Row
      title="Trending"
      fetchURL={requests.fetchTrending}
      />
      <Row 
      title="Top Rated"
      fetchURL={requests.fetchTopRated}
      />
      <Row
      title="Action Movies"
      fetchURL={requests.fetchActionMovies}
      />
      <Row 
      title="Comedy Movies"
      fetchURL={requests.fetchComedyMovies}
      />
      <Row
      title="Horror Movies"
      fetchURL={requests.fetchHorrorMovies}
      />
    </div>
  );
}

export default HomeScreen;
