import { createContext, useContext, useState, useEffect } from 'react'
const AppContext = createContext();


const AppProvider = ({ children }) => {
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=${process.env.REACT_APP_API_KEY}`
    
    function randomNum(min, max) {
        return Math.floor(Math.random() * (max - min)) + min; 
    }


    const [movies, setMovies] = useState([])
    const [query, setQuery] = useState("superman")
    const [status, setStatus] = useState({ loading: false, msg: "", err: false })
    
    const [add, setAdd] = useState({
        imdbID:randomNum(1,10000),
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
                setMovies(data.Search);
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
        fetchMovies(`${url}&s=${query.length == 0 ? "batman" : query}`)
        console.log(add.Title);
    }, [query])




    //! delets one movie
    const deleteMovie = (id) => {
        const deleted = movies.filter(el => el.imdbID != id)
        setMovies(deleted)
    }

    //! adding data
    const addMovie = (e) => {
        const { value, name } = e.target
        setAdd({ ...add, [name]: value })
        // console.log({ ...add, [name]: value });
    }


    const addNewUser = () => {
        setMovies([...movies, add])
        // console.log([...movies, add]);
    }

    const value = { movies, deleteMovie, setMovies, query, setQuery, status,add,addMovie,addNewUser }

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