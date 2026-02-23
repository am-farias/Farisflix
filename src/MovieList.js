function MovieList({ movies }) {
  if (movies.length === 0) {
    return;
  }
  return (
    <div className="result">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="movie-card">
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} alt={movie.Title} width="150" />
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
}

export default MovieList;