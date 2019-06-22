//
// ─── OBJECT DESTRUCTURING ───────────────────────────────────────────────────────
//

/* const horse = {
	name   : 'bob',
	legs   : 4,
	shell  : true,
	type   : 'amphibious',
	meal   : 10,
	diet   : 'berries',
	skills : [ 'jousting', 'racing' ],
	age    : 10
};

function horseAge(str, age, type) {
	const ageStr = age > 5 ? 'old' : 'young';

	return `${str[0]}${ageStr} at ${age} years ${str[1]}${type}`;
}

const bio2 = horseAge`This horse is ${horse.age}and his type is ${horse.type}`;

console.log(bio2);
 */

//
// ─── OBJECT DESTRUCTURING 2 ─────────────────────────────────────────────────────
//

/* const turtle = {
	name   : 'bob',
	legs   : 4,
	shell  : true,
	type   : 'amphibious',
	meal   : 10,
	diet   : 'berries',
	skills : [ 'jousting', 'racing' ]
};

function feed(turtle) {
	var { name, legs, meal } = turtle;

	console.log(`${name}`);
}

feed(turtle); */

//
// ─── SPREAD SYNTAX ──────────────────────────────────────────────────────────────
//

// Objects
/* const pikachu = { name: 'Pikachu' };
const stat = { hp: 60, attack: 20, defense: 10 };

const lvl0 = { ...pikachu, ...stat };

console.log(lvl0); */

//
// ─── SPREAD SYNTAX 2 ────────────────────────────────────────────────────────────
//

/* let pokemon = [ 'bulbizar, pikachu' ];

pokemon = [ 'tortank', ...pokemon, 'chenipan' ];

console.log(pokemon);
 */

//
// ─── LOOPS ──────────────────────────────────────────────────────────────────────
//

/* const orders = [ 112, 8, 91, 72 ];

// Reduce
const total = orders.reduce((acc, cur) => {
	return acc + cur;
});

// Map
const withTax = orders.map((orderValue) => {
	return orderValue * 1.1;
});

// Filter
const highValue = orders.filter((orderValue) => {
	return orderValue > 9;
});

console.log({ total, withTax, highValue });
 */

//
// ─── PROMISE ────────────────────────────────────────────────────────────────────
//

var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

$(document).ready(function() {
	var get = (url) => {
		return new Promise(function(resolve, reject) {
			$.ajax({
				type    : 'GET',
				url     : url,
				success : (response) => {
					resolve(response);
				},
				error   : (error) => {
					reject(error);
				}
			});
		});
	};

	get('https://jsonplaceholder.typicode.com/usefezfezrs')
		.then(function(response) {
			console.log(response);
		})
		.catch(function(error) {
			console.log(error);
		});

	/* 	var getPosts = (success, error) => {
		get(
			'https://jsonplaceholder.typicode.com/usdzdfzers',
			(response) => {
				var users = response;
				get(
					'https://jsonplaceholder.typicode.com/comments?userId=' + users[0].id,
					(response) => {
						var posts = response;
						success(posts);
					},
					(e) => {
						error(e);
					}
				);
			},
			(e) => {
				error(e);
			}
		);
	};

	getPosts(
		(response) => {
			console.log(response);
		},
		(error) => {
			console.log(error);
		}
	); */
});
