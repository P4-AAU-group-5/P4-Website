var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;

router.post("/state", async (req, res) => {
  const input = req.body;

  const response = await fetch("https://api.example.com/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer YOUR_API_KEY"
    },
    body: JSON.stringify({
      simState: input.simState
    })
  });

  const data = await response.json();

  res.json(data);
});