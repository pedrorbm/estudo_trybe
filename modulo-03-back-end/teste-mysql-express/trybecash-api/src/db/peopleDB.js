// src/db/peopleDB.js

const conn = require('./connection');

const insert = async (person) => await conn.execute(
    `INSERT INTO people 
      (first_name, last_name, email, phone) VALUES (?, ?, ?, ?)`,
      [person.firstName, person.lastName, person.email, person.phone],
  );

const findAll = async () => await conn.execute(`SELECT * FROM people`);

const findById = async (id) => await conn.execute(`SELECT * FROM people WHERE id = ?`, [id]);

const update = async (id, person) => await conn.execute(
  `UPDATE people SET first_name = ?, last_name = ?, email = ?, phone = ? WHERE id = ?`,
    [person.firstName, person.lastName, person.email, person.phone, id],
)

const remove = async (id) => await conn.execute(
  `DELETE FROM people WHERE id = ?`, [id],
);

module.exports = {
  insert,
  findAll,
  findById,
  update,
  remove,
};
