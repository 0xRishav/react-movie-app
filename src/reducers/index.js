import { ADD_MOVIES} from '../actions/index';

const initialMovieState = {
    list: [],
    favourites: []
}

export default function movies(state = initialMovieState, action){
    if(action.type === ADD_MOVIES){
        return {...state, list: action.movies}
    }
    return state;
}

