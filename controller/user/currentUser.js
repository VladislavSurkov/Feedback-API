const currentUser = async (req, res) => {
  const { email, username, avatarURL, name } = req.user;

  res.status(200).json({
    user: {
      email,
      username,
      avatarURL,
      name,
    },
  });
};

module.exports = { currentUser };
