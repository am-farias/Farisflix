import './App.css';
import { useState } from 'react';
import Header from './Header';
import MovieList from "./MovieList"

function App() {
    const [movies, setMovies] = useState([]);

    return (
      <main>
      <Header setMovies={setMovies}/>
      <MovieList movies={movies}/>
      </main>
    )
}

export default App;