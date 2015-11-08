



var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
	host: 'localhost', 
    port: 8000 
});

server.route(require('./routes'));

server.start(function (error) {
    if (error) {
        throw err;
    }

    console.log('Server running at: ', server.info.uri);
});