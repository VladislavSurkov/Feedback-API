const { createToken, verifyToken } = require("../../services/auth");

const refreshToken = async (req, res) => {
  const { refreshToken } = req.body;

  if (!refreshToken)
    return res.status(401).json({ error: "Refresh token is missing" });

  try {
    const decoded = await verifyToken(refreshToken);
    const newAccessToken = await createToken({ userId: decoded.userId });

    res.json({ accessToken: newAccessToken });
  } catch (error) {
    res.status(401).json({ error: "Invalid refresh token" });
  }
};

module.exports = { refreshToken };
