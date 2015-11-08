



var DIRECTION = {
	FORWARD:  "forward",
	BACKWARD: "backward",
	LEFT:     "left",
	RIGHT:    "right"
};

var Drone = {
	moveForward: function (callback) {
		// TODO
		callback();
	},
	moveBackward: function (callback) {
		// TODO
		callback();
	},
	moveLeft: function (callback) {
		// TODO
		callback();
	},
	moveRight: function (callback) {
		// TODO
		callback();
	},
	move: function (direction, callback, errorCallback) {
		if (DIRECTION.FORWARD == direction) {
			return this.moveForward(callback, errorCallback);
		
		} else if (DIRECTION.BACKWARD == direction) {
			return this.moveBackward(callback, errorCallback);
		
		} else if (DIRECTION.LEFT == direction) {
			return this.moveLeft(callback, errorCallback);
		
		} else if (DIRECTION.RIGHT == direction) {
			return this.moveRight(callback, errorCallback);
		
		}

		return errorCallback("direction should be in 'foward', 'backward', 'left' or 'right'");
	}
};

module.exports = Drone;