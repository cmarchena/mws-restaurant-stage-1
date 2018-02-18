var express = require("express");
var app = express();
var path = require("path")

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/src/index.html"));
});
app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/src/restaurant.html"));
})
app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});