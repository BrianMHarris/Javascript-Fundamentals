//Write a function called vowelCount that accepts a string and returns an
//object with each key being the vowel and the value being the number of 
//times the vowel occurs in the string (the order of keys in the object does not matter).
function vowelCount(str) {
	var stringArr = str.split("");
	return stringArr.reduce(function(acc, next) {
		switch(next) {
			case 'a':
				acc[next] = acc[next] ? acc[next] + 1 : 1;
				break;
			case 'e':
				acc[next] = acc[next] ? acc[next] + 1 : 1;
			break;
			case 'i':
				acc[next] = acc[next] ? acc[next] + 1 : 1;
				break;
			case 'o':
				acc[next] = acc[next] ? acc[next] + 1 : 1;
			break;
			case 'u':
				acc[next] = acc[next] ? acc[next] + 1 : 1;
			break;
			default:
				// do nothing
		}
		return acc;
	}, {});
}

console.log(vowelCount("incredible"));
console.log(vowelCount("awesome"));

//Write a function called removeVowels that accepts a string and returns an
//array of each character that is not a vowel (y should not count as a vowel 
//for this function).

function removeVowels(str) {
	var stringArr = str.split("");
	var vowels = ["a", "e", "i", "o", "u"];
	return stringArr.filter(function(val) {
		return vowels.indexOf(val) === -1;
	});
}

console.log(removeVowels("amazing")); // ["m","z","n","g"]
console.log(removeVowels("fun")); // ["f","n"]
console.log(removeVowels("silly")); // ["s","l","l","y"]