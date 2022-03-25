const userModel = require('../model/user');

const createUser = async (req, res, next) => {
  try {
    const result = await userModel.create({ ...req.body });
    return res.status(201).json(result)
  } catch (err) {
    next(err)
  }
};

const getAll = async (req, res, next) => {
  try {
    const result = await userModel.getAll({ ...req.body });
    res.status(200).json(result);
  } catch (err) {
    next(err)
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await userModel.getById(id);

  if (!user) return res.status(404).json({ message: 'user não encontrado' })

  res.status(200).json(user);
  } catch (err) {
    next(err)
  }
}

module.exports = {
  createUser,
  getAll,
  getById,
}