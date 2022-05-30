const express = require ('express');
var path = require('path');
const app = express();
app.use(express.static(__dirname + '/public'));
const ads = require("./data");
let data;

const getData = (screenNumber) => { // << the ads array (with active screen number)
  return ads.filter((item) => item.screens.includes(screenNumber));
};

app.get('/', function(req, res){
  var options = {
      root: path.join(__dirname)
  };
  var fileName = 'App.html';
  if (req?.query && req.query?.screen) {
    data = getData(req.query.screen);
    console.log(data);
    res.sendFile(fileName, options, function (err) {
      if (err)
      next(err);
      else  
      console.log('Sent:', fileName);
    })
  } else res.send("please specify a screen");
});




app.get("/logic.js", function (req, res) { // שולח את המערך
  res.sendFile(__dirname + "/logic.js");
});

app.get("/data", function (req, res) { // שולח את המערך
  res.send(data);
});

app.get("/Loading/Loading.html", function (req, res) {
  res.sendFile(__dirname + "/Loading/Loading.html");
});
  
app.get("/Template1/Template1.html", function (req, res) {
  res.sendFile(__dirname + "/Template1/Template1.html");
});
  
app.get("/Template2/Template2.html", function (req, res) {
  res.sendFile(__dirname + "/Template2/Template2.html");
});

app.get("/Template3/Template3.html", function (req, res) {
  res.sendFile(__dirname + "/Template3/Template3.html");
});

app.listen(8080)
