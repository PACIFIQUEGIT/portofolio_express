const{mongoose} = require("mongoose");

const responseSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Title is required"],
            trim: true
        },
        content: {
            type: String,
            required: [true, "Content is required"],
            trim: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Author is required"]
        },
    }
);

exports.Response = mongoose.model("Response", responseSchema);