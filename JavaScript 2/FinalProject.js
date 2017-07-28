// Final Project:  Memory Game
var colors = ["aqua", "bisque", "aliceblue", "burlywood", 
				"cornflowerblue", "greenyellow", "indianred", "plum"];

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", main);

// Main Game setup function
//	Create 1d array of memory cards
//		Create a new memory card for each entry, consider state
//  Add array of cards as elements to the flex (divs?)
//  Set up click event to the flex object, potentially
function main() {
	var container = document.querySelector("#container");
	var savedCards = null; // PLACEHOLDER: May put saving to local storage in.
	var cardArray = buildCardArray(container, 4, savedCards);
	var firstSelectDiv = null; // The first selection in a pair of choices
	var firstSelectIndex;
	var secondSelectDiv = null;
	var secondSelectIndex;
	var matchesFound = 0;
	var scoreVal = document.querySelector("#score");

	container.addEventListener("click", function(event){
		if (event.target.getAttribute("id") === "container") {
			return false;
		}
		
		var cardIndex;
		var isMatch = false;
		
		if (!firstSelectDiv) {
			firstSelectDiv = event.target;
			firstSelectIndex = parseInt(firstSelectDiv.getAttribute("id"));
			firstSelectDiv.style.background = event.target.getAttribute("class");
			cardIndex = firstSelectIndex;
		} else {
			secondSelectDiv = event.target;
			secondSelectIndex = parseInt(secondSelectDiv.getAttribute("id"));
			secondSelectDiv.style.background = event.target.getAttribute("class");
			cardIndex = secondSelectIndex;

			isMatch = checkMatch(cardArray, firstSelectIndex, secondSelectIndex)

			if (!isMatch) {
				resetPair(cardArray, firstSelectIndex, secondSelectIndex, 
					firstSelectDiv, secondSelectDiv);
				firstSelectDiv = null;
				secondSelectDiv = null;
			} else {
				//setBorders(firstSelectDiv, secondSelectDiv);
				matchesFound++;
				scoreVal.innerText = matchesFound;
				firstSelectDiv = null;
				secondSelectDiv = null;
			}
		}


		//Rotate the card if necessary
		if (cardArray[cardIndex].cardState === 0) {
			cardArray[cardIndex].cardState = 1;
		}
	});
}

// Generate the array of elements
function buildCardArray(container, pairs, savedCards) {
	var cardArray = [];

	for (var i = 0; i < pairs; i++) {
		cardArray.push(createCard(savedCards, i, 1));
		cardArray.push(createCard(savedCards, i, 2));
	}

	if (!savedCards) {
		cardArray = shuffleCards(cardArray);
	}

	buildDivs(container, cardArray);

	return cardArray;
}

// Create a memory card and return it, consider state
function createCard(savedCards, index, pairInstance) {
	var newCard = {
		cardState: 0, // 0: Not revealed, 1: Revealed, 2: Match Found (locked)
		cardColor: colors[index],
		pairInstance: pairInstance 
	}

	if (savedCards) {
		newCard.cardState = savedCards[index].cardState;
		newCard.cardColor = savedCard[index].cardColor;
	}

	return newCard;
}

function buildDivs(container, cardArray) {
	var tempDiv = null;

	for (var i = 0; i < cardArray.length; i++) {
		tempDiv = document.createElement("div");
		tempDiv.style.width = 100 + "px";
		tempDiv.style.height = 100 + "px";
		tempDiv.style.marginLeft = 10 + "px";
		tempDiv.style.marginRight = 10 + "px";
		tempDiv.style.marginTop = 10 + "px";
		tempDiv.style.marginBottom = 10 + "px";
		tempDiv.setAttribute("class", cardArray[i].cardColor);
		tempDiv.setAttribute("id", i + cardArray[i].cardColor);

		if (cardArray[i].cardState !== 0) {
			tempDiv.style.background = cardArray[i].cardColor;
		} else {
			tempDiv.style.background = "black";
		}

		if (cardArray[i].cardState === 2) {
			tempDiv.style["border-color"] = "black";
		}

		container.appendChild(tempDiv);
	}
}

function shuffleCards(cardArray) {
	var newCardArray = cardArray;
	var tempCard;
	var newIndex;

	// I'm kind of proud of this one!
	for (var i = 0; i < cardArray.length; i++) {
		newIndex = Math.floor(Math.random() * (cardArray.length - 1));
		tempCard = cardArray[newIndex];
		cardArray[newIndex] = cardArray[i];
		cardArray[i] = tempCard;
		console.log("swapped index: " + i + " for index: " + newIndex);
	}

	return newCardArray;
}

function checkMatch(cardArray, index1, index2) {
	return cardArray[index1].cardColor === cardArray[index2].cardColor
}

// BROKEN: THIS IS CAUSING THE WIDTH TO BLOW. UP
function setBorders(div1, div2) {
	div1.style["border-style"] = "solid";
	div1.style["border-color"] = "black";
	div2.style["border-style"] = "solid";
	div2.style["border-color"] = "black";
}

function resetPair(cardArray, index1, index2, div1, div2) {
	cardArray[index1].cardState = 0;
	cardArray[index2].cardState = 0;

	div1.style.background = "black";
	div2.style.background = "black";
}