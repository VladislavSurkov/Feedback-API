const { WrongParamsError, NotFoundError } = require("../../helpers/errors");
const { updateUser } = require("../../services/user");

const update = async (req, res) => {
  const { id } = req.user;
  const bodyParam = req.body;
  let updateParam = { ...bodyParam };

  if (req.file) {
    const { path: image } = req.file;
    updateParam = { image, ...bodyParam };
  }

  if (!updateParam) throw new WrongParamsError({ message: `Missing field` });

  const user = await updateUser(id, updateParam);
  if (!user) throw new NotFoundError("User not found");

  const { name, email, username, image } = user;
  res.json({
    status: "success",
    message: "User updated",
    user: {
      name,
      email,
      username,
      image,
    },
  });
};

module.exports = { update };
