const {Router} = require("express");
const {createAbout, getAbout, updateAbout, deleteAbout, allAbouts} = require("../../controllers/about.controller");

aboutRouter = Router();

aboutRouter.route("/").post(createAbout).get(allAbouts);
aboutRouter.route("/:id").get(getAbout).put(updateAbout).delete(deleteAbout);

module.exports = {aboutRouter}