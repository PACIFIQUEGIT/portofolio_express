const mongoose = require("mongoose");
const {config} = require("dotenv");
config();

exports.ConnectDb = () => {
    try{
        mongoose.connect(process.env.DB_URL, {autoIndex: false});
        console.log("Database connected successfully");
    } catch (error) {
        console.log("ERROR CONNECTING TO DATABASE", error);
        mongoose.disconnect();
        process.exit(1);
    };
};