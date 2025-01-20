const {Router} = require("express");
const {createService, getService, updateService, deleteService, allServices} = require("../../controllers/services.controller");

servicesRouter = Router();

servicesRouter.route("/").post(createService).get(allServices);
servicesRouter.route("/:id").get(getService).put(updateService).delete(deleteService);

module.exports = {servicesRouter};