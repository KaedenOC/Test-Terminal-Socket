//* */ Modularized Socket Server functions

const onAny = (event, payload, socket) => {
	console.log('Event:', event, payload);
};

const relayMessage = (payload, socket) => {
	socket.broadcast.emit('RELAY MESSAGE', payload);
};

const updateValue = (payload, socket) => {
	console.log('RELAYING UPDATE');
	socket.broadcast.emit('UPDATE VALUE', payload);
};

module.exports = { onAny, relayMessage, updateValue };
