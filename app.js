const express= require("express");
const bodyParser = require("body-parser")
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(__dirname + '/public'));

let newLists = []

app.get("/", function(req,res) {
   
    let today = new Date()
    
    
    const options = {
        weekday:"long",
        day : "numeric",
        month: "long"
    }

    const day = today.toLocaleDateString("en-US", options)

    res.render('list', {day:day,newLists:newLists })
    
})

app.post("/", function(req,res) {
   const newList = req.body.listItem
    newLists.push(newList)
    res.redirect("/")
})


 





app.listen(3000, function(){
    console.log("Port 3000 active");
})