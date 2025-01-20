const {Router} = require("express");
const {createUser, getUser, updateUser, deleteUser, allUsers} = require("../../controllers/users.controller");
const {auth} = require("../../utils/middlewares/auth");

usersRouter = Router();

usersRouter.route("/").post(createUser).get(allUsers);
usersRouter.use(auth);
usersRouter.route("/:id").get(getUser).put(updateUser).delete(deleteUser);

module.exports = {usersRouter};