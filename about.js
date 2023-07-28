console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form submitted successfully!');;
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const rubberDuck = document.querySelector("img");

rubberDuck.addEventListener("mouseover", function() {
  alert("You are a thoughtful person.");
  alert("You are creative.");
  alert("You are kind.");

});
