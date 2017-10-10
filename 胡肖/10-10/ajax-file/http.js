var http = require('http');
var fs = require('fs');
var url=require('url');
var path=require('path');
var formidable = require('formidable');
var qs=require('querystring');
var sever=http.createServer((req,res)=>{
    var u=url.parse(req.url);
    if(u.pathname==='/favicon.ico'){
        res.end();
        return;
    }
    if(u.pathname==='/'||u.pathname==='/index.html'){
        fs.readFile('./index.html',function (err,data) {
            res.write(data);
            res.end();
        })
        return;
    }
    if(u.pathname=='/uploads'){
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
           fs.existsSync('./uploads')|| fs.mkdirSync('./uploads');
           var d=new Date();
            var date=d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
            fs.existsSync('./uploads/'+date)|| fs.mkdirSync('./uploads/'+date);
            var filename=d.getTime()+Math.floor(Math.random()*1000)+path.extname(files.avatar.name);
            var road='/uploads/'+date+'/'+filename;
            fs.readFile(files.avatar.path,function (err,data) {
                fs.writeFile('.'+road,data,function (err) {
                    res.end(road);
                })
            })
        });
        return;
    }
    if(fs.existsSync('.'+u.pathname)){
        fs.readFile('.'+u.pathname,function(err,data){
            console.log(data)
            res.end(data)
        })
    }
}).listen(8000);