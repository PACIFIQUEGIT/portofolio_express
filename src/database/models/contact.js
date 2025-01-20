const{mongoose} = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
            trim: true
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            trim: true
        },
        message: {
            type: String,
            required: [true, "Message is required"],
            trim: true
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Author is required"]
        },
    }
);

exports.Contact = mongoose.model("Contact", contactSchema);