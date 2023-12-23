import React from "react";

function MovieCard({ poster, status, rating, type, icon1, title }) {
  return (
    <>
      <div>
        <img src={poster} alt="poster" />
        <p>{status}</p>
        <h2>{title}</h2>
        <div>
          <h5>
            <img src={icon1} alt="iconerror" />
            {rating}
          </h5>
        </div>
        <p>{type}</p>
        
      </div>
    </>
  );
}

export default MovieCard;
