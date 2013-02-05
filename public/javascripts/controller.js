var socket = io.connect(null, { port: 8080 });
$(function() {
    $("#next").click(function(e) {
	e.preventDefault();
	socket.emit('next_slide', {});
	socket.on('advance_slide', function(data) {
	    console.log('advance_slide called');
	});
    });
});
