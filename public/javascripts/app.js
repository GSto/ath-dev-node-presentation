var socket = io.connect();
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