const { Router } = require("express");
const {createProject, getProject, updateProject, deleteProject, allProjects} = require("../../controllers/portofolio.controller");

portofolioRouter = Router();

portofolioRouter.route("/").post(createProject).get(allProjects);
portofolioRouter.route("/:id").get(getProject).put(updateProject).delete(deleteProject);
 
module.exports = { portofolioRouter };