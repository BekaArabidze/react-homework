
export const initialState = {
    movies: [],
    query: "superman",
}

export const TYPES = {
    SET_MOVIES: 'set_movies',
    REMOVE_MOVIE: 'remove_movie',
    REMOVE_ALL: 'remove_all',
    SEARCH_MOVIES: 'search_movies',
    ADD_MOVIE: 'add_movie'
}


export const reducer = (state, action) => {
    switch (action.type) {
        case TYPES.SET_MOVIES:
            return { ...state, movies: action.payload }
        case TYPES.REMOVE_MOVIE:
            return { ...state, movies: state.movies.filter(el => el.imdbID !== action.payload.id) }
        case TYPES.REMOVE_ALL:
            return { ...state, movies: [] }
        case TYPES.SEARCH_MOVIES:
            return { ...state, query: action.payload }
        default:
            return { state }
    }
}