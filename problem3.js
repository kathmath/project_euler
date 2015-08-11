// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?


//test if number is prime
function is_prime(number) {
	for (var i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) {
			return false;
		} 
	}
	return true;
};


// //test for max factor
// function max_factor(number) {
// 	var i = 3;
// 	if (number % i != 0) {
// 		max_factor(i+2);
// 	} else { 
// 		return number / i;
// 	}
// };

// //recursion exceeds max stack, let's try same thing w loop. prob better to count down than up

// function max_factor(number) {
// 	for (var i = number - 2; i > 2; i-=2) {
// 		if (number % i === 0) {
// 			return i;
// 		} 
// 	}
// };

//test for both

function max_prime_factor(number) {
	for (var i = number - 1; i > Math.sqrt(number); i--) {
		if (is_prime(number)) {
			console.log("This is a prime number.")
		} else if (is_prime(i) && number % i === 0) {
			return i;
		}
	}
};

// freezes after 9e6


//ok, lets try something different
//we can instead find the lowest factor that has a complimentary number that is prime

function max_prime_factor(number) {
	for (var i = 2; i < Math.sqrt(number); i++) {
		var j = number / i;
		if (number % i === 0 && max_prime_factor(j) === 1) {
			return j;
		} 
	}
};






function max_prime_factor(number) {
	var max = number;
	var i = 2;
	while(i < max) {
		while(max % i === 0) {
			function(newMax) {
				max = newMax;
			} * (target / 1)
		}
	}
	i++;
}

var originalTarget = 600851475143;
var target = originalTarget;
var i = 2;
while(i < target) {
	while(target % i === 0) {
		(function(newtarget) {
			target = newtarget;
		})(target / i)
	}
	i++;
}

console.log(target);







