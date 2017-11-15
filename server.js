var express = require("express"),
    bodyParser = require("body-parser"),
    app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine", "ejs");

var restaurants = [
        {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8167/7121865553_e1c6a31f07.jpg"},
        {name: "Granite Hill", image: "https://farm8.staticflickr.com/7258/7121861565_3f4957acb1.jpg"},
        {name: "Mountain Goat's Rest", image: "https://farm8.staticflickr.com/7259/7121858075_7375241459.jpg"}
    ];
    
app.get("/", function(req, res){
    res.render("landing");
});

app.get("/restaurants", function(req, res){

    res.render("restaurants", {restaurants: restaurants});
});

app.post("/restaurants", function(req, res){
    // get data from form and add to campgrounds array 
    var name = req.body.name;
    var image = req.body.image;
    var newRestaurant = {name: name, image: image}
    restaurants.push(newRestaurant);
    // redirect back to the campgrounds page
    res.redirect("/restaurants");
});

app.get("/restaurants/new", function(req, res) {
    res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("the server is connected");
});