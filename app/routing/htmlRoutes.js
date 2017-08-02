var path = require('path');
var fs = require('fs');

//ROUTING

module.exports = function(app){
  
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname + "/../public/survey.html"));
  });

  app.use(function (req, res) {
    res.sendFile(path.join(__dirname + '/../public/homepage.html'));
  });

  //a USE route to home page
  /*app.get("/", (function (req, res) {
    res.sendFile(path.join(__dirname, "homepage.html"));
  });*/
};

/*function displaySurvey(url, req, res) {
  // Here we use the fs package to read our index.html file
  fs.readFile(__dirname + "/survey.html", function(err, data) {

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(data);
  });
  
}*/