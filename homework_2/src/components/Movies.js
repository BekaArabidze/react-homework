
import { GlobalContext } from "../context/AppContext"
import "./movies.scss"
import Button from './Button';


const Movies = () => {
    const { movies, deleteMovie,status } = GlobalContext();

    if (status.loading) {
        return <div className='loading'>Loading data</div>
    }

    return (
        <>

            <div className="movies">
                {movies ? movies.map((movie, _) => (
                    <div className="container" key={movie.imdbID}>
                        <div className="poster" style={{ backgroundImage: `url(${movie.Poster})` }} />

                        <div className="title">
                            <h1>{movie.Title} </h1>
                        </div>

                        <div className="year">
                            <h1>{movie.Year} </h1>
                        </div>

                        <div className="remove">
                            <Button event="delete" handleEvent={() => deleteMovie(movie.imdbID)} />
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