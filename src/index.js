var express = require("express");
var app = express();
var path = require("path");
// var cors = require("cors");

// app.use(cors);
app.use(express.static('assets'));
// app.use('/static', express.static(__dirname + '/src/assets/'));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});
app.get("/restaurant", function(req, res){
    res.sendFile(path.join(__dirname + "/restaurant"));
})
app.listen(3001, function() {
  console.log("Example app listening on port 3001!");
});