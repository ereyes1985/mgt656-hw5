var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello MGT-656!');
});

app.get('/nickname', function(request, response){
    response.send('fair-tiger');
});

app.get('/anamaria', function(request, response){
    response.send('Hola Ana Maria es Quique tu papi');
});

app.listen(process.env.PORT || 4000);