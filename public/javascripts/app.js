var socket = io.connect('http://localhost:3001');
$(function() {
    $.deck('.slide');
    socket.on('test', function(data) {
	console.log('recieved test');
    });
    socket.on('advance_slide', function(data) {
	console.log('advance slide recieved');
	$.deck('next');
    });
});