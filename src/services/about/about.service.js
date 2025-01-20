const {About} = require("../../database/models/about");
const {catchAsync} = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

exports.createAbout = catchAsync(async(aboutData) => {
    try {
        const about = await About.create(aboutData);
        return about;
    } catch (error) {
        throw new AppError("Error creating about: " + error.message);
    }
});

exports.getAbout = catchAsync(async(aboutId) => {
    try{
        const about = await About.findById(aboutId);
        if(!about) {
            throw new AppError("About not found", 404);
        };
        return about;
    } catch (error) {
        throw new AppError("Error fetching about: " + error.message);
    };
});

exports.updateAbout = catchAsync(async(aboutId, aboutData) => {
    try{
        const about = await About.findByIdAndUpdate(aboutId, aboutData, {new: true});
        if(!about) {
            throw new AppError("About not found", 404);
        };
        return about;
    } catch (error) {
        throw new AppError("Error updating about: " + error.message);
    };
});

exports.deleteAbout = catchAsync(async(aboutId) => {
    try{
        const about = await About.findByIdAndDelete(aboutId);
        if(!about) {
            throw new AppError("About not found", 404);
        }
        return about;
    } catch (error) {
        throw new AppError("Error deleting about:" + error.message);
    };
});

exports.allAbouts = catchAsync(async() => {
    try{
        const abouts = await About.find()
        if(!abouts) {
            throw new AppError("Abouts not found", 404);
        }
        return abouts;
    } catch (error) {
        throw new AppError("Error fetching abouts:" + error.message);
    };
});