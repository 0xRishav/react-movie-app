import React from 'react';
import Navbar from './Navbar';
import MovieCard from './MovieCard';
import {data} from '../data';

function App() {
  // console.log(data);


  // const newMovie = {
  //   Title: 'The Avengers',
  //   Poster: 'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  //   imdbRating: '8.0',
  //   Plot:
  //     "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."
  // }


  return (
    <div className="App">
      <Navbar/>
      <div className="main">
        <div className="tabs">
          <div className="tab">Movies</div>
          <div className="tab">Favourites</div>
        </div>



        {/* <MovieCard movie = {newMovie}/>
        <MovieCard movie = {newMovie}/>
        <MovieCard movie = {newMovie}/> */}




        <div className="list">

          {data.map((movie)=>{
            return <MovieCard movie={movie}/>
          })}

        </div>
      </div>
    </div>
  );
}

export default App;