var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("get方式");
});
app.post("/",function(req,res){
    res.send("post方式");
});
app.put("/list",function(req,res){
    res.send("put方式");
});
app.delete("/list",function(req,res){
    res.send("delete方式");
});
var server = app.listen(3000,'localhost',function(){
    console.log("http://%s:%s",server.address().address,server.address().port);
})
