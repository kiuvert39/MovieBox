import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { Link } from "react-router-dom";

function SearchMovie() {
  const [search, setSearch] = useState();
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectMovie, setSelectMovie] = useState({});

  const apiKey = "4144a92a014be96192b8e79b141493ea";

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`
      );

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.results);
      } else {
        console.error("Failed to fetch search results");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <div className="grid lg:grid-cols-4 lg:ml-24 lg:mr-24 mt-16 lg:gap-y-16">
        {searchResults.map((movie) => (
          <Link to={`/movies/${movie.id}`} state={{ movie }}>
            <MovieCard
              key={movie.id}
              poster={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              status={movie.status}
              rating={movie.rating}
              type={movie.type}
              icon1={movie.icon1}
              title={movie.title}
              movie={movie}
              selectMovie={setSelectMovie}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchMovie;
