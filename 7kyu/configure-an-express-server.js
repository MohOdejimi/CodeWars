/* Your Task
Inside the solution function you have to require express and start a server.

The PORT and HOST are going to be pre-loaded in the process.env object (in a node application process.env stores the environment configuration).

process.env = {
  PORT: 3000,
  HOST: '0.0.0.0',
};
*/

// My Solution 
const solution = () => {
  var express = require('express');
  const port = 3000 
  var app = express()
  app.listen(process.env.PORT, process.env.HOST, () => {})
};