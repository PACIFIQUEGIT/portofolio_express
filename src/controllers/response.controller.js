const {createResponse, getResponse, updateResponse, deleteResponse, allResponses} = require("../services/response/response.service");
const {catchAsync} = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createResponse = catchAsync(async(req, res) => {
    const {name, email, message} = req.body;
    if(!name || !email || !message) {
        throw new AppError("Title, description, and skills are required", 400);
    };
    try {
        const user = req.user.id;
        const responseData = {title, description, skills, images, user};
        const response = await createResponse(responseData);
        res.status(201).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

exports.getResponse = catchAsync(async(req, res) => {
    const response = await getResponse(req.params.id);
    res.status(200).json(response);
}); 

exports.updateResponse = catchAsync(async(req, res) => {
    const response = await updateResponse(req.params.id, req.body);
    res.status(200).json(response);
});

exports.deleteResponse = catchAsync(async(req, res) => {
    const response = await deleteResponse(req.params.id);
    res.status(200).json(response);
}); 

exports.allResponses = catchAsync(async(req, res) => {
    const responses = await allResponses();
    res.status(200).json(responses);
});