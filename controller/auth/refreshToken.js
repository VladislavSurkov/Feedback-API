const { Unauthorized } = require("../../helpers/errors");
const { createToken, verifyToken } = require("../../services/auth");

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken) throw new Unauthorized("Refresh token is missing");

  const decoded = await verifyToken(refreshToken);
  const newAccessToken = await createToken({ _id: decoded.id });

  res.json({ accessToken: newAccessToken });
};

module.exports = { refreshToken };
