const app = require("./app")
const {config} = require("dotenv");
config();
const {ConnectDb} = require("./services/db/connect");
const errorHandler = require("./utils/errorHandler");
ConnectDb();

const PORT = process.env.PORT || 3000;
app.use(errorHandler);
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});