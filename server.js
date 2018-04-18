const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// this will find any static file aka html css etc
app.use(express.static("client/build"));

 // listens at this port
  app.listen(3000, function(){
    console.log("Listening for requests on port 3000!");
  });
});
