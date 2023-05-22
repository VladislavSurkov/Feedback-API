const { ConflictError } = require("../../helpers/errors");
const { findUserBy, regUser, createToken, login } = require("../../services/auth");

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  const user = await findUserBy({ email });

  if (user) throw new ConflictError({ message: "Email in use" });

  const inRegUser = await regUser({ name, email, password });

  const token = await createToken(inRegUser);
  const logUser = await login(inRegUser, token);

  res.status(201).json({
    token,
    user: {
      name: logUser.name,
      avatarURL: logUser.avatarURL,
    },
  });
};

module.exports = { registerUser };
