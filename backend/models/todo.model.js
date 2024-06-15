module.exports = (sequelize, Sequelize) => {
  const Todo = sequelize.define("Todo", {
    id: {
      type: Sequelize.INTEGER.UNSIGNED,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING(100)
    },
    description: {
      type: Sequelize.STRING(100)
    },
    status: {
      type: Sequelize.INTEGER.UNSIGNED
    },
    createdAt: {
      type: Sequelize.DATE,
    },
    updatedAt: {
      type: Sequelize.DATE,
    }
  });
  
  return Todo;
};