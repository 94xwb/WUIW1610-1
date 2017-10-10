var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

var server = app.listen(3000,'localhost',function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('当前文件的地址：http://%s:%s', host, port);
});
