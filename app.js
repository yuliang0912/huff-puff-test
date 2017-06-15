/**
 * Created by yuliang on 2017/4/25.
 */

var http = require('http'),
    cp = require('child_process'),
    net = require('net');

// var server = http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-Type": "text/plain", "Connection": "close"});
//     res.end("hello, world");
// });
//
// var server = net.createServer()
//
// server.on("connection", function (socket) {
//     console.log('CONNECTED: ' + socket.remoteAddress + ':' + socket.remotePort);
//     socket.setTimeout(60000);
//     socket.on("timeout", function () {
//         socket.end('timeout');
//     })
//
//     socket.on("data", function (data) {
//         socket.write(data);
//     })
//
//     socket.on("close", function () {
//         console.log('CLOSED: ' + socket.remoteAddress + ' ' + socket.remotePort);
//     })
//
//     socket.on("drain", function () {
//         console.log("drain")
//     })
//
//     socket.on("error", function (err) {
//         console.log("error:" + err.toString())
//     })
// })
//
// server.on('error', function (err) {
//     console.log('Server error:', err.message);
// });
//
// server.on('close', function () {
//     console.log('Server closed');
// });


console.log("TcpServer started on " + process.pid);

process.on("message", function (msg, socket) {
    process.nextTick(function () {
        if (msg == 'server' && socket) {
            // server.emit("connection", socket)
            // return;
            socket.setTimeout(60000);
            socket.on("timeout", function () {
                socket.end('timeout');
            })

            socket.on("data", function (data) {
                socket.write('true');
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
        }
    });
});