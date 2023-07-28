
const randomRestaurant = () => {
  const restaurants = ["The Hungry Robot", "The Daily Grind", "The Park Cafe"];
  const randomIndex = Math.floor(Math.random() * restaurants.length);
  return restaurants[randomIndex];
};

const button = document.querySelector("#random-restaurant");
button.addEventListener("click", function() {
  const restaurant = randomRestaurant();
  alert(`Here's a random restaurant recommendation for you: ${restaurant}`);
});
