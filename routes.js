



var Boom = require('boom');
var Drone = require('./models/drone');

var move = {
    method: 'POST',
    path:   '/move', 
    handler: function (request, reply) {
        console.log(request.payload);

    	if (!request.payload || !request.payload.direction) {
    		return reply(Boom.badRequest());
    	}

    	Drone.move(request.payload.direction, function (response) {
    		console.log(response);

            return reply(response);
    	}, function (error) {
    		return reply(Boom.badData(error));
    	});
    }
};

module.exports = [
	move
];