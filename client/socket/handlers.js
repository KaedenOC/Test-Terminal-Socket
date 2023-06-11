//* */ Modularized Socket Server functions

const changeState = (payload, socket) => {
  socket.emit('CHANGE STATE', payload)
}

const sendMessage = (payload, socket) => {
  socket.emit('SEND MESSAGE', payload)
}

const receiveMessage = (term, payload, socket) => {
  term.blue('message received', JSON.stringify(payload))
}

const receivedMessage = (payload, socket) => {
  socket.emit('RECEIVED MESSAGE', payload)
}

const updateValue = (payload, state) => {
  state[payload.valueToUpdate] = payload.input
}

module.exports = {
  changeState,
  sendMessage,
  receiveMessage,
  receivedMessage,
  updateValue,
}
