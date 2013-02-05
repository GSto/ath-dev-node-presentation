var socket = io.connect(null, { port: 8080 });
$(function() {
    $.deck('.slide');
    socket.on('move_slide', function(data) {
	if(data.direction == 'next') {
	    $.deck('next');
	} else {
	    $.deck('prev');
	}
    });
});