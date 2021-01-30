// {
//     type: 'ADD_MOVIES',
//     movies: []
// }

//Action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_TO_FAVOURITES = 'ADD_TO_FAVOURITES';
export const ADD_TO_MOVIES = 'ADD_TO_MOVIES';

export const REMOVE_FROM_FAVOURITES = 'REMOVE_FROM_FAVOURITES';
export const SHOW_FAVOURITES = 'SHOW_FAVOURITES';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';


//Action creators
export function addMovies(movies){
    return {
        type: ADD_MOVIES,
        movies
    }
}

export function addMovieToList(movie){
    return{
        type: ADD_TO_MOVIES,
        movie
    }
}


export function addFavourites(movie){
    return {
        type: ADD_TO_FAVOURITES,
        movie
    }
}

export function removeFromFavourites(movie){
    return{
        type: REMOVE_FROM_FAVOURITES,
        movie
    }
}

export function setShowFavourites(val){
    return{
        type: SHOW_FAVOURITES,
        val
    }
}


export function handleMovieSearch(movie){
    const url = `http://www.omdbapi.com/?apikey=fac1eadb&t=${movie}`;
    return function(dispatch){
        fetch(url)
        .then(response => response.json())
        .then(movie=>{
            console.log(movie);
            dispatch(addMovieSearchResult(movie));
        });
    };
};

export function addMovieSearchResult(movie){
    return {
        type: ADD_SEARCH_RESULT,
        movie
    }
}