//sudo systemctl start mongodb


function compileTemplate(name,val){
	const pug = require('pug');
	const compFile = pug.compileFile(name)
}

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/accounts";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dataobject = db.db("accounts");
  var insert = new Array(6);
  insert[0] =({username:'acc1',password:'pass'});
  insert[1] =({username:'acc2',password:'pass1'});
  insert[2] =({username:'profile1',password:'secret'});
  insert[3] =({username:'account',password:'notpassword'});
  insert[4] =({username:'fake-login',password:'realpassword'});
  insert[5] =({username:'notanaccount',password:'justkidding'});
  dataobject.collection("logins").insertMany(insert,function(err,res){
  	if(err) throw err;
  })
  console.log("logins added");
  db.close();
});