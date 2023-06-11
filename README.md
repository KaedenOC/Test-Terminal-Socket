# Test-Terminal-Socket

testing features of terminal-kit and sockeet servers

## Steps for use!

- Create 2 terminals and put them side by side.
- in the first terminal at `root` directory `node .`
- in the second terminal `cd client/gui` and `node .`

  - Now that the client and server are connected press `p` to enter a prompt
  - You are in `prompt state` Type in your prompt and press enter to submit
  - You are now in the `menu state`. You can do different actions in different states.
  - press `v` to view your current state and newly updated prompt!!!
  - `END`, or `CTRL+C`to terminate your client terminal.

### Read more

- Be sure to read the comments to understand the exact flow of things, how its modularized and how to the client is using and updating its own state.

_For example_, There are certain blockers when working with the socket server and the terminal kit so the best way to manage these state and variables is to just use the socket/client connection to update and manage the state for you with events that talk only between the client and the server without broadcasting to everyone else.
