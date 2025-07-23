const express = require("express")
const app = express()

let port =8080

app.listen(port , ()=>{
    console.log(`listening on port ${port}`);
})
app.use((req,res)=>{
    console.log("received"); 

    //res.send("sent")
    
    // res.send({
    //     fruit:"apple"
    // });
    let fruit = "<h1>Fruits</h1> <ul>Apple</ul>"
    res.send(fruit);
})
