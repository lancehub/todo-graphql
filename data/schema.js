import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers'

const typeDefs = `
type Category {
  id: Int
  name: String
  todos: [Todo]
}
type Todo {
  id: Int
  name: String
  done: Boolean
  time: String
  category: Category
}
type Query {
  todos: [Todo]
  todo(id: Int!): Todo
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

export default schema;
