//* */ Modularized Socket Server functions

const onAny = (event, payload, socket) => {
  console.log('Event:', event, payload)
}

const relayMessage = (payload, socket) => {
  // relay the message to everyone BUT THE SENDER
  socket.broadcast.emit('RELAY MESSAGE', payload)
}

const updateValue = (payload, socket) => {
  // relay the message back to ONLY THE SENDER
  socket.emit('UPDATE VALUE', payload)
}

module.exports = { onAny, relayMessage, updateValue }
