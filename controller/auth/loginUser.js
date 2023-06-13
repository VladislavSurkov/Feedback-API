const { Unauthorized } = require("../../helpers/errors");
const { findUserBy, login, createToken } = require("../../services/auth");
const bcrypt = require("bcrypt");

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await findUserBy({ email });

  if (!user || !bcrypt.compareSync(password, user.password))
    throw new Unauthorized("Email or password is wrong");

  const token = await createToken(user);
  await login(user, token);

  res.status(200).json({
    token,
    user: {
      email: user.email,
      name: user.name,
      image: user.image,
      username: user.username,
    },
  });
};

module.exports = { loginUser };
