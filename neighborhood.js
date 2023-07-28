const randomRestaurant = () => {
  const restaurants = ["The Grind Burger Bar", "Adriatica Village", "Layered"];
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  return restaurants[randomIndex];
};

const button = document.querySelector("#random-restaurant");

button.addEventListener("click", function() {
  const restaurant = randomRestaurant();
  document.getElementById("random-restaurant").innerHTML = `Here's a random restaurant recommendation for you: ${restaurant}`;
});