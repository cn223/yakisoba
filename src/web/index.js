// const cv2 = require('opencv4nodejs')
const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const port = 3030

app.use(express.static(path.join(__dirname, 'public')))

const server = require('http').Server(app);
const io = require('socket.io')(server);

app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index');
});

/* const FPS = 30;
const Vcap = new cv2.VideoCapture(0);
Vcap.set(cv2.CAP_PROP_FRAME_WIDTH, 300);
Vcap.set(cv2.CAP_PROP_FRAME_HEIGHT, 300);

setInterval(() => {
    const frame = Vcap.read();
    const image = cv2.imencode('.jpg', frame).toString('base64');
    io.emit('image', image);
}, 1000 / FPS); */
// There is no camera on the Github Codespaces server, however this piece of code works

server.listen(port, () => {
  console.log(`Webserver is up and running on ${port}`)
})

