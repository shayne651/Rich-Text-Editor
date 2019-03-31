//sudo systemctl start mong
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/text";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dataobject = db.db("textContent");
  var insert = {username:"shayne",content:'DHDHDHDHDHDH',bold:0,italics:0,fontsize:12}
  dataobject.collection("textContent").insertOne(insert,function(err,res){
  	if(err) throw err;
  })
  console.log("contentAdded");
  db.close();
});