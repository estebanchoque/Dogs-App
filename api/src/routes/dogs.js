const router = require("express").Router();
const { getDogs, getDogDetail } = require("./controllers/dogs");

router.use("/:id", getDogDetail);
router.use("/", getDogs);

module.exports = router;
