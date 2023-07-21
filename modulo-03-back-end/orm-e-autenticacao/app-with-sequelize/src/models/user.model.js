// src/models/user.model.js

const UserModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,
    phoneNum: DataTypes.STRING,
  });

  (async () => {
    await sequelize.sync({ force: true });
    const sara = await User.create({
      fullName: 'Sara Silva Santos',
      email: 'sara.ss@trybe.com',
      phoneNum: '944444',
    });
    console.log(sara instanceof User); // true
    console.log(sara.name); // "Sara Silva Santos"
  })();

  return User;
};

module.exports = UserModel;
