var express=require("express");
var request = require('request');
var bodyParser = require('body-parser')
var app=express();
app.use(bodyParser.urlencoded({ extended: true }))
var link;
var val;



app.get("/",function(req,res){
  res.render("main.ejs");
})


app.post("/search",function(req,res){
 
  link='http://www.omdbapi.com/?t='+req.body.title+'&apikey=thewdb';
  request(link, function (error, response, body) {
  
    val=JSON.parse(body)// Print the HTML for the Google homepage.
     console.log(val);
     res.render("list.ejs",{newVal:val});
  });
 

})

app.listen(3000,function(req,res){
    console.log("server connected")
})