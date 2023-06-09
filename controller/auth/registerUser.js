const { ConflictError } = require("../../helpers/errors");
const { findUserBy, regUser, createToken, login } = require("../../services/auth");

const registerUser = async (req, res, next) => {
  const { name, username, email, password } = req.body;
  const user = await findUserBy({ email });

  if (user) throw new ConflictError( "Email in use" );

  const inRegUser = await regUser({ name,username, email, password });

  const token = await createToken(inRegUser);
  const logUser = await login(inRegUser, token);

  res.status(201).json({
    token,
    user: {
      email: logUser.email,
      name: logUser.name,
      image: logUser.image,
      username: logUser.username,
    },
  });
};

module.exports = { registerUser };
