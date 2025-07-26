const express = require("express")
const app = express()
const path = require("path")
let port = 8080

//for accessing view if server run from another directory or parent dir
//tells express where your ejs files are..
app.set("views",path.join(__dirname, "/views"));

//serving static files using the below
//app.use(express.static(foldername))---------syntax

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));

//tells express to use EJS as default template/ view engine
//express automatically looks for a file like views/home.ejs
app.set("view engine", "ejs");
app.get("/", (req, res)=>{
    res.render("home.ejs");
})

app.get("/hello", (req, res)=>{
    res.send("hello");
})

//passing data to ejs
app.get("/rollDice" , (req, res)=>{
    let dice = Math.floor(Math.random() * 6 + 1);
    res.render("rollDice.ejs", {dice});
})


//instagram page with EJS....sample jsondata which contains info about cats and dogs
app.get("/ig/:username" ,(req, res)=>{
    const instaData = require("./data.json");
    const {username}  = req.params;
    const data = instaData[username];
    if(data){
        res.render("instagram.ejs", {data})
    }
    else{
        res.render("error.ejs");
    }
})

app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
})