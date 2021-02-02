import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import { addMovies, setShowFavourites } from '../actions/index';
import {StoreContext} from '../index';
import {connect} from 'react-redux';






class App extends React.Component{
  componentDidMount(){
    const { dispatch } = this.props;

    // store.subscribe(()=>{
    //   console.log('UPDATED');
    //   this.forceUpdate();
    // });

    dispatch(addMovies(data));
    console.log('app component mounted');
  }

  isMovieFavourite = (movie) =>{
    
    const { movies } = this.props;

    const index = movies.favourites.indexOf(movie);
    if(index!==-1){
      return true;
    }
    return false;
  }

  handleMovieClick = () => {
    this.props.dispatch(setShowFavourites(false));
  }

  handleFavouritesClick = () => {
    this.props.dispatch(setShowFavourites(true));
  }

  render(){
    // console.log(this.props.getState());
    const { movies, search } = this.props;
    const { list, favourites, showFavourites } = movies;
    const displayMovies = showFavourites? favourites : list;

    return (
      <div className="App">
        <Navbar search = {search} />
        <div className="main">
          <div className="tabs">
            <div className= {`tab ${showFavourites? '' : 'active-tabs'}`} onClick={this.handleMovieClick}>Movies</div>
            <div className={`tab ${showFavourites? 'active-tabs' : ''}`} onClick={this.handleFavouritesClick}>Favourites</div>
          </div>
  
  
          <div className="list">

  
            {displayMovies.map((movie, index)=>{
              return <MovieCard 
                      movie={movie} 
                      key={index} dispatch = {this.props.dispatch} 
                      getState = {this.props.getState}
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

// class AppWrapper extends React.Component{
//   componentDidMount(){
//     console.log('wrapper mounted');
//   }
//   render(){
    
//     return(
//       <StoreContext.Consumer>
//         {(store)=><App store = {store}/>}
//       </StoreContext.Consumer>
//     );
//   }
// }

function callback(state){
  return{
    movies: state.movies,
    search: state.search
  }
};

const connectedAppComponent = connect(callback)(App);

export default connectedAppComponent;