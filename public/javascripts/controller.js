var socket = io.connect('http://localhost:3001');

$(function() {
    $("#next").click(function(e) {
	e.preventDefault();
	console.log('next_slide sent');
	socket.emit('next_slide', {});
    });
    socket.on('advance_slide', function(data) {
	console.log('advance_slide recieved');
    });
    socket.on('test', function(data) {
	console.log('test recieved');
    });
});
