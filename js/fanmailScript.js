document.addEventListener("DOMContentLoaded", postButton);

// Fanmail page image toggling
let mailImages = ["images/rmMail.jpg", "images/jinMail.jpg", "images/sugaMail.jpg", "images/hopeMail.jpg", "images/jiminMail.jpg", "images/vMail.jpg", "images/jkMail.jpg"];
document.getElementById("selector").addEventListener("change", function(){
	let dropdown = document.getElementById("selector");
	document.getElementById("mailImage").src = mailImages[dropdown.value - 1];
});

// Fanmail page POST request
function postButton(){
	document.getElementById("postSubmit").addEventListener("click", function(event){
		console.log("click");
		let req = new XMLHttpRequest();
		let payload = {member:null, name:null, hometown:null, message:null};
		
		payload.member = document.getElementById("selector").value;
		payload.name = document.getElementById("senderName").value;
		payload.hometown = document.getElementById("senderFrom").value;
		payload.message = document.getElementById("textArea").value;
		req.open("POST", "https://httpbin.org/post", false);
		event.preventDefault();
		req.setRequestHeader("Content-Type", "application/json");
		req.send(JSON.stringify(payload));
		let response = JSON.parse(req.responseText);
		console.log(response);
		document.getElementById("messageSent").style.display = "block";
	});
}