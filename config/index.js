module.exports = {
  BCRYPT_ROUNDS: process.env.BCRYPT_ROUNDS || 5,
  JWT_SECRET: process.env.JWT_SECRET || "shh",
};
