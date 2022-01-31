const {spawn} = require('child_process');

// Webserver...
console.log('Starting webserver service...')
var webserver = require('./src/web/index.js');

// Python...
// const python = spawn('python', ['./src/python/main.py']);
// python.stdout.on('data', function (data) {
//  console.log('Pipe data from python script ...');
// });