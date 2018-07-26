const path =require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT ||3000;


// console.log(__dirname +'/../public');
// console.log(publicPath);

var app = express();

var server = http.createServer(app);
var io = socketIO(server);



app.use(express.static(publicPath));
io.on('connection',(socket)=>{
    console.log('New user connected!');

    // socket.emit('newEmail',{
    //     from : 'sowmith@example.com',
    //     text : 'How are you?',
    //     createAt :156
    // });

    socket.emit('newMessage',{
        from:'John',
        text:'See you later!',
        createAt:14545
    })

    // socket.on('createEmail',(newEmail)=>{
    //     console.log('createEmail',newEmail)
    // });

    socket.on('createMessage',(message)=>{
        console.log('createMessage',message);
    });


    socket.on('disconnect',function(){
        console.log('User is disconnected from server!!!!');
    });
});



server.listen(port,()=>{
    console.log(`Server is up on port ${port}`);
});