const {contact} = require("../../database/models/contact");
const {catchAsync} = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

exports.createcontact = catchAsync(async(contactData) => {
    try {
        const contact = await contact.create(contactData);
        return contact;
    } catch (error) {
        throw new AppError("Error creating contact: " + error.message);
    }
});

exports.getcontact = catchAsync(async(contactId) => {
    try{
        const contact = await contact.findById(contactId);
        if(!contact) {
            throw new AppError("contact not found", 404);
        };
        return contact;
    } catch (error) {
        throw new AppError("Error fetching contact: " + error.message);
    };
});

exports.updatecontact = catchAsync(async(contactId, contactData) => {
    try{
        const contact = await contact.findByIdAndUpdate(contactId, contactData, {new: true});
        if(!contact) {
            throw new AppError("contact not found", 404);
        };
        return contact;
    } catch (error) {
        throw new AppError("Error updating contact: " + error.message);
    };
});

exports.deletecontact = catchAsync(async(contactId) => {
    try{
        const contact = await contact.findByIdAndDelete(contactId);
        if(!contact) {
            throw new AppError("contact not found", 404);
        }
        return contact;
    } catch (error) {
        throw new AppError("Error deleting contact:" + error.message);
    };
});

exports.allcontacts = catchAsync(async() => {
    try{
        const contacts = await contact.find()
        if(!contacts) {
            throw new AppError("contacts not found", 404);
        }
        return contacts;
    } catch (error) {
        throw new AppError("Error fetching contacts:" + error.message);
    };
});