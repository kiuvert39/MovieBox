import React from "react";


function MovieCard({
  poster,
  status,
  rating,
  type,
  icon1,
  title,
  selectMovie,
  movie,
}) {
  return (
    <>
      <div
        className="m-1 card font-sans md:max-w-xs w-68  "
        onClick={() => selectMovie(movie)}
      >
        <img src={poster} alt="poster" className=" md:w-80 w-56 " />
        <p className="font-sans leading-4 text-gray-400 text-ms pt-2">
          {status}
        </p>
        <h2 className="font-sans leading-6 text-lg text-gray-900 w-64 pt-2 max-w-6 ">
          {title}
        </h2>
        <div className="flex space-x-52 md:space-x-40 pt-3 text-gray-900 flex-row font-sans md:max-w-xl">
          <h5 className="font-sans text-xs leading-3">
            <img src={icon1} alt="iconerror" />
          </h5>
          <p className="font-sans text-xs leading-3">{rating}</p>
        </div>
        <p className="font-sans text-gray-400 text-sm leading-4 pt-2 pb-2 ">
          {type}
        </p>
      </div>
    </>
  );
}

export default MovieCard;
