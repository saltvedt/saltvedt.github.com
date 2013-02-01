var snappy = 600;

$(document).ready(function () {

	$("header").click(function (e) {
		e.preventDefault;
		$("#megaNavigation").toggle("blind", snappy);
	});

	$("#megaNavigation a").click(function (e) {
		$("#megaNavigation").hide("blind", snappy);
	});
});
