var express = require('express');
var app = express();
var parser = require('body-parser');
var mongoose = require('mongoose');
var login = require("./login_model.js");
var MongoClient = require('mongodb').MongoClient


var urlEncode = parser.urlencoded({extended:false});

app.use(express.static('resources'));
app.set('view engine','pug');

var server = app.listen(3000,function(){
	console.log("working");
});

app.get('/',function(req,res){
	res.render('login');
})

app.post('/auth',urlEncode,function(req,res){
	var username = req.body.username;
	var pass = req.body.pass;
	mongoose.connect('mongodb://localhost:27017/accounts');
	login.findOne({username:username},function(err,obj){
		mongoose.connection.close();
		if(obj.password == pass){
			url='mongodb://localhost:27017/textContent';
			mongoose.connect(url);
			MongoClient.connect(url, function(err, obj) {
			var dataobject = obj.db("textContent").collection("textContent");
				if (err) throw err;
				dataobject.findOne({username:username},function(err,obj){
					if (err) {
						res.render('editor',{username:username,content:"",bold:0,italics:0,fontsize:12});
					}
					console.log(obj);
					res.render('editor',obj);
					mongoose.connection.close();
				})
			});
		}else{
			console.log("NO");
		}
		if(err || !obj){
			console.log(err);
		}
	});
});

app.post('/',urlEncode,function(req,res){
	var url = ("mongodb://localhost:27017/textContent");
	var content = req.body.content;
	var username = req.body.username;
	var bold = parseInt(req.body.bold);
	var italic = parseInt(req.body.italic);
	var fontSize = parseInt(req.body.font_size);
	var insert = {username:username,content:content,bold:bold,italics:italic,fontsize:fontSize}

	MongoClient.connect(url, function(err, obj) {
		var dataobject = obj.db("textContent").collection("textContent");
		if (err) {
			console.log("err");
			throw err;
		}
		dataobject.deleteOne({username:username},function(err,obj){
			dataobject.insertOne(insert,function(err,res){
				mongoose.connection.close();
			//throw err;
				console.log("created")
			});

		});
	});
	res.render('login')
});