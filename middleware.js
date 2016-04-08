
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

module.exports = middleware;