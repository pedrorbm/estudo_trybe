// src/app.js

const express = require('express');

const User = require('./controllers/user.controller');
const Employee = require('./controllers/employee.controller');

const app = express();

app.use(express.json());

app.get('/user', User.getAll);

// Este endpoint usa o método findByPk do Sequelize para buscar um usuário pelo id.
app.get('/user/:id', User.getById);

// Este endpoint usa o método findOne do Sequelize para buscar um usuário pelo id e email.
// URL a ser utilizada para o exemplo "http://localhost:3001/user/search/1?email=leo@test.com"
app.get('/user/search/:id', User.getByIdAndEmail);

// Este endpoint usa o método create do Sequelize para salvar um usuário no banco.
app.post('/user', User.createUser);

// Este endpoint usa o método update do Sequelize para alterar um usuário no banco.
app.put('/user/:id', User.updateUser);

// Este endpoint usa o método destroy do Sequelize para remover um usuário no banco.
app.delete('/user/:id', User.deleteUser);

app.get('/employees', Employee.getAll)

app.get('/employees/:id', Employee.getById);

app.post('/employees', Employee.insert);

module.exports = app;
