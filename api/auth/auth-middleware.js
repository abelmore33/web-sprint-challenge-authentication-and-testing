const db = require("../../data/dbConfig");

function validateUser(req, res, next) {
  try {
    const { username, password } = req.body;
    if (username && password) {
      next();
    } else {
      next({ status: 400, message: "username and password required" });
    }
  } catch (err) {
    next(err);
  }
}

async function checkUserExists(req, res, next) {
  const user = await db("users").where("username", req.body.username).first();

  if (user) {
    res.status(400).json({ message: "username taken" });
  } else {
    next();
  }
}

module.exports = {
  validateUser,
  checkUserExists,
};
