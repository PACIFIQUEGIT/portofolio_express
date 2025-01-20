const {createService, getService, updateService, deleteService, allServices} = require("../services/services/services.service");
const {catchAsync} = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createService = catchAsync(async(req, res) => {
    const {title, description, images} = req.body;
    if(!title || !description) {
        throw new AppError("Title, and descriptions are required", 400);
    };
    try {
        const user = req.user.id;
        const serviceData = {title, description, skills, images, user};
        const service = await createService(serviceData);
        res.status(201).json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

exports.getService = catchAsync(async(req, res) => {
    const service = await getService(req.params.id);
    res.status(200).json(service);
}); 

exports.updateService = catchAsync(async(req, res) => {
    const service = await updateService(req.params.id, req.body);
    res.status(200).json(service);
});

exports.deleteService = catchAsync(async(req, res) => {
    const service = await deleteService(req.params.id);
    res.status(200).json(service);
}); 

exports.allServices = catchAsync(async(req, res) => {
    const services = await allServices();
    res.status(200).json(services);
});