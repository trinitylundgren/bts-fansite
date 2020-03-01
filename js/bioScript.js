// Biography Page Drop Down Menu Selection

let current = document.getElementById("rmBio");

document.getElementById("rm").addEventListener("click", function(){
	current.style.display = "none";
	current = document.getElementById("rmBio");
	current.style.display = "block";
});

document.getElementById("jin").addEventListener("click", function(){
	current.style.display = "none";
	current = document.getElementById("jinBio");
	current.style.display = "block";
});

document.getElementById("suga").addEventListener("click", function(){
	current.style.display = "none";
	current = document.getElementById("sugaBio");
	current.style.display = "block";
});

document.getElementById("hope").addEventListener("click", function(){
	current.style.display = "none";
	current = document.getElementById("jhopeBio");
	current.style.display = "block";
});

document.getElementById("jimin").addEventListener("click", function(){
	current.style.display = "none";
	current = document.getElementById("jiminBio");
	current.style.display = "block";
});

document.getElementById("v").addEventListener("click", function(){
	current.style.display = "none";
	current = document.getElementById("vBio");
	current.style.display = "block";
});

document.getElementById("jk").addEventListener("click", function(){
	current.style.display = "none";
	current = document.getElementById("jungkookBio");
	current.style.display = "block";
});