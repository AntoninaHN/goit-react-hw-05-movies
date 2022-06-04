import React, { useEffect, useState } from "react";
import {
  Link,
  useParams,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { fetchMovieId } from "../Api/Api";

import styles from "../MovieDetailsPage/MovieDetailsPage.module.css";

export default function MovieDetailsPage() {
  const location = useLocation();
  const history = useNavigate();
  const { movieId } = useParams();
  const [title, setTitle] = useState("");
  const [overview, setOverview] = useState("");
  const [date, setDate] = useState("");
  const [genres, setGenres] = useState("");
  const [poster, setPoster] = useState("");
  const [userScore, setUserScore] = useState("");

  const goBack = () => {
    history(location.state);
  };

  function createListOfGenres(genres) {
    const genresList = [];
    genres.map((genre) => {
      genresList.push(genre.name);
      return genresList;
    });

    const genreString = genresList.join(" ");
    return genreString;
  }

  useEffect(() => {
    fetchMovieId(movieId).then((data) => {
      setPoster(`https://image.tmdb.org/t/p/w500${data.poster_path}`);
      setTitle(data.original_title);
      setOverview(data.overview);
      setDate(data.release_date.slice(0, 4));
      setGenres(createListOfGenres(data.genres));
      setUserScore(data.vote_average);
    });
  }, [movieId]);

  return (
    <div>
      <button type="button" onClick={goBack} className={styles.btn}>
        Go back
      </button>
      <div className={styles.movieCard}>
        <img src={poster} alt={title} className={styles.movieCardImg}></img>

        <div className={styles.movieCardInfo}>
          <h1>
            {title} ({date})
          </h1>
          <p>User Score: {userScore}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres}</p>
        </div>
      </div>
      <hr></hr>
      <p>Additional information</p>
      <div className={styles.movieCardLink}>
        <Link to={`/movies/${movieId}/cast`} state={location.state}>
          Cast
        </Link>
        <Link to={`/movies/${movieId}/reviews`} state={location.state}>
          Reviews
        </Link>
      </div>

      <hr></hr>
      <Outlet />
    </div>
  );
}
