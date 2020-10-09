const router = require('express').Router();

const routes = require("../apiRoutes/routes");

router.use(routes);

module.exports = router;