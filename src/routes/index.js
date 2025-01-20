const { Router } = require("express");
const { portofolioRouter } = require("./portofolio/ïndex");
const { aboutRouter } = require("./about");
const { contactRouter } = require("./contact");
const { servicesRouter } = require("./services");
const { responseRouter } = require("./response");
const { usersRouter } = require("./users");
const { authRouter } = require("./auth");
const { auth } = require("../utils/middlewares/auth");


router = Router();

router.use("/auth", authRouter);
router.use("/users", usersRouter);
router.use(auth);
router.use("/portofolio", portofolioRouter);
router.use("/about", aboutRouter);
router.use("/contact", contactRouter);
router.use("/services", servicesRouter);
router.use("/response", responseRouter);





module.exports = router;