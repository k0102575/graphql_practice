let movies = [
  { id: 1, name: "movie 1", score: 1 },
  { id: 2, name: "movie 2", score: 33 },
  { id: 3, name: "movie 3", score: 14 },
  { id: 4, name: "movie 4", score: 84 },
];

export const getMovies = () => movies;

export const getById = (id) => movies.filter((p) => p.id === id)[0];

export const deleteById = (id) => {
  let filteredMovies = movies.filter((movie) => movie.id != id);

  if (filteredMovies.length < movies.length) {
    movies = filteredMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: movies.length + 1,
    name,
    score,
  };

  movies.push(newMovie);
  return newMovie;
};
