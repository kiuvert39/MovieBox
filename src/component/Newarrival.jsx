import React, { useState, useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import MovieCard from "./MovieCard";
import { Button } from "flowbite-react";
import Boxheader from "./box.header";
import { Link } from "react-router-dom";
import Movies from "../movies";
import SearchMovie from "./SearchMovie";

function Newarrival() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectMovie, setSelectMovie] = useState({});
  const movieArray = [];
  let base_image_url = "https://image.tmdb.org/t/p/original";

  const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=4144a92a014be96192b8e79b141493ea&language=en-US&page=${currentPage}`;

  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    setSelectMovie(movies.results[0]);
    setMovies(movies.results);
    const movieId = movies.results.map((movie) => {
      const array = movie.id;
      // console.log(movie.id);
      console.log(array);
      movieArray.push(array);
    });

    window.scrollTo(0, 0);
  };
  console.log(movies);
  console.log(`movie array ${movieArray}`);

  useEffect(() => {
    fetchPopular();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <>
      <SearchMovie />
      <section className=" flex space-x-28 justify-center md:mt-5 items-center md:space-x-5">
        <h2 className="font-sans leading-10 max-w-3xl size-9 pl-2 text-black md:relative -left-1/3 md:text-2xl">
          Featured Movie
        </h2>
        <h4 className="font-sans flex justify-center items-cente text-rose-700 md:relative -right-1/3 md:text-xl">
          <a href="/home">see more</a> <IoIosArrowForward />
        </h4>
      </section>
      <div></div>
      <div className="grid lg:grid-cols-4 lg:ml-24 lg:mr-24 mt-16 lg:gap-y-16">
        {movies.map((movie) => {
          return (
            <div>
             <Link to={`/movies/${movie.id}`} state={{ movie }}>
                <MovieCard
                  key={movie.id}
                  poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  status={movie.stzatus}
                  rating={movie.rating}
                  type={movie.type}
                  icon1={movie.icon1}
                  title={movie.title}
                  movie={movie}
                  selectMovie={setSelectMovie}
                />
              </Link>
            </div>
          );
        })}
        <div className="flex space-x-72 w-full pb-10">
          <Button
            outline
            gradientDuoTone="redToYellow"
            onClick={handlePrevPage}
          >
            previous
          </Button>
          {currentPage}
          <Button
            outline
            onClick={handleNextPage}
            gradientDuoTone="redToYellow"
          >
            Next
          </Button>
        </div>
        {/* <div style={{background: `url(https://image.tmdb.org/t/p/w500${selectMovie.backdrop_path})`}}></div>
        
        <div className="" >
           <Button>play Trailer</Button> 
          {selectMovie.title}
          {selectMovie.overview}
          
        </div> */}
      </div>
    </>
  );
}

export default Newarrival;
