//Write a function called extractKey which accepts two parameters, an array of objects, and the name of a key and returns an array with just the values for that key:

function extractKey(arr, key){
    return arr.reduce(function(acc, next){
        acc.push(next[key]);
        return acc;
    },[])
}



var names = extractKey([{name: "Elie", isInstructor:true},{name: "Tim", isInstructor:true},{name: "Matt", isInstructor:true}], "name");
console.log(names);
// ["Elie", "Tim", "Matt"]

//Write a function called filterLetters which accepts an array of letters and returns the number of occurrences of a specific letter. This function should be case insensitive

function filterLetters(arr, letter) {
	var letterLower = letter.toLowerCase();

	return arr.reduce(function(acc, next) {
		if (next.toLowerCase() === letterLower) {
			acc++;
		}
		return acc;
	}, 0);
}


console.log(filterLetters(["a","a","b","c","A"], "a")); // 3
console.log(filterLetters(["a","a","b","c","A"], "z")); // 0
console.log(filterLetters(["a","a","b","c","A"], "B")); // 1

//Write a function called addKeyAndValue which accepts three parameters, an array (of objects), a key and a value. This function should return the 
//array of objects after each key and value has been added. You can do this a few ways, either by reducing starting with an empty array and making copies
//of the object or by starting with the actual array!

function addKeyAndValue(arr, key, value) {
	return arr.reduce(function(acc, next) {
		next[key] = value;
		acc.push(next);

		return acc;
	}, []);
}
// Starting with the actual array would have been awesome. The solution is way better than my answer as I needed to make a new array :(

console.log(addKeyAndValue([{name: 'Elie'},{name: 'Tim'},{name: 'Elie'}], "isInstructor", true));
