var express =require('express');
var path =require('path');
var app = express();


app.use(express.static('public'));

app.listen(5000,function(){
    console.log("connectd");
})