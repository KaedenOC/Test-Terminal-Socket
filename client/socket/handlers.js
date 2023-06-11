//* */ Modularized Socket Server functions

const changeState = (payload, socket) => {
	socket.emit('CHANGE STATE', payload);
};

const sendMessage = (payload, socket) => {
	socket.emit('SEND MESSAGE', payload);
};

const receiveMessage = (payload, socket) => {
	console.log('message received', payload);
};

const receivedMessage = (payload, socket) => {
	socket.emit('RECEIVED MESSAGE', payload);
};

const updateValue = (payload, state) => {
	console.log(state[payload.valueToUpdate]);
	state[payload.valueToUpdate] = payload.input;
};

module.exports = {
	changeState,
	sendMessage,
	receiveMessage,
	receivedMessage,
	updateValue,
};
