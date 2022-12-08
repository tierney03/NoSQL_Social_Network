const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  updateUser,
  // Friends
} = require("../../controllers/userController.js");

router.route("/").get(getUsers).post.apply(createUser);

router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;
