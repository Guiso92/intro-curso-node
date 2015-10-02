var net = require('net');
var sockets = [];

var server = net.createServer(function (s) {
//definir que hago con cada socket s
	socket.push(s);
	s.write("Bienvenido al chat");

	s.on('data', function(d){
		sockets.forEach(function(v,i){
			if(v!==s){
			v.write(d)
			}
		});
	});

sockets.on("end", function(){
	var index = sockets.indexof(s);
	delete sockets[index]
});
});

server.listen(1337, '127.0.0.1');
