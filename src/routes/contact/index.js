const {Router} = require("express");
const {createContact, getContact, updateContact, deleteContact, allContacts} = require("../../controllers/contact.controller");

contactRouter = Router();

contactRouter.route("/").post(createContact).get(allContacts);
contactRouter.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = {contactRouter}