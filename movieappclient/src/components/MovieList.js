import React, { useEffect, useState } from "react";

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch("http://localhost:4000/movies/");
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();
        console.log(data); 
        setMovies(data.Search || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Movie List</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>
            <h2>{movie.Title}</h2>
            <p>Year: {movie.Year}</p>
            <img src={movie.Poster} alt={movie.Title} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
