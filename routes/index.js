var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.post("/DSL", async (req, res) => {
  const input = req.body;

  const response = await fetch("http://localhost:8080/execute", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      sensorState: input.sensorState
    })
  });

  const data = await response.json();

  res.json(data);
});