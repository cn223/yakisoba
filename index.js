// This crappy piece of code was made by Geshi : https://github.com/initmd | @aoi@miruku.cafe

var ip = require("ip");
var os = require("os");
const {spawn} = require('child_process');

// Cringe thing, took from another project I made for an internship
var logger = require('./src/logger/logger.js')


// Webserver
console.log('Starting webserver service...')
var webserver = require('./src/web/index.js');

// Python
// const python = spawn('python', ['./src/python/main.py']);
// python.stdout.on('data', function (data) {
//  console.log('Pipe data from python script ...');
// });


//  ░░▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒░░░░░░░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▒▒▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
//  ▒▒▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒░░▒▒░░▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▓▓▓▓▒▒▒▒▒▒▒▒▓▓▓▓▓▓▓▓▓▓▓▓██▒▒▓▓▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒░░▒▒░░▒▒▒▒░░░░░░▒▒░░
