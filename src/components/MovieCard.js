import React from 'react';
import { addFavourites, removeFromFavourites } from '../actions/index';

class MovieCard extends React.Component{

    handleFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(addFavourites(movie));
        // console.log(this.props.getState());
    }
    handleUnFavouriteClick = () => {
        const { movie } = this.props;
        this.props.dispatch(removeFromFavourites(movie));
    } 
    render(){
        const { movie, isMovieFavourite } = this.props;
        return(
            <div className="movie-card">
                <div className="left">
                    <img src={movie.Poster} alt="movie-poster"/>
                </div>
                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating">
                            {movie.imdbRating}
                        </div>
                        {
                            isMovieFavourite(movie)?
                            <button className="unfavourite-btn" onClick={this.handleUnFavouriteClick}>Unfavourite</button>:
                            <button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                        }
                        {/* <button 
                        className={isMovieFavourite(movie)? 'unfavourite-btn': 'favourite-btn'}
                        onClick={this.handleFavouriteClick}
                        >{isMovieFavourite(movie)? 'Unfavourite': 'Favourite'}</button> */}
                    </div>
                </div>
            </div>
        );
    }
}

export default MovieCard;