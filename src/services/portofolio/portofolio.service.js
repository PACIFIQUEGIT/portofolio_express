const {Portofolio} = require("../../database/models/portofolio");
const {catchAsync} = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

exports.createProject = catchAsync(async(projectData) => {
    try {
        const project = await Portofolio.create(projectData);
        return project;
    } catch (error) {
        throw new AppError("Error creating project: " + error.message);
    }
});

exports.getProject = catchAsync(async(projectId) => {
    try{
        const project = await Portofolio.findById(projectId);
        if(!project) {
            throw new AppError("Project not found", 404);
        };
        return project;
    } catch (error) {
        throw new AppError("Error fetching project: " + error.message);
    };
});

exports.updateProject = catchAsync(async(projectId, projectData) => {
    try{
        const project = await Portofolio.findByIdAndUpdate(projectId, projectData, {new: true});
        if(!project) {
            throw new AppError("Project not found", 404);
        };
        return project;
    } catch (error) {
        throw new AppError("Error updating project: " + error.message);
    };
});

exports.deleteProject = catchAsync(async(projectId) => {
    try{
        const project = await Portofolio.findByIdAndDelete(projectId);
        if(!project) {
            throw new AppError("Project not found", 404);
        }
        return project;
    } catch (error) {
        throw new AppError("Error deleting project:" + error.message);
    };
});

exports.allProjects = catchAsync(async() => {
    try{
        const projects = await Portofolio.find();
        if(!projects) {
            throw new AppError("Projects not found", 404);
        }
        return projects;
    } catch (error) {
        throw new AppError("Error fetching projects:" + error.message);
    };
});