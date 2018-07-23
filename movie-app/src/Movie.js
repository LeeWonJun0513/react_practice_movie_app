import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './Movie.css';

function Movie({title,image,genres,synopsis}){

    return (
        <div className="Movie">
            <div className="Movie_Columns">
                <MoviePoster image={image} alt={title}/>
            </div>
            <div className="Movie_columns">
                <h1>{title}</h1>
                <div className="Movie_Genres">
                    {genres.map((genre, index) => <span className="movieGenre" genre={genre} key={index}>{genre}</span>)}
                </div>    
                <p className="Movie_Synopsis">
                    {synopsis}
                </p>

            </div>
        </div>
    );     
}
 
function MoviePoster({image, alt}){
    return (
        <img src={image} alt={alt} title={alt} className="Movie_Poster" />
    )
}

function movieGenre({genre}){
    return (
        <span className="Movie_Genre">{genre}</span>
    )
}
Movie.PropTypes = {
    title : PropTypes.string.isRequired,
    image : PropTypes.string.isRequired,
    genre : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}
MoviePoster.PropTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}

movieGenre.prototype = {
    genre: PropTypes.string.isRequired
}

export default Movie