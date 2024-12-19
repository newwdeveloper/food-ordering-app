import { useParams } from "react-router-dom";
import restaurantData from "../utils/restaurantData";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

function RestaurantMenu() {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const [activeCategory, setActiveCategory] = useState(null);

  // Find the restaurant by ID
  const restaurant = restaurantData.find(function (rest) {
    return rest.id.toString() === id;
  });

  if (!restaurant) {
    return <p>Restaurant not found.</p>; // Graceful handling of not found
  }

  // Group menu items by category
  function groupByCategory(acc, item) {
    if (acc[item.category]) {
      // If the category already exists, add the item to its items array
      acc[item.category].items.push(item);
    } else {
      // If the category does not exist, create it and add the item
      acc[item.category] = {
        name: item.category,
        items: [item], // Initialize items array with the current item
      };
    }
    return acc;
  }

  // Group categories by category name
  const groupedCategories = restaurant.menu.reduce(groupByCategory, {});

  // Get an array of category objects
  const categories = Object.values(groupedCategories);

  return (
    <div className="menuBox">
      <div className="topResName">
        <h1>{restaurant.name}</h1>
        <h3>{restaurant.address}</h3>
        <h2>Menu</h2>
      </div>

      {/* Render each category with items */}
      {categories.length > 0 ? (
        categories.map((category, index) => {
          return (
            <RestaurantCategory
              key={category.name}
              category={category} // Pass category data as prop
              isActive={activeCategory === index} //we can also use category.name in place of index to check it
              setActiveCategory={() =>
                setActiveCategory(activeCategory === index ? null : index)
              }
            />
          );
        })
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  );
}

// Helper function to get category image (can be dynamic or fixed)

export default RestaurantMenu;
