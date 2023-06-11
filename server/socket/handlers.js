//* */ Modularized Socket Server functions

const onAny = (event, payload, socket) => {
	console.log('Event:', event, payload);
};

const relayMessage = (payload, socket) => {
	socket.broadcast.emit('RELAY MESSAGE', payload);
};

module.exports = { onAny, relayMessage };
