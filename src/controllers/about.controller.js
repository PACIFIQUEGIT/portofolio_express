const {createAbout, getAbout, updateAbout, deleteAbout, allAbouts} = require("../services/about/about.service");
const AppError = require("../utils/appError");

exports.createAbout = async(req, res) => {
    const {title, description, images} = req.body;
    if(!title || !description) {
        throw AppError("Title, and description are required", 400);
    };
    try {
        const user = req.user.id;
        const aboutData = {title, description, skills, images, user};
        const about = await createAbout(aboutData);
        res.status(201).json(about);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getAbout = (req, res) => {
    const about = getAbout(req.params.id);
    res.status(200).json(about);
}; 

exports.updateAbout = (req, res) => {
    const about = updateAbout(req.params.id, req.body);
    res.status(200).json(about);
};

exports.deleteAbout = (req, res) => {
    const about = deleteAbout(req.params.id);
    res.status(200).json(about);
}; 

exports.allAbouts = (req, res) => {
    const abouts = allAbouts();
    res.status(200).json(abouts);
};