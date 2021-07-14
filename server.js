let tab1 = [
  {
      "time": "1m",
      "expDate": "05 July, 2021",
      "ATM": 7.10,
      "dr25": -0.2,
      "dr10": -0.2,
      "db25": -0.2,
      "db10": -0.2
  },
  {
      "time": "1m",
      "expDate": "05 July, 2021",
      "ATM": 7.10,
      "dr25": -0.2,
      "dr10": -0.2,
      "db25": -0.2,
      "db10": -0.2
  },
  {
      "time": "1m",
      "expDate": "05 July, 2021",
      "ATM": 7.10,
      "dr25": -0.2,
      "dr10": -0.2,
      "db25": -0.2,
      "db10": -0.2
  },
  {
      "time": "1m",
      "expDate": "05 July, 2021",
      "ATM": 7.10,
      "dr25": -0.2,
      "dr10": -0.2,
      "db25": -0.2,
      "db10": -0.2
  },
  {
      "time": "1m",
      "expDate": "05 July, 2021",
      "ATM": 7.10,
      "dr25": -0.2,
      "dr10": -0.2,
      "db25": -0.2,
      "db10": -0.2
  },
  {
      "time": "1m",
      "expDate": "05 July, 2021",
      "ATM": 7.10,
      "dr25": -0.2,
      "dr10": -0.2,
      "db25": -0.2,
      "db10": -0.2
  },
  {
      "time": "1m",
      "expDate": "05 July, 2021",
      "ATM": 7.10,
      "dr25": -0.2,
      "dr10": -0.2,
      "db25": -0.2,
      "db10": -0.2
  },
  {
      "time": "1m",
      "expDate": "05 July, 2021",
      "ATM": 7.10,
      "dr25": -0.2,
      "dr10": -0.2,
      "db25": -0.2,
      "db10": -0.2
  },
  {
      "time": "1m",
      "expDate": "05 July, 2021",
      "ATM": 7.10,
      "dr25": -0.2,
      "dr10": -0.2,
      "db25": -0.2,
      "db10": -0.2
  },
  {
      "time": "1m",
      "expDate": "05 July, 2021",
      "ATM": 7.10,
      "dr25": -0.2,
      "dr10": -0.2,
      "db25": -0.2,
      "db10": -0.2
  }
];
let tab2 = [
    {
        "time": "1m",
        "expDate": "05 July, 2021",
        "ATM": 8.14,
        "call25": -0.4,
        "call10": -0.4,
        "put25": -0.4,
        "put10": -0.4
    },
    {
        "time": "1m",
        "expDate": "05 July, 2021",
        "ATM": 8.14,
        "call25": -0.4,
        "call10": -0.4,
        "put25": -0.4,
        "put10": -0.4
    },
    {
        "time": "1m",
        "expDate": "05 July, 2021",
        "ATM": 8.14,
        "call25": -0.4,
        "call10": -0.4,
        "put25": -0.4,
        "put10": -0.4
    },
    {
        "time": "1m",
        "expDate": "05 July, 2021",
        "ATM": 8.14,
        "call25": -0.4,
        "call10": -0.4,
        "put25": -0.4,
        "put10": -0.4
    },
    {
        "time": "1m",
        "expDate": "05 July, 2021",
        "ATM": 8.14,
        "call25": -0.4,
        "call10": -0.4,
        "put25": -0.4,
        "put10": -0.4
    },
    {
        "time": "1m",
        "expDate": "05 July, 2021",
        "ATM": 8.14,
        "call25": -0.4,
        "call10": -0.4,
        "put25": -0.4,
        "put10": -0.4
    },
    {
        "time": "1m",
        "expDate": "05 July, 2021",
        "ATM": 8.14,
        "call25": -0.4,
        "call10": -0.4,
        "put25": -0.4,
        "put10": -0.4
    },
    {
        "time": "1m",
        "expDate": "05 July, 2021",
        "ATM": 8.14,
        "call25": -0.4,
        "call10": -0.4,
        "put25": -0.4,
        "put10": -0.4
    },
    {
        "time": "1m",
        "expDate": "05 July, 2021",
        "ATM": 8.14,
        "call25": -0.4,
        "call10": -0.4,
        "put25": -0.4,
        "put10": -0.4
    },
    {
        "time": "1m",
        "expDate": "05 July, 2021",
        "ATM": 8.14,
        "call25": -0.4,
        "call10": -0.4,
        "put25": -0.4,
        "put10": -0.4
    }
];

const io = require('socket.io')({
  cors: {
    origin: ['http://localhost:3000']
  }
});



io.on('connection', socket => {
  console.log(`connect: ${socket.id}`);

  socket.on('tab1', () => {
    io.emit('tab1', tab1);
  });

  socket.on('tab2', () => {
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
