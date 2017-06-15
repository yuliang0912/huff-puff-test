/**
 * Created by yuliang on 2017/4/25.
 */

var numCPUs = require('os').cpus().length,
    cp = require('child_process'),
    net = require('net');

var workers = [];
for (var i = 0; i < numCPUs; i++) {
    workers.push(cp.fork('app.js', ['normal']));
}

net.createServer(function (socket) {
    socket.pause();
    var worker = workers.shift();
    worker.send('server', socket);
    workers.push(worker);
}).listen(3055);