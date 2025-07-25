const express = require("express")
const app = express()
const path = require("path")
let port = 8080

app.set("views",path.join(__dirname, "/views"));

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

//insta
app.get("/ig/:username" ,(req, res)=>{
    let {username} = req.params;
    res.render("instagram.ejs", {username});
})

app.listen(port , ()=>{
    console.log(`listening on port ${port}`)
})