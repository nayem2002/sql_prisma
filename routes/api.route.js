const {
  getAllUser,
  createUser,
  getSingleUser,
  updateSingleUser,
  deleteUser,
} = require("../controller/user.controller");

const router = require("express").Router();

router.route("/user").get(getAllUser);
router.route("/user/new").post(createUser);
router
  .route("/user/:id")
  .get(getSingleUser)
  .put(updateSingleUser)
  .delete(deleteUser);

module.exports = router;
