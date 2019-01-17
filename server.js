var express = require("express.js");

var app = express();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.listen(3500, function() {
  console.log("Example app listening on port 3000!");
});
