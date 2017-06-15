var server = require('net').createServer()

var port = 3055

server.on("connection", function (socket) {
    console.log('CONNECTED: ' + socket.remoteAddress + ':' + socket.remotePort);

    //socket.pipe(socket);

    socket.setTimeout(60000);
    socket.on("timeout", function () {
        socket.end('timeout');
    })

    socket.on("data", function (data) {
        socket.write(data);
    })

    socket.on("close", function () {
        console.log('CLOSED: ' + socket.remoteAddress + ' ' + socket.remotePort);
    })

    socket.on("drain", function () {
        console.log("drain")
    })

    socket.on("error", function (err) {
        console.log("error:" + err.toString())
    })
})

server.on('error', function (err) {
    console.log('Server error:', err.message);
});

server.on('close', function () {
    console.log('Server closed');
});

server.listen(port, function () {
    console.log(server.address());
})