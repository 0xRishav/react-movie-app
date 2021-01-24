import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';

class App extends React.Component{
  componentDidMount(){
    const { store } = this.props;

    store.dispatch({
      type: 'ADD_MOVIES',
      movies: data
    });

    store.subscribe(()=>{
      console.log('UPDATED')
      this.forceUpdate();
    });
  }
  render(){
    console.log('REndered');
    const movies = this.props.store.getState();

    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
  
  
          <div className="list">
  
            {movies.map((movie, index)=>{
              return <MovieCard movie={movie} key={index}/>
            })}
  
          </div>
        </div>
      </div>
    );
  }
}

export default App;