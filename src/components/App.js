import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';
import { addMovies } from '../actions/index';

class App extends React.Component{
  componentDidMount(){
    const { store } = this.props;

    store.subscribe(()=>{
      console.log('UPDATED');
      this.forceUpdate();
    });

    store.dispatch(addMovies(data));
  }
  render(){
    // console.log('REndered');
    const { list } = this.props.store.getState();

    return (
      <div className="App">
        <Navbar/>
        <div className="main">
          <div className="tabs">
            <div className="tab">Movies</div>
            <div className="tab">Favourites</div>
          </div>
  
  
          <div className="list">
  
            {list.map((movie, index)=>{
              return <MovieCard movie={movie} key={index}/>
            })}
  
          </div>
        </div>
      </div>
    );
  }
}

export default App;