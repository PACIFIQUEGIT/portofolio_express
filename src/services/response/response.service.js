const {response} = require("../../database/models/response");
const {catchAsync} = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

exports.createresponse = catchAsync(async(responseData) => {
    try {
        const response = await response.create(responseData);
        return response;
    } catch (error) {
        throw new AppError("Error creating response: " + error.message);
    }
});

exports.getresponse = catchAsync(async(responseId) => {
    try{
        const response = await response.findById(responseId);
        if(!response) {
            throw new AppError("response not found", 404);
        };
        return response;
    } catch (error) {
        throw new AppError("Error fetching response: " + error.message);
    };
});

exports.updateresponse = catchAsync(async(responseId, responseData) => {
    try{
        const response = await response.findByIdAndUpdate(responseId, responseData, {new: true});
        if(!response) {
            throw new AppError("response not found", 404);
        };
        return response;
    } catch (error) {
        throw new AppError("Error updating response: " + error.message);
    };
});

exports.deleteresponse = catchAsync(async(responseId) => {
    try{
        const response = await response.findByIdAndDelete(responseId);
        if(!response) {
            throw new AppError("response not found", 404);
        }
        return response;
    } catch (error) {
        throw new AppError("Error deleting response:" + error.message);
    };
});

exports.allresponses = catchAsync(async() => {
    try{
        const responses = await response.find()
        if(!responses) {
            throw new AppError("responses not found", 404);
        }
        return responses;
    } catch (error) {
        throw new AppError("Error fetching responses:" + error.message);
    };
});