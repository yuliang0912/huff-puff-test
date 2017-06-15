/**
 * Created by yuliang on 2017/4/21.
 */


var net = require('net');

var HOST = '127.0.0.1';
var PORT = 3055;

var client = new net.Socket();
client.connect(PORT, HOST, function () {
    console.log('CONNECTED TO: ' + HOST + ':' + PORT);
    // 建立连接后立即向服务器发送数据，服务器将收到这些数据
    var i = 0;
    setInterval(function () {
        sendMsg(client)
    }, 1000)

});

function sendMsg(client, i) {
    return new Promise(function (resolve, reject) {
        client.write('I am Chuck Norris!');
        resolve(true)
    })
}

// 为客户端添加“data”事件处理函数
// data是服务器发回的数据
client.on('data', function (data) {
    console.log('DATA1: ' + data);
    // 完全关闭连接
    //client.destroy();
});

// 为客户端添加“close”事件处理函数
client.on('close', function () {
    console.log('Connection closed');
});