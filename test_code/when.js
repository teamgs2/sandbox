/*
https://jsonplaceholder.typicode.com/posts
https://jsonplaceholder.typicode.com/comments
https://jsonplaceholder.typicode.com/albums
https://jsonplaceholder.typicode.com/photos
https://jsonplaceholder.typicode.com/todos
https://jsonplaceholder.typicode.com/users
*/

$(document).ready(function() {
	sources = [ 'posts', 'commeffnts', 'albums', 'photos', 'todos', 'users' ];
	requests = [];
	$.each(sources, function(indexInArray, valueOfElement) {
		requests.push(
			$.ajax({
				type    : 'GET',
				url     : 'https://jsonplaceholder.typicode.com/' + valueOfElement,
				success : function(response) {},
				error   : function(response) {}
			})
		);
	});

	$.when
		.apply($, requests)
		.then(function() {
			console.log('THEN : ', arguments);
		})
		.fail(function() {
			console.log('FAIL : ', arguments);
		})
		.catch(function() {
			console.log(this);

			console.log('CATCH : ');
		});
});
