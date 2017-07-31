var users = [
{
  username: "larry",
  email: "larry@foo.com",
  yearsExperience: 22.1,
  favoriteLanguages: ["Perl", "Java", "C++"],
  favoriteEditor: "Vim",
  hobbies: ["Fishing", "Sailing", "Hiking"],
  hometown: {
    city: "San Francisco",
    state: "CA"
  }
},
{
  username: "jane",
  email: "jane@test.com",
  yearsExperience: 33.9,
  favoriteLanguages: ["Haskell", "Clojure", "PHP"],
  favoriteEditor: "Emacs",
  hobbies: ["Swimming", "Biking", "Hiking"],
  hometown: {
    city: "New York",
    state: "NY"
  }
},
{
  username: "sam",
  email: "sam@test.com",
  yearsExperience: 8.2,
  favoriteLanguages: ["JavaScript","Ruby", "Python", "Go"],
  favoriteEditor: "Atom",
  hobbies: ["Golf", "Cooking", "Archery"],
  hometown: {
    city: "Fargo",
    state: "SD"
  }
},
{
  username: "anne",
  email: "anne@test.com",
  yearsExperience: 4,
  favoriteLanguages: ["C#", "C++", "F#"],
  favoriteEditor: "Visual Studio Code",
  hobbies: ["Tennis", "Biking", "Archery"],
  hometown: {
    city: "Albany",
    state: "NY"
  }
},
{
  username: "david",
  email: "david@test.com",
  yearsExperience: 12.5,
  favoriteLanguages: ["JavaScript", "C#", "Swift"],
  favoriteEditor: "Sublime Text",
  hobbies: ["Volunteering", "Biking", "Coding"],
  hometown: {
    city: "Los Angeles",
    state: "CA"
  }
}
]

//Write a function called printEmails which console.log's each email for the users.
function printEmails() {
  users.forEach(function(val) {
    console.log(val.email);
  });
}

printEmails();
// larry@foo.com
// jane@test.com
// sam@test.com
// anne@test.com
// david@test.com

// Write a function called printHobbies which console.log's each hobby for each user.
function printHobbies() {
  return users.reduce(function(total, currentValue) {
    return total.concat(currentValue.hobbies);
  }, []).forEach(function(val) {
    console.log(val);
  });
}

printHobbies();

// Write a function called findHometownByState which returns the first user
//  which has a hometown of the state that is passed in
function findHometownByState(state) {
  return users.find(function(val) {
    return val.hometown.state === state;
  });
}

console.log(findHometownByState("CA"));

// Write a function called allLanguages which returns an array of all of the unique values
function allLanaguages() {
  return users.reduce(function(total, currentValue) {
    return total.concat(currentValue.favoriteLanguages);
  }, []).filter(function(value, index, arr) {
    return arr.indexOf(value) === index;
  });
}

console.log(allLanaguages());

//Write a function called hasFavoriteEditor which returns a boolean 
// if any of the users have the editor passed in
function hasFavoriteEditor(editor) {
  return users.some(function(val) {
    return val.favoriteEditor === editor;
    });
}

console.log("Find Editor: Visual Studio Code? " + hasFavoriteEditor("Visual Studio Code"));
console.log("Find Editor: Pdsdf?? " + hasFavoriteEditor("Pdsdf"));

//Write a function called findByUsername which takes in a string and returns an 
// object in the users array that has that username
function findByUsername(name) {
  return users.find(function(val) {
    return val.username.toLowerCase() === name.toLowerCase();
    });
}
console.log(findByUsername("david"));