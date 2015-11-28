



var five = require('johnny-five');
var Hapi = require('hapi');


var server = new Hapi.Server();
server.connection({
	routes: {
		cors: true
	},
	host: '192.168.1.17', 
    port: 8000
});

server.route({
	method: 'GET',
	path: '/ping',
	handler: function (request, reply) {
		return reply();
	}
});

// Light the L del on every request
server.ext('onRequest', function (request, reply) {
   	var led = new five.Led();

   	led.on();
    setTimeout(function() {
        led.off();
    }, 10);

    return reply.continue();
});

server.route(require('./routes'));

// Initializing the board
var board = five.Board();
board.on('ready', function () {

	// When the board is ready, we run the server
	server.start(function (error) {
	    if (error) {
	        throw error;
	    }

	    console.log('Server running at: ', server.info.uri);
	});
});