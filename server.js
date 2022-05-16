const express = require ('express');
var path = require('path');
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
    var options = {
        root: path.join(__dirname)
    };
     
    var fileName = 'App.html';
    res.sendFile(fileName, options, function (err) {
        if (err) {
            next(err);
        } else {
            console.log('Sent:', fileName);
        }
    });
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
