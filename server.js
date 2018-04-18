const express = require("express");
const app = express();

const path = require("path");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use(express.static("client/build"));

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017", function (err, client) {
  if(err){
    console.log(err);
    return;
  }

  const db = client.db("bucket_list_db");

  app.get("/bucket_list", function(req, res){
    const countriesCollection = db.collection("countries");
    countriesCollection.find().toArray(function(err, countries){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.json(countries);
    });
  })

  app.post("/bucket_list", function(req, res){

    const countriesCollection = db.collection("countries");
    const countryToSave = req.body;

    countriesCollection.save(countryToSave, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      console.log("Saved to DB!");

      res.status(201);
      res.json(countryToSave);
    })
  });

  app.delete("/bucket_list", function(req, res){
    const countriesCollection = db.collection("countries");


    const filterObject = {};

    countriesCollection.deleteMany(filterObject, function(err, result){
      if(err){
        console.log(err);
        res.status(500);
        res.send();
      }

      res.status(204);
      res.send();
    });
  })


  app.listen(3000, function(){
    console.log("Listening for requests on port 3000!");
  });
});
