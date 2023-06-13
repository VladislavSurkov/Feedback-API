const currentUser = async (req, res) => {
  const { email, username, image, name } = req.user;

  res.status(200).json({
    user: {
      email,
      username,
      image,
      name,
    },
  });
};

module.exports = { currentUser };
