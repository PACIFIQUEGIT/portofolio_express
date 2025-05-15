const mongoose = require('mongoose');

const portofolioSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required"],
        trim: true
    },
    description: {
        type: String,
        required: [true, "Description is required"],
        trim: true
    },
    skills: {
        type: [String],
        required: [true, "Skills are required"],
        trim: true
    },
    projectUrl: {
        type: [String],
        required: [true, "ProjectUrl is required"],
        trim: true
    },
    imageUrl: {
        type: String,
        default: 'images/default.png',
        trim: true
    },
    images: {
        type: [String],
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Author is required"]
    },
});

exports.Portofolio = mongoose.model("Portofolio", portofolioSchema);
