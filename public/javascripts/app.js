var socket = io.connect(null, { port: 8080 });
$(function() {
    $.deck('.slide');
    socket.on('advance_slide', function(data) {
	$.deck('next');
    });
});