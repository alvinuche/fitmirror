const express = require("express");
const router = express.Router();

const { signup, signin, signout } = require("../controllers/auth");
const { userSignupValidator, validateResults } = require("../validator/index");

router.get("/", (req, res) => {
	res.send("we are happy here.");
});
router.post("/signup", userSignupValidator, validateResults, signup);

router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;
