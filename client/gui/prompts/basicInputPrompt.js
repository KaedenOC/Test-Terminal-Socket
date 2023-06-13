const { newLine } = require('../lib')

const basicInputPrompt = async (term, valueToUpdate, socket) => {
  newLine(term, false)
  term('please enter a prompt: ');

  let userInput = await term.inputField(async function (error, input) {
    term.green("\nYour prompt is '%s'\n", input)

    if (input.toLowerCase() === 'login') {
      // Prompt for login
      term('please enter a username: ');
      const username = await term.inputField('Username: ').promise;
      newLine(term, false);
      term('please enter a password: ');
      const password = await term.inputField('Password: ').promise;

      // Perform authentication logic here, e.g., check against database

      // Simulate successful login for demonstration purposes
      if (username === 'admin' && password === 'test') {
        newLine(term, false);
        term.green('Login successful!\n');
        socket.emit('BASIC INPUT', { input: 'login', valueToUpdate });
        // Additional logic after login
      } else {
        newLine(term, false);
        term.red('Invalid username or password.\n');
        // Handle invalid login
      }
    } else {
      socket.emit('BASIC INPUT', { input, valueToUpdate });
    }
  }).promise;

  return userInput; // Return the value of userInput
}

module.exports = basicInputPrompt;
