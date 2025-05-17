import Pizza1 from '../food_1.png';
import Pizza2 from '../food_2.png'; // You can replace with correct image
import Burger1 from '../food_3.png'; // Replace with actual burger image
import Burger2 from '../food_4.png'; // Replace with actual burger image

const foodApi = {
  getAllItems: () => {
    return {
      pizza: [
        {
          id: 1,
          name: "Margherita Classic",
          slug: "margherita-classic",
          description: "San Marzano tomato sauce, fresh mozzarella, basil",
          price: 14.99,
          calories: 850,
          prepTime: "20-25 mins",
          rating: 4.8,
          image: Pizza1,
          ingredients: [
            "San Marzano tomatoes",
            "Fresh mozzarella",
            "Basil leaves",
            "Extra virgin olive oil",
            "Sea salt"
          ],
          nutrition: {
            carbs: "65g",
            protein: "32g",
            fat: "24g",
            fiber: "3g"
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation: "Best enjoyed fresh from the oven with a drizzle of olive oil"
        },
        {
          id: 2,
          name: "Spicy Pepperoni",
          slug: "spicy-pepperoni",
          description: "Zesty pepperoni, jalapeños, and mozzarella",
          price: 16.49,
          calories: 950,
          prepTime: "25 mins",
          rating: 4.7,
          image: Pizza1,
          ingredients: [
            "Tomato sauce",
            "Mozzarella",
            "Spicy pepperoni",
            "Jalapeños",
            "Oregano"
          ],
          nutrition: {
            carbs: "72g",
            protein: "35g",
            fat: "30g",
            fiber: "4g"
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation: "Perfect with a cold soda and extra chili flakes"
        }
      ],
      burgers: [
        {
          id: 5,
          name: "Gourmet Classic",
          slug: "gourmet-classic",
          description: "Angus beef, cheddar, lettuce, tomato, special sauce",
          price: 12.99,
          calories: 780,
          prepTime: "15-20 mins",
          rating: 4.6,
          image: Pizza1,
          ingredients: [
            "Angus beef patty",
            "Cheddar cheese",
            "Fresh lettuce",
            "Tomato",
            "Special sauce",
            "Brioche bun"
          ],
          nutrition: {
            carbs: "45g",
            protein: "38g",
            fat: "42g",
            fiber: "2g"
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation: "Try it with our house-made pickles for extra crunch"
        },
        {
          id: 6,
          name: "Smoky BBQ Burger",
          slug: "smoky-bbq-burger",
          description: "Grilled beef, smoky BBQ sauce, onion rings, and cheddar",
          price: 13.49,
          calories: 890,
          prepTime: "18 mins",
          rating: 4.9,
          image: Pizza1,
          ingredients: [
            "Beef patty",
            "BBQ sauce",
            "Crispy onion rings",
            "Cheddar cheese",
            "Lettuce",
            "Toasted bun"
          ],
          nutrition: {
            carbs: "50g",
            protein: "40g",
            fat: "45g",
            fiber: "3g"
          },
          allergens: ["Dairy", "Gluten", "Soy"],
          chefRecommendation: "Great with curly fries and a root beer"
        }
      ],
    };
  },
  getItemBySlug: (category, slug) => {
    const allItems = foodApi.getAllItems();
    const categoryItems = allItems[category];
    return categoryItems.find(item => item.slug === slug);
  }
};

export default foodApi;
