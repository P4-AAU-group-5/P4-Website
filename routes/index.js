var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.get('/state', (req, res) => {
  /* http request to DSL API
     - contains: simulation state
     - expects: new device state

     Should handle timeout
  */

})