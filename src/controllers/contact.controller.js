const {createContact, getContact, updateContact, deleteContact, allContacts} = require("../services/contact/contact.service");
const {catchAsync} = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createContact = catchAsync(async(req, res) => {
    const {name, email, message} = req.body;
    if(!name || !email || !message) {
        throw new AppError("Title, description, and skills are required", 400);
    };
    try {
        const user = req.user.id;
        const contactData = {title, description, skills, images, user};
        const contact = await createContact(contactData);
        res.status(201).json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

exports.getContact = catchAsync(async(req, res) => {
    const contact = await getContact(req.params.id);
    res.status(200).json(contact);
}); 

exports.updateContact = catchAsync(async(req, res) => {
    const contact = await updateContact(req.params.id, req.body);
    res.status(200).json(contact);
});

exports.deleteContact = catchAsync(async(req, res) => {
    const contact = await deleteContact(req.params.id);
    res.status(200).json(contact);
}); 

exports.allContacts = catchAsync(async(req, res) => {
    const contacts = await allContacts();
    res.status(200).json(contacts);
});