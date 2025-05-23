const{mongoose} = require("mongoose");

const aboutSchema = new mongoose.Schema(
    {
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
        images: {
            type: [String],
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Author is required"]
        },
    }
);

exports.About = mongoose.model("About", aboutSchema);