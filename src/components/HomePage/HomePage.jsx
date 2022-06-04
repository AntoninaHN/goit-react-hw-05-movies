import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchTrendingMovie } from "../Api/Api";

import styles from "../HomePage/HomePage.module.css";

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);
  useEffect(() => {
    fetchTrendingMovie().then((data) => setMovies(data.results));
  }, []);

  return (
    <>
      <p className={styles.title}>Trending today</p>
      {movies && (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`} state={location}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
