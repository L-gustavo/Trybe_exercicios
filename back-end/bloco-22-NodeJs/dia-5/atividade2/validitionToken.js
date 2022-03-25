function validitionTok(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization;
  if(!token || token.length !== 12 || typeof token !== "string"){
    console.log("entreii");
    return res.status(401).json({ "message": "invalid token" });
  }
  next();
};

module.exports = validitionTok;
