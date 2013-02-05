var socket = io.connect();
console.log(hljs);
hljs.tabReplace = '    ';
hljs.initHighlightingOnLoad();
$(function() {
    $.deck('.slide');
    $("code").each(function(index, element) {
	var current_content = $(element).html();
	var highlighted = hljs.highlight('javascript', current_content);
	$(element).html(highlighted.value);

	$//(element).html(hljs.highlight('javascript', $(element).text()));
    });
    socket.on('move_slide', function(data) {
	if(data.direction == 'next') {
	    $.deck('next');
	} else {
	    $.deck('prev');
	}
    });
});