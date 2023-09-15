const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../../config/index");
module.exports = (req, res, next) => {
  /*
    IMPLEMENT

    1- On valid token in the Authorization header, call next.

    2- On missing token in the Authorization header,
      the response body should include a string exactly as follows: "token required".

    3- On invalid or expired token in the Authorization header,
      the response body should include a string exactly as follows: "token invalid".
  */
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({
          message: `invalid token`,
        });
      } else {
        req.decodedJwt = decoded;
        console.log(req.decodedJwt);
        next();
      }
    });
  } else {
    res.status(402).json({
      message: "Token required",
    });
  }
};
