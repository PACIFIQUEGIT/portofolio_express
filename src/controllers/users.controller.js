const {createUser, getUser, updateUser, deleteUser, allUsers} = require("../services/users/users.service");
const {catchAsync} = require("../utils/catchAsync");
const AppError = require("../utils/appError");

exports.createUser = catchAsync(async(req, res) => {
    const { email, password, name } = req.body;
    if (!email || !password || !name) {
        throw new AppError("Name, email, and password are required", 400);
    };
    try {
        const user = await createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

exports.getUser = catchAsync(async(req, res) => {
    const user = await getUser(req.params.id);
    res.status(200).json(user);
}); 

exports.updateUser = catchAsync(async(req, res) => {
    const user = await updateUser(req.params.id, req.body);
    res.status(200).json(user);
});

exports.deleteUser = catchAsync(async(req, res) => {
    const user = await deleteUser(req.params.id);
    res.status(200).json(user);
}); 

exports.allUsers = catchAsync(async(req, res) => {
    const users = await allUsers();
    res.status(200).json(users);
});