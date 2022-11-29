import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { getTopRatedMovies } from "../../api/movie/movie";
import MovieList from "../Shared/MovieList/MovieList";

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const { error, movies } = await getTopRatedMovies();
    if (error) return toast.error(error);
    setMovies([...movies]);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return <MovieList movies={movies} title="Viewers Choice (Movies)" />;
};

export default TopRatedMovies;
