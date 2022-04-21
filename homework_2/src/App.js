
import Movies from "./components/Movies"
import Input from "./components/Input";
import { GlobalContext } from "./context/AppContext"
import { TYPES } from "./reducer/MovieReducer"

import './App.scss';
import Button from './components/Button';


const App = () => {
    const { state, dispatch, addMovie, setAddMovie, addNewMovie } = GlobalContext();

    return (
        <>
            <Input
                name="search"
                title="search"
                value={state.query}
                handleInput={(e) => dispatch({ type: TYPES.SEARCH_MOVIES, payload: e.target.value })}
            />

            <br />
            <br />
            <Input name="Title" title="Title" value={addMovie.Title} handleInput={(e) => setAddMovie({ ...addMovie, Title: e.target.value })} />
            <br />
            <br />
            <Input name="Year" title="Year" value={addMovie.Year} handleInput={(e) => setAddMovie({ ...addMovie, Year: e.target.value })} />



            <Button event="add movie" handleEvent={() => addNewMovie()} />



            <div className="all">
                <Button event="delete all movies" handleEvent={() => dispatch({ type: TYPES.REMOVE_ALL })} />
            </div>

            <Movies />
        </>
    );
}

export default App;
