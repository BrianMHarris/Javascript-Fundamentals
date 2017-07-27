document.addEventListener("DOMContentLoaded", runScript);

function runScript() {
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
}