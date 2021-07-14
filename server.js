let tab1 = require('./tab1.json')
let tab2 = require('./tab2.json')

const io = require('socket.io')({
    cors: {
        origin: ['http://localhost:3000']
    }
});

io.on('connection', socket => {
    console.log(`connect: ${socket.id}`);
    // socket.broadcast.emit('broadcast', 'hello friends!');
    socket.on('tab1', data => {
        io.emit('tab1', tab1);
    });

    socket.on('tab2', data => {
        io.emit('tab2', tab2);
    });

    socket.on('disconnect', () => {
        console.log(`disconnect: ${socket.id}`);
    });
});

io.listen(3001);

setInterval(() => {
    io.emit('tab1', tab1);
    io.emit('tab2', tab2);
}, 1000);

