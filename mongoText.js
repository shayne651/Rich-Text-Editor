//sudo systemctl start mong
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/text";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dataobject = db.db("textContent");
  var insert = new Array(7)
  insert[0] = {username:"acc1",content:'account - acc1',bold:1,italics:0,fontsize:12}
  insert[1] = {username:"acc2",content:'account - acc2',bold:0,italics:1,fontsize:19}
  insert[2] = {username:"account",content:'account - account',bold:1,italics:0,fontsize:22}
  insert[3] = {username:"profile1",content:'account - profile1',bold:0,italics:0,fontsize:32}
  insert[4] = {username:"fake-login",content:'account - fake-login',bold:1,italics:1,fontsize:42}
  insert[5] = {username:"noanaccount",content:'account - notanaccount',bold:1,italics:0,fontsize:52}
  insert[6] = {username:"shayne",content:'account - shayne',bold:0,italics:1,fontsize:62}
  
  dataobject.collection("textContent").insertMany(insert,function(err,res){
  	if(err) throw err;
  })
  console.log("contentAdded");
  db.close();
});