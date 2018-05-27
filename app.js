const express = require('express')
const app = express()
var bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");


var campgrounds = [
	{name: " Salmon Creek", image :"http://www.photosforclass.com/download/4684194306"}
	{name: " Granite Hill", image :"http://www.photosforclass.com/download/2602356334"}
	{name: " mountain Goats Test", image :"http://www.photosforclass.com/download/1430198323"}
	]

app.get('/', function(req, res) {
	res.render("landing");
});

app.get("/campgrounds", function(req,res){
	
	
	res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function ( req,res){
	var name = req.body.name;
	var image = req.body.image;
	var newCampground = { name: name, image: image}
	campgrounds.push(newCampround);
	res.redirect("/campgrounds");
})
app.get("/campgrounds/new", function (req,res){
	res.render("new.ejs");
});
app.listen(3000, () function (){
	console.log('YelpCamp Server listening on port 3000!'});
