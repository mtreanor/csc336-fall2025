// restaurants.js
import fs from 'fs';

// Read JSON file from disk
const data = fs.readFileSync('restaurants.json', 'utf-8');

// Parse the JSON into a JavaScript object
const restaurants = JSON.parse(data);

// Print restaurant names and their vegetarian dishes
for (const restaurant of restaurants.restaurants) {
  console.log(`\n🍽️ ${restaurant.name} (${restaurant.location})`);
  console.log('Vegetarian Dishes:');
  for (const item of restaurant.menu) {
    if (item.vegetarian) {
      console.log(` - ${item.dish} ($${item.price})`);
    }
  }
}
