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



module.exports = {
	create,
  getAll,
  getById,
}
