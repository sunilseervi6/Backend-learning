const express = require("express")
const app = express()

let port =8080

app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
})

// app.use to run for all the request

// app.use((req,res)=>{
//     console.log("received"); 

//     res.send("sent")
    
//     // res.send({
//     //     fruit:"apple"
//     // });
//     // let fruit = "<h1>Fruits</h1> <ul>Apple</ul>"
//     // res.send(fruit);
// })


// routing
app.get("/",(resq, res)=>{
    res.send("hello, i am root");
})
// app.get("/apple", (req, res)=>{
//     res.send("you sent to path apple");
// })


//path parameters
app.get("/:username/:id", (req,res)=>{
    let username = req.params.username;
    let id = req.params.id;
    res.send(`Welcome to the page of @${username}.`);

})

//Query strings
app.get("/search", (req, res)=>{
    console.log(req.query);
    let {q,p} = req.query;
     
    res.send(`You searched for the query: ${q} and page ${p}`);
})