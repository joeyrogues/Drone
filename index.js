



var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({
	routes: {
		cors: true
	},
	host: '192.168.1.17', 
    port: 3000
});

server.route({
	method: 'GET',
	path: '/ping',
	handler: function (request, reply) {
		return reply();
	}
});

server.route(require('./routes'));

server.start(function (error) {
    if (error) {
        throw error;
    }

    console.log('Server running at: ', server.info.uri);
});