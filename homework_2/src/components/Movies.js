
import { useEffect } from "react"

import { GlobalContext } from "../context/AppContext"
import "./movies.scss"
import Button from './Button';


import { TYPES } from "../reducer/MovieReducer"


const Movies = () => {
    const { state, dispatch, status } = GlobalContext();

    if (status.loading) {
        return <div className='loading'>Loading data</div>
    }

    // useEffect(() => {
    //     console.log(state.movies && state.movies);
    // }, [])


    return (
        <>

            <div className="movies">
                {state.movies ? state.movies.map((movie, _) => (
                    <div className="container" key={movie.imdbID}>
                        <div className="poster" style={{ backgroundImage: `url(${movie.Poster})` }} />

                        <div className="title">
                            <h1>{movie.Title} </h1>
                        </div>

                        <div className="year">
                            <h1>{movie.Year} </h1>
                        </div>

                        <div className="remove">
                            <Button event="delete"
                                handleEvent={() => dispatch({ type: TYPES.REMOVE_MOVIE, payload: { id: movie.imdbID } })}
                            />
                        </div>
                    </div>
                ))
                    :
                    <div className="status"><h1>{status.msg}</h1></div>
                }

            </div>
        </>
    )
}

export default Movies