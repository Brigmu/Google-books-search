const router = require("express").Router();
const apiroutes = require('./apiroutes')

router.use("/api/books", apiroutes)
  
module.exports = router;