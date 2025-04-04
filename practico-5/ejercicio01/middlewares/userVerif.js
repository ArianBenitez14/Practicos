function userVerif(req, res, next) {
  if (!req.body.firstname || !req.body.lastname || !req.body.age) {
    return res.status(400).send("Usuario inválido.");
  } else {
    next();
  }
}
module.exports = userVerif;
