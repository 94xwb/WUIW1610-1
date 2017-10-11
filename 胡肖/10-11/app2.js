var express = require('express');
var app=express();

app.use(function (req,res,next) {
    //中央
    req.money=10000;
    next();
})
app.use(function (req,res,next) {
    //省里
    req.money=req.money-4000;
    console.log('省里');
    next(); //如果当前中间件没有终结请求-响应循环，则必须调用 next() 方法将控制权交给下一个中间件，否则请求就会挂起。
})
app.use(function (req,res,next){
    //市里
    req.money=req.money-2000;
    console.log('市里');
    next();

})
app.get('/',function (req,res) {
    res.send(req.money+'')
})
app.listen(3000)