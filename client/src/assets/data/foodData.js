import Pizza1 from '../food_1.png'

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
        // More pizza items...
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
        // More burger items...
      ],
      // Other categories...
    };
  },
  getItemBySlug: (category, slug) => {
    const allItems = foodApi.getAllItems();
    const categoryItems = allItems[category];
    return categoryItems.find(item => item.slug === slug);
  }
};

export default foodApi;