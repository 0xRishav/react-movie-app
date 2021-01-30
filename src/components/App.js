import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import { addMovies, setShowFavourites } from '../actions/index';

class App extends React.Component{
  componentDidMount(){
    const { store } = this.props;

    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));
  }

  isMovieFavourite = (movie) =>{
    
    const { movies } = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);
    if(index!==-1){
      return true;
    }
    return false;
  }

  handleMovieClick = () => {
    this.props.store.dispatch(setShowFavourites(false));
  }

  handleFavouritesClick = () => {
    this.props.store.dispatch(setShowFavourites(true));
  }

  render(){
    // console.log('REndered');
    console.log(this.props.store.getState());
    const { movies, search } = this.props.store.getState();
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites? favourites : list;


    return (
      <div className="App">
        <Navbar
        dispatch = {this.props.store.dispatch}
        getState = {this.props.store.getState}
        search = {search}
        />
        <div className="main">
          <div className="tabs">
            <div className= {`tab ${showFavourites? '' : 'active-tabs'}`} onClick={this.handleMovieClick}>Movies</div>
            <div className={`tab ${showFavourites? 'active-tabs' : ''}`} onClick={this.handleFavouritesClick}>Favourites</div>
          </div>
  
  
          <div className="list">

  
            {displayMovies.map((movie, index)=>{
              return <MovieCard 
                      movie={movie} 
                      key={index} dispatch = {this.props.store.dispatch} 
                      getState = {this.props.store.getState}
                      isMovieFavourite = {this.isMovieFavourite}
                      />
            })}
          </div>
          {displayMovies.length === 0? <div className = "no-movies">No movies to display!</div> : null}
          
        </div>
        
      </div>
    );
  }
}

export default App;