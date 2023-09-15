const db = require("../../data/dbConfig");

async function validateUser(req, res, next) {
  const { username, password } = req.body;
  const user = await db("users").where("username", req.body.username).first();
  if (!username || !password) {
    res.status(400).json({ message: "username and password required" });
  } else if (user) {
    res.status(400).json({ message: "username taken" });
  } else {
    next();
  }
}

module.exports = {
  validateUser,
};
