const connection = require('./connection');

const create = async ({ firstName, lastName, email, password }) => {
	const [ result ] = await connection.execute(
	'INSERT INTO users_crud.users (first_name, last_name, email, password) VALUES (?,?,?,?)',
	[firstName, lastName, email, password],
	)

	return {
		id: result.insertId,
		firstName,
		lastName,
		email,
	}
}

const getAll = async () => {
  const [ users ] = await connection.execute(
    'SELECT * FROM users_crud.users;',
  );
  return users;
};

const getById = async (id) => {
  const [ users ] = await connection.execute(
    'SELECT * FROM users_crud.users WHERE id=?;',
    [id],
  );

  return users;
};

const putById = async ({ id, firstName, lastName, email, password }) => {
  await connection.execute(
    `UPDATE users_crud.users SET
    first_name=?, last_name=?, email=?, password=?
    WHERE id=?;`,
    [firstName, lastName, email, password, id]
  )

  return {
    id,
    firstName,
    lastName,
    email,
    password,
  }
};

const deleteUser = async (id) => {
  await connection.execute(
    'DELETE FROM users_crud.users WHERE id=?;',
    [id]
  )
};

module.exports = {
	create,
  getAll,
  getById,
  putById,
  deleteUser,
}
