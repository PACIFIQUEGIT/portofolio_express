const {mongoose} = require("mongoose")
const bcrypt = require("bcrypt");
const { catchAsync } = require("../../utils/catchAsync");
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true,
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            select: false,
        },
        portofolio: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Portofolio"
            }
        ],
        about: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "About"
            }
        ],
        services: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Service"
            }
        ]
    },
);
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
};
exports.User = mongoose.model("User", userSchema)