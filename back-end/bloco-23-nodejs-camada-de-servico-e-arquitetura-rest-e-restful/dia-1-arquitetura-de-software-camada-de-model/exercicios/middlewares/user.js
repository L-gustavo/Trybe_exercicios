const isValidate = (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(401).json({ message: "Dados inválidos" });
  }

  if(password.length < 6) {
    return res.status(401).json({
      message: "O campo 'password' deve ter pelo menos 6 caracteres"
    });
  }

  next()
};

module.exports = {
  isValidate,
}