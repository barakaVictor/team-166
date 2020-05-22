var router = require('express').Router();

/* GET users listing. */
router.get('/', function(_request, response, _next) {
  response.status(200).json(
    {
      message: 'respond with a resource'
    }
    );
});

module.exports = router;
