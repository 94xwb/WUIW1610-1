var express = require("express");
var app = express();
app.use(express.static('static'));
app.use('/static',express.static('static'));
var server = app.listen(3000,'localhost',function(){
    console.log("http://%s:%s",server.address().address,server.address().port);
})
