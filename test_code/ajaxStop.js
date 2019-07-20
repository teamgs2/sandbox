$(document).ready(function() {
	sources = [ 'posts', 'comments', 'albums', 'photos', 'todos', 'users' ];
	$('#block1_button').click(function(e) {
		e.preventDefault();
		//console.log('CLICK ON BUTTON 1');
		$.ajax({
			type    : 'GET',
			url     : 'https://jsonplaceholder.typicode.com/posts',
			success : function(response) {
				//console.log(response);
			},
			error   : function(response) {}
		});
	});

	$('#block2_button').click(function(e) {
		e.preventDefault();
		//console.log('CLICK ON BUTTON 2');
		$.ajax({
			type    : 'GET',
			url     : 'https://jsonplaceholder.typicode.com/comments',
			success : function(response) {
				//console.log(response);
			},
			error   : function(response) {}
		});
	});

	$(document).ajaxStop(function(res) {
		console.log(res);
	});
});
