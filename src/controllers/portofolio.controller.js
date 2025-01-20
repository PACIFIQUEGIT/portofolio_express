const {createProject, getProject, updateProject, deleteProject, allProjects} = require("../services/portofolio/portofolio.service");
const { catchAsync } = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createProject = catchAsync(async(req, res) => {
    const {title, description, skills, images} = req.body;
    if(!title || !description || !skills) {
        throw new AppError("Title, description, and skills are required", 400);
    };
    try {
        const user = req.user.id;
        const projectData = {title, description, skills, images, user};
        const project = await createProject(projectData);
        res.status(201).json(project);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

exports.getProject = catchAsync(async(req, res, next) => {
    const project = await getProject(req.params.id);
    res.status(200).json(project);
}); 

exports.updateProject = catchAsync(async(req, res, next) => {
    const project = await updateProject(req.params.id, req.body);
    res.status(200).json(project);
});

exports.deleteProject = catchAsync(async(req, res, next) => {
    const project = await deleteProject(req.params.id);
    res.status(200).json(project);
}); 

exports.allProjects = catchAsync(async(req, res, next) => {
    try{
        const projects = await allProjects();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});