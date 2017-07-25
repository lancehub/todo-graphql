import Sequelize from 'sequelize';
import casual from 'casual';
import _ from 'lodash';

const db = new Sequelize('todo', null, null, {
  dialect: 'sqlite',
  storage: './todo.sqlite',
});

const CategoryModel = db.define('category', {
  name: { type: Sequelize.STRING },
});

const TodoModel = db.define('todo', {
  name: { type: Sequelize.STRING },
  done: { type: Sequelize.BOOLEAN },
  time: { type: Sequelize.STRING },
});


CategoryModel.hasMany(TodoModel);
TodoModel.belongsTo(CategoryModel);

// create mock data with a seed, so we always get the same
casual.seed(123);
db.sync({ force: true }).then(() => {
  _.times(10, () => {
    return CategoryModel.create({
      name: casual.title,
    }).then((category) => {
      return category.createTodo({
        name: casual.sentences(1),
        done: casual.boolean,
        time: casual.date('YYYY-MM-DD'),
      });
    });
  });
});

const Category = db.models.category;
const Todo = db.models.todo;

export { Category, Todo };
