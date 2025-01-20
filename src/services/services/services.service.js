const {Service} = require("../../database/models/service");
const {catchAsync} = require("../../utils/catchAsync");
const AppError = require("../../utils/appError");

exports.createService = catchAsync(async(serviceData) => {
    try {
        const service = await Service.create(serviceData);
        return service;
    } catch (error) {
        throw new AppError("Error creating service: " + error.message);
    }
});

exports.getService = catchAsync(async(serviceId) => {
    try{
        const service = await Service.findById(serviceId);
        if(!service) {
            throw new AppError("Service not found", 404);
        };
        return service;
    } catch (error) {
        throw new AppError("Error fetching service: " + error.message);
    };
});

exports.updateService = catchAsync(async(serviceId, serviceData) => {
    try{
        const service = await Service.findByIdAndUpdate(serviceId, serviceData, {new: true});
        if(!service) {
            throw new AppError("Service not found", 404);
        };
        return service;
    } catch (error) {
        throw new AppError("Error updating service: " + error.message);
    };
});

exports.deleteService = catchAsync(async(serviceId) => {
    try{
        const service = await Service.findByIdAndDelete(serviceId);
        if(!service) {
            throw new AppError("Service not found", 404);
        }
        return service;
    } catch (error) {
        throw new AppError("Error deleting service:" + error.message);
    };
});

exports.allServices = catchAsync(async() => {
    try{
        const services = await Service.find()
        if(!services) {
            throw new AppError("Services not found", 404);
        }
        return services;
    } catch (error) {
        throw new AppError("Error fetching services:" + error.message);
    };
});