const currentUser = async (req, res) => {
  const { token, email, username, image, name } = req.user;

  res.status(200).json({
    token,
    user: {
      email,
      username,
      image,
      name,
    },
  });
};

module.exports = { currentUser };
