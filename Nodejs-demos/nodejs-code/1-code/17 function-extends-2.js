
// ...arg

function fn(a, b, ...c) {
	console.log(c);
	console.log(a, b);
}

fn(1, 2, 3, 4, 5);
