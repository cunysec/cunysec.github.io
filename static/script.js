$(document).ready(function() {
	$('#fullpage').fullpage();
});

$('#learn-button').click(function() {
	$.fn.fullpage.moveTo(2, 0);
});

$('#join-button').click(function() {
	$.fn.fullpage.moveTo(3, 0);
});

$('#join2-button').click(function() {
	$.fn.fullpage.moveTo(3, 0);
});
