var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");
var min = 0;
var max = 255;

color1.value = randomize();
color2.value = randomize();
setGradient();

function setGradient(){
	body.style.background = "linear-gradient(to right, " 
	+ color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

function randomize(){
	var values = ["1","2","3","4","5","6","7","8","9",
	"0","a","b","c","d","e","f"];
	var result = "#";

	for (var i = 0; i < 6; i++) {
		result += values[Math.floor(Math.random() * 16)]
	}
	return result;
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

button.addEventListener("click", function(){
	color1.value = randomize();
	color2.value = randomize();
	setGradient();
})