module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("User", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING(100)
      },
      createdAt: {
        type: Sequelize.DATE,
      },
      updatedAt: {
        type: Sequelize.DATE,
      }
    });
    
    return User;
  };