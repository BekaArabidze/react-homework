import { createContext, useContext, useState, useEffect, useReducer } from 'react'
import { reducer, TYPES, initialState } from "../reducer/MovieReducer"


const AppContext = createContext();



const AppProvider = ({ children }) => {
    const [status, setStatus] = useState({ loading: false, msg: "", err: false })

    const [state, dispatch] = useReducer(reducer, initialState)
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`


    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }


    const [addMovie, setAddMovie] = useState({
        imdbID: randomNum(1, 10000),
        Poster: "https://source.unsplash.com/random/",
        Title: "",
        Year: ""
    })



    const fetchMovies = async (url) => {
        setStatus({ loading: true, msg: "Loading", err: false })

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.Response === 'True') {
                dispatch({ type: TYPES.SET_MOVIES, payload: data.Search ?? [] });
                setStatus({ loading: false, msg: "", err: false })
            } else {
                setStatus({ loading: true, msg: "error...something happend", err: false })
            }
            setStatus({ loading: false, msg: "", err: false })
        } catch (error) {
            console.log(error);
            setStatus({ loading: true, msg: "error...something happend", err: error })
        }
    }




    useEffect(() => {
        fetchMovies(`${url}&s=${state.query.length == 0 ? "batman" : state.query}`)
    }, [state.query])



    const addNewMovie = () => {
        dispatch({ type: TYPES.SET_MOVIES, payload: [...state.movies, addMovie] });
        // console.log([...state.movies, add]);
    }

    const value = { state, dispatch, status, addMovie, setAddMovie, addNewMovie }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}


export const GlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }