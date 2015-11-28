



var DIRECTION = {
	FORWARD:  "forward",
	BACKWARD: "backward",
	LEFT:     "left",
	RIGHT:    "right"
};

var five = require('johnny-five');

var speed = 0;
var motor = null;

var DroneRoutes = {
	_move: {
		forward: function (callback) {
			speed = speed + 25
			if (speed > 255) {
				console.log('speed MAX');
				speed = 255
			}

			motor.forward(speed);
			callback();
		},
		backward: function (callback) {
			speed = speed - 25
			if (speed < 0) {
				console.log('speed ZERO');
				speed = 0
			}

			motor.forward(speed);

			callback();
		},
		left: function (callback) {
			callback();
		},
		right: function (callback) {
			callback();
		}
	},
	move: function (direction, callback, errorCallback) {
		if (!motor) {
			motor = new five.Motor(3);
			console.log("Move: Instantiated motor");
		}

		if (this._move[direction]) {
			this._move[direction](callback, errorCallback);
		} else {
			errorCallback('Drone.move: Malformed parameter');
		}
	}
};

module.exports = DroneRoutes;