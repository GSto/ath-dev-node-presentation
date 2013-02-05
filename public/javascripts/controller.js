var socket = io.connect(null, { port: 8080 });
$(function() {
    $("#next").click(function(e) {
	e.preventDefault();
	socket.emit('change_slide', { direction : 'next'});
    });

    $("#prev").click(function(e) {
	e.preventDefault();
	socket.emit('change_slide', { direction : 'prev'});
    });
});
