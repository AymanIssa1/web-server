var express = require('express');
var app = express();

var PORT = 3000;

var middleware = {
    requireAuthentication : function (request , response, next) {
        console.log('private route hit !');
        next();
    },
    logger: function(request,response,next) {
        var date = new Date().toString();
        console.log('Request: ' + date + ' ' + request.method+ ' ' + request.originalUrl);
        next();
    }
};

// app.use(middleware.requireAuthentication);
app.use(middleware.logger);





// app.get('/',function (request,response) {
//     response.send('Hello Expresso !');
// });


app.get('/about', function (request,response) {
    response.send('About Us !');
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function () {
    console.log('Express server started at port : ' + PORT);
});