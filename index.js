// Require dotenv very first
require('dotenv').config()
// establish port
const PORT = process.env.PORT

//? Express server
const express = require('express')
const app = express()
//? integrate websockets into express server
const http = require('http')
const server = http.createServer(app)
//? create a socket server out of the express server
const { Server } = require('socket.io')
const io = new Server(server)

//* Express base route */
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

const {
  onAny,
  sendMessage,
  relayMessage,
  receivedMessage,
  updateValue,
} = require('./server/socket/handlers')

//* Socket server base connection logic */
io.on('connection', socket => {
  console.log('a user connected')

  socket.onAny((event, payload) => onAny(event, payload))

  // send this socket to the handler so it can use broadcasting
  socket.on('SEND MESSAGE', payload => relayMessage(payload, socket));
  socket.on('BASIC INPUT', payload => updateValue(payload, socket));
})

//* Express server with websocket connection started */
server.listen(PORT, () => {
  console.log('listening on *', PORT)
})
