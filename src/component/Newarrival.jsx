import React, {useState, useEffect} from "react";
import { IoIosArrowForward } from "react-icons/io";
import MovieCard from "./MovieCard";

function Newarrival() {
  const [movies, setMovies] = useState([])

  useEffect(() =>{
    const fetchdate = async() =>{
      try {
        const response = await fetch('http://localhost:5000/movies');
        const jsonData = await response.json();
        setMovies(jsonData);
      } catch (error) {
        console.error('Error fetching movie data:', error);
      }
    }
    fetchdate();
  },[])
  return (
    <>
      <section className=" flex space-x-28 justify-center md:mt-5 items-center md:space-x-5">
        <h2 className="font-sans leading-10 max-w-3xl size-9 pl-2 text-black md:relative -left-1/3 md:text-2xl">
          Featured Movie
        </h2>
        <h4 className="font-sans flex justify-center items-cente text-rose-700 md:relative -right-1/3 md:text-xl">
          <a href="/home">see more</a> <IoIosArrowForward />
        </h4>
      </section>
      {
        movies.map((movie) =>{
        return <MovieCard
         poster = {movie.poster}
         status= {movie.status}
         rating ={movie.rating}
         type = {movie.type}
         icon1 ={movie.icon1}
         title ={movie.title}         
         />
        })
      }
      
    </>
  );
}

export default Newarrival;
