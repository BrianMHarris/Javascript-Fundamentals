document.addEventListener("DOMContentLoaded", runScript);

function runScript() {
	// Part I
	document.getElementById("change_heading").innerText = "Hello World!";

	var textToColor = document.querySelector(".selected");

	var colorBoxSection = document.querySelector("section");
	colorBoxSection.addEventListener("mouseover", function(event){
		textToColor.innerText = event.target.className;
		//textToColor.style.color = event.target.className;
	});

	var newDiv = document.createElement("div");
	newDiv.className = "purple";
	
	colorBoxSection.appendChild(newDiv);

	// Part II
	var car1 = document.querySelector(".car1");
	var car2 = document.querySelector(".car2");
	car1.style.marginLeft = 0;
	car2.style.marginLeft = 0;
	var startButton = false;

	console.log("car1: " + car1);
	var button = document.querySelector("button");
	button.addEventListener("click", function(){
		if (startButton) {
			return;
		}

		startButton = true;

		var carTimer = setInterval(function(){
			console.log(car1.style.marginLeft);

			car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random() * 100 + 'px';
			car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random() * 100 + 'px';

			if (parseInt(car1.style.marginLeft) > window.innerWidth){
				clearInterval(carTimer);
				alert("car1 is the winner!");
			}else if (parseInt(car2.style.marginLeft) > window.innerWidth){
				clearInterval(carTimer);
				alert("car2 is the winner!");
			}
		}, 250);
	});
}