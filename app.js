const express = require("express");
const bodyParser = require ("body-parser");
const date=require(__dirname+"/date.js");


const app = express();
const items =["Buy food","cook food","eat food"];
const workItems=[];
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req,res){

   

  

   /* var currentDay =today.getDay();
    var day="";

    if(currentDay === 0){
        day = "sunday";
        
        //res.render("list",{kindOfDay: day});
    }
    else  if(currentDay === 1){
        day = "monday";
        
        //res.render("list",{kindOfDay: day});
    }
    else  if(currentDay === 2){
        day = "tuesday";
        
        //res.render("list",{kindOfDay: day});
    }
    else  if(currentDay === 3){
        day = "Wednesday";
        
        //res.render("list",{kindOfDay: day});
    }
    else  if(currentDay === 4){
        day = "thursday";
        
        //res.render("list",{kindOfDay: day});
    }
    else  if(currentDay === 5){
        day = "friday";
        
        //res.render("list",{kindOfDay: day});
    }
    else{
        day="saturday";
       // res.render("list",{kindOfDay: day});
    } 

    switch(currentDay){
        case 0:
            day ="Sunday";
            break;
        case 1:
            day ="Monday";
            break;
        case 2:
            day ="Tuesday";
            break;
        case 3:
            day ="Wednesday";
            break;
        case 4:
            day ="Thursday";
            break;
        case 5:
            day ="Friday";
            break;
        case 6:
            day ="Saturday";
            break;
        default:console.log("error");
        

    } */

    const day=date.getDate();

    res.render("list",{listTitle: day, newListItems: items});

});
app.post("/",function(req,res){
    const item = req.body.newItem;
if(req.body.list ==="work List"){
    workItems.push(item);
    res.redirect("/work");

}

   else{ 
    items.push(item);
    res.redirect("/");
}
   
});
app.get("/work",function(req,res){
    res.render("list",{listTitle: "work List",newListItems: workItems});
});

app.post("/work",function(req,res){
    let item= req.body.newItem;
    workItems.push(item);
    res.redirect("/work");

})

app.listen(3000, function(){
    console.log("server started at the port 3000");
});


