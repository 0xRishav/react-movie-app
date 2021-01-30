import { combineReducers } from 'redux';
import { ADD_MOVIES, ADD_TO_FAVOURITES, REMOVE_FROM_FAVOURITES, SHOW_FAVOURITES, ADD_TO_MOVIES, ADD_SEARCH_RESULT} from '../actions/index';

const initialMovieState = {
    list: [],
    favourites: [],
    showFavourites: false
}

export function movies(state = initialMovieState, action){
    // if(action.type === ADD_MOVIES){
    //     return {...state, list: action.movies}
    // }
    // return state;

    switch (action.type) {
        case ADD_MOVIES:
            return{
                ...state,
                list: action.movies
            }

        case ADD_TO_FAVOURITES:
            return {
                ...state,
                favourites: [action.movie, ...state.favourites]
            }

        
        case REMOVE_FROM_FAVOURITES:
            const fillteredArray = state.favourites.filter(movie => movie.Title !== action.movie.Title);
            console.log('this is filltered array ' ,fillteredArray);
            return {
                ...state,
                favourites: fillteredArray
            }

            case SHOW_FAVOURITES:
                return {
                    ...state,
                    showFavourites: action.val
                }

            case ADD_TO_MOVIES:
                return {
                    ...state,
                    list: [action.movie, ...state.list]
                }

            // case ADD_SEARCH_RESULT:
            //     return{
            //         ...state,
            //         list: [action.movie, ...state.list]
            //     }

                
        default:
            return state;
    }
}

//Search Reducer
const initialSearchState = {
    result: {},
    showSearchResults: false
};

export function search(state = initialSearchState, action){
    switch (action.type) {
        case ADD_SEARCH_RESULT:
            return {
                ...state,
                result: action.movie,
                showSearchResults: true
            }

            case ADD_TO_MOVIES:
                return {
                    ...state,
                    showSearchResults: false
                }
    
        default:
            return state;
    }
}

//Root reducer
const initialRootState = {
    movies: initialMovieState,
    search: initialSearchState
}

// export default function rootReducer(state = initialRootState, action){
//     return {
//         movies: movies(state.movies, action),
//         search: search(state.search, action)
//     }
// }

export default combineReducers({
    movies,
    search
})
