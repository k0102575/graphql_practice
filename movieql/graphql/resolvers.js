import { getMovies, getById, deleteById, addMovie } from "./database";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (__, { id }) => getById(id),
  },
  Mutation: {
    deleteMovie: (_, { id }) => deleteById(id),
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
};

export default resolvers;
