import Movies from "./components/Movies"
import Input from "./components/Input";
import { GlobalContext } from "./context/AppContext"

import './App.scss';
import Button from './components/Button';


const App = () => {
    const { query, setQuery, add, addMovie, addNewUser,setMovies } = GlobalContext();

    return (
        <>
            <Input name="search" title="search" value={query} handleInput={(e) => setQuery(e.target.value)} />

            <br />
            <br />
            <Input name="Title" title="Title" value={add.Title} handleInput={(e) => addMovie(e)} />
            <br />
            <br />
            <Input name="Year" title="Year" value={add.Year} handleInput={(e) => addMovie(e)} />

            <Button event="add movie" handleEvent={() => addNewUser()} />

            <div className="all">
                <Button event="delete all movies" handleEvent={() => setMovies([])} />
            </div>

            <Movies />
        </>
    );
}

export default App;
