var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(_request, response, _next) {
  response.status(200).json(
    { message: 'Hello World from Express' }
    );
});

module.exports = router;
