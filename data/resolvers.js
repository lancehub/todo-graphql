import { Category, Todo } from './connectors';

const resolvers = {
  Query: {
    todos(_, args) {
      return Todo.findAll();
    },
    todo(_, args) {
      return Todo.findById(args.id);
    }
  },
  Category: {
    todos(category) {
      return category.getTodos();
    },
  },
  Todo: {
    category(todo) {
      return todo.getCategory();
    },
  },
};

export default resolvers;
