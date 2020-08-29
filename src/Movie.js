import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster, genres }) {
  return (
    <div class = "movie">
      <img src={poster} alt={title} title={title}></img>
    <div class="movie_data">     
    <h3 class = "movie_title">{title}</h3>
    <h5 class = "movie_year">{title}</h5>
    <ul class="genres"> 
    {genres.map((genre,index) => (
    <li key={index} className = "genres_genre">{genre}</li>))}</ul>
    <p class="movie_summary">{summary}</p>
    </div>
    </div>
  
    )
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

//git 사용하기
export default Movie;