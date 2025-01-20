const {Router} = require("express");
const {createResponse, getResponse, updateResponse, deleteResponse, allResponses} = require("../../controllers/response.controller");

responseRouter = Router();

responseRouter.route("/").post(createResponse).get(allResponses);
responseRouter.route("/:id").get(getResponse).put(updateResponse).delete(deleteResponse);

module.exports = {responseRouter};