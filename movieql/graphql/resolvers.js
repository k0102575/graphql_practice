import { people, getById } from "./database";

const resolvers = {
  Query: {
    people: () => people,
    person: (__, { id }) => getById(id),
  },
};

export default resolvers;
