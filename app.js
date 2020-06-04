// This one will share screen but no sockets implemented yet

const express = require('express');
var app = express();
const path = require('path');
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
// Setup the routing to default to /views
const publicDirectoryPath = path.join(__dirname, './views');
  
  // Express server that uses the default directory path above
  app.use(express.static(publicDirectoryPath))
  app.get('/', (req, res) => {
      res.sendFile(__dirname + '/views/index.html');
  });



  // SOCKETS
  io.on('connection', function(socket){
    //console.log('a user connected!');
    
    // TESTING - listens for msg from index.html testing socket
    socket.on('testing', function(msg){
        console.log('here is the video from indexhtml:',msg);
        //io.emit('push',msg)
        });
    
    // TESTING - sends this msg to testing channel
    //io.emit('testing',' this is from appjs');

}); // End IO

  // EXPRESS SERVER START UP
  http.listen(port, function(){
    console.log('Listening on *:' + port);
  });