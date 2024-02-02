import React, { useEffect, useState } from "react";
import { Button } from "flowbite-react";
import { useLocation } from "react-router-dom";
import YouTube from "react-youtube";
import {FcLike, FcDownload } from 'react-icons/fc'
import "../src/index.css";

function Movies() {
  const location = useLocation();
  const movie = location.state.movie;
  const api_url =
    "https://api.themoviedb.org/3/movie/now_playing?api_key=4144a92a014be96192b8e79b141493ea";
  const api_key = "4144a92a014be96192b8e79b141493ea";
  const [playing, setPlaying] = useState(false);
  const [trailer, setTrailer] = useState(null);
  const [movies, setMovies] = useState([]);

  const fetchMovie = async (movies) => {
    const movie = fetch(api_url);
    console.log(movie);
    if (movie.videos && movie.videos.results) {
      const trailer = movie.videos.results.find(
        (vid) => vid.name === "Official Trailer"
      );
      setTrailer(trailer ? trailer : movie.videos.results[0]);
    }
    return movie
  };

   const selectedMovie = (id) =>{
      const movie =  fetchMovie(id)
      console.log(movie);
      setMovies(movie);
   }
  const opts = {
    width: "1196",
    height: "520",
  };

  return (
    <div
      style={{
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        marginBottom: "80px"
      }}
    >
      <YouTube
        videoId="0vxOhd4qlnA"
        style={{
          paddingBottom: "30px",
          paddingTop: "80px",
          paddingLeft: "140px",
        }}
        opts={opts}
      />

      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            position: "relative",
            left: "-50px",
          }}
        >
          <h1 className="movie-title">{movie.title}</h1>
          <p className="release_date"> Release date: { movie.release_date}</p>
          <p className="movie_language"> language: {movie.original_language}</p>
        </div>
        <div className=" flex flex-row gap-80
        ">
          <p className="movie_overview">{movie.overview}</p>
          <div className=" mt-5">
            <p className=" flex-row flex gap-3 ratings"> Ratings: <FcLike size={24}/> {Math.round(movie.popularity)}K</p>
            <Button className=" text-white mt-4 " color="failure">
              <FcDownload 
              
              size={28}
              />    DOWNLOAD
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
