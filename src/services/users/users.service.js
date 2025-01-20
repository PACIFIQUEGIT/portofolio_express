const {User} = require("../../database/models/user");
const {Portofolio} = require("../../database/models/portofolio");
const {About} = require("../../database/models/about");
const {Service} = require("../../database/models/service");
const {catchAsync} = require("../../utils/catchAsync");
const bcrypt = require("bcrypt");

const AppError = require("../../utils/appError");
const { path } = require("../../app");

exports.createUser = catchAsync(async(userData) => {
    try {
        const user = await this.findUserByEmail(userData.email)
        console.log("USER", user)
        console.log("userData:", userData);  // Check if password exists

        if (user) {
            throw new AppError("User already exists", 409)
        }
        const hashedPassword = await bcrypt.hash(userData.password, 10)
        userData.password = hashedPassword

        const newUser = await User.create(userData)
        const userObject = newUser.toObject()
        delete userObject.password
        return userObject
    } catch (error) {
        console.error('Error in createUser:', error);
        throw new AppError(error.message, error.statusCode || 500)
    }
});

exports.getUser = catchAsync(async(userId) => {
    try {
        const user = await User.findById(userId).populate("portofolio").populate("about").populate("services")
        if (!user) { throw new AppError("User not found", 404)}
        const userPortofolio = await Portofolio.find({user: userId})
        const userAbout = await About.find({user: userId})
        const userServices = await Service.find({user: userId})
        const userObject = user.toObject()
        userObject.portofolio = {
            ...userObject.portofolio,
            about: userAbout,
            services: userServices
        };
        userObject.portofolio.userProjects = userPortofolio; 
        return userObject
    } catch (error) {
        console.log("ERROR Finding User By Id", error)
        throw new AppError(error.message, 500)
    }
});

exports.updateUser = catchAsync(async(userId, userData) => {
    try{
        const user = await User.findByIdAndUpdate(userId, userData, {new: true});
        if(!user) {
            throw new AppError("User not found", 404);
        };
        return user;
    } catch (error) {
        throw new AppError("Error updating user: " + error.message);
    };
});

exports.deleteUser = catchAsync(async(userId) => {
    try{
        const user = await User.findByIdAndDelete(userId);
        if(!user) {
            throw new AppError("User not found", 404);
        }
        return user;
    } catch (error) {
        throw new AppError("Error deleting user:" + error.message);
    };
});

exports.allUsers = catchAsync(async() => {
    try{
        const users = await User.find().populate({
            path: "portofolio"
        })

        if(!users) {
            throw new AppError("Users not found", 404);
        }      
         const usersWithPortfolios =await Promise.all( users.map(async (user) =>{

            const portfolio = await Portofolio.find({user: user._id})
            return {
             ...user.toObject(),
             portfolio
            }
        }))
console.log("Users", JSON.stringify(usersWithPortfolios, null, 2))
        return usersWithPortfolios;
    } catch (error) {
        throw new AppError("Error fetching users:" + error.message);
    };
});

exports.findUserByEmail = async (email) => {
    try {
        const user = await User.findOne({ email }).select("+password")
        return user
    } catch (error) {
        console.log("ERROR Finding User By Email", error)
    }
};