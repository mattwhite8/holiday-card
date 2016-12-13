document.addEventListener("DOMContentLoaded", function(event) { 

	var to = "";
	var content = "";
	var fromWho = "";
	var toHTML = document.getElementById("to");
	var contentHTML = document.getElementById("content");
	var fromHTML = document.getElementById("from");



	document.getElementById("photo").addEventListener("click", function() {
		to = prompt("Who shall I send the card to?");
		content = prompt("What do you want to say?");
		fromWho = prompt("Who is this card from?");
		document.getElementById("photo").style.display = "none";
		toHTML.innerHTML = "To: " + to;
		contentHTML.innerHTML = content;
		fromHTML.innerHTML = "From: " + fromWho;
	});

});


