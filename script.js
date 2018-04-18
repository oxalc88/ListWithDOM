var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var list = document.querySelectorAll ("li");


function inputLength() {
	return input.value.length;
}

/*To create a button on the existing li 
with a listening function to delete it*/
function createBtn() {
	for (var i = 0; i < list.length; i++) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("btn", "btn-danger","btn-sm");
	btn.addEventListener('click', liDel)
	list[i].appendChild(btn);
	}
}

// This is the excecution for delete each li
function liDel(){
    ul.removeChild(this.parentNode);
}

/*To create a li with a listening function to delete it*/
function createListElement() {
	var li = document.createElement("li")
	li.appendChild(document.createTextNode(input.value));
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	btn.classList.add("btn", "btn-danger","btn-sm");
	btn.addEventListener('click', liDel);
	li.appendChild(btn);  
	ul.appendChild(li);
	li.addEventListener("click", addOneClass);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

// To toggle "done class"
function addOneClass() {
	this.classList.toggle("done");
}

// For add buttons to all existant li
createBtn (); 

// For cross out the existent element
for (var i = 0; i < list.length; i++) {
	list[i].addEventListener("click", addOneClass);
}


button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
