const { sign,verify } = require("jsonwebtoken")
const {config} = require("dotenv")
const { catchAsync } = require("./catchAsync")
const AppError = require("./appError");
config()

const signToken = catchAsync(async (payload) => {
    return sign(payload, process.env.JWT_TOKEN, {
        expiresIn: "15m",
    })
})
const verifyToken = catchAsync(async (token) => {
    try {
        const decoded = await verify(token, process.env.JWT_TOKEN, (error, decoded) => {
            if (error) {
                throw new AppError(error.message, 401)
            }
            return decoded
        })
        return decoded
    } catch (error) {
        throw new AppError(error.message, 401)
    }
})

module.exports = { signToken,verifyToken }