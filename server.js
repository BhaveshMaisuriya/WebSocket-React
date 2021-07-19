let tab1 = require('./tab1')
let tab2 = require('./tab2')
let clients = [];

const io = require('socket.io')({
    cors: {
        origin: ['http://localhost:3000']
    }
});

io.on('connection', socket => {
    console.log(`connect: ${socket.id}`);
    clients.push(socket);
    socket.on('tab1', data => {
        io.emit('tab1', tab1.tab1);
    });

    socket.on('tab2', data => {
        setInterval(() => {
            io.emit('tab2', DynamicData(tab2.tab2));
        }, 2000);
    });

    socket.on('disconnect', () => {
        clients.splice(clients.indexOf(socket), 1);
        console.log(`disconnect: ${socket.id}`);
    });
});

io.listen(3001);

const DynamicData = ((data) => {
    let newdata = [...data];
    return newdata.map(obj => {
        let temp = { ...obj }
        temp.ATM = Math.floor(Math.random() * 3.9) + 1
        return temp;
    });
});

setInterval(() => {
    io.emit('tab1', DynamicData(tab1.tab1));
}, 2000);
