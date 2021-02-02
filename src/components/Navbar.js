import React from "react";
// import {connect} from '../index';
import {connect} from 'react-redux';
// import {connect} from 'react-redux';
// import { data } from '../data';
// import {search} from '../reducers/index';

import { addMovieToList, handleMovieSearch } from '../actions';

class Navbar extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            searchText: ''
        }
    }
    handleAddToMovies = (movie) =>
    {
        const { dispatch } = this.props;
        dispatch(addMovieToList(movie));
        this.setState({
            showSearchResults: false
        })
    }
    
    handleChange = (e) => {
        this.setState({
            searchText: e.target.value
        })
    };

    handleSearch = () =>{
        const { searchText } = this.state;
        const { dispatch } = this.props;
        dispatch(handleMovieSearch(searchText));
    }

    // handleSearch = () =>
    // {
    //     const { searchText } = this.state;
    //     this.props.dispatch(handleMovieSearch(searchText));
    // }

    // handleChange = (event) =>
    // {
    //     this.setState({
    //         searchText: event.target.value
    //     });
    // }

    render()
    {
        const { result: movie, showSearchResults } = this.props.search;
        console.log('result', movie);
        return (
            <div className="nav">
                <div className="search-container">
                    <input onChange = {this.handleChange} />
                    <button id="search-btn" onClick={this.handleSearch}>Search</button>

                    {
                        showSearchResults &&
                            <div className="search-results">
                            <div className="search-result">
                                <img src={movie.Poster} alt="search-pic" />
                                <div className="movie-info">
                                    <span>
                                        {movie.Title}
                                    </span>
                                    <button onClick={() => this.handleAddToMovies(movie)}>
                                        Add to Movies
                                    </button>
                                </div>
                            </div>
                        </div>
                    }

                </div>
            </div>
        );
    }
}


// class NavWrapper extends React.Component{
//     render(){
//         return(
//             <StoreContext.Consumer>
//                 {(store)=> <Navbar dispatch = {store.dispatch} getState = {store.getState} search = {this.props.search}/>}
//             </StoreContext.Consumer>
//         );
//     }
// }

function mapStateToProps(state){
    return {
        search: state.search
    }
}

const ConnectedNavbar = connect(mapStateToProps)(Navbar)

export default ConnectedNavbar;