const { User } = require("../models/user");
const jwt = require("jsonwebtoken");

const findUserBy = async (data) => {
  return await User.findOne(data);
};

const regUser = async (body) => {
  return await User.create(body);
};

const login = async ({ _id }, token) => {
  return await User.findByIdAndUpdate(_id, { token });
};

const createToken = ({ _id }) => {
  const { JWT_SECRET_KEY } = process.env;
  const playload = {
    id: _id,
  };

  return jwt.sign(playload, JWT_SECRET_KEY, { expiresIn: "1m" });
};

const verifyToken = async (token) => {
  const { JWT_SECRET_KEY } = process.env;

  return jwt.verify(token, JWT_SECRET_KEY, { ignoreExpiration: true });
};

module.exports = {
  findUserBy,
  regUser,
  login,
  createToken,
  verifyToken,
};
