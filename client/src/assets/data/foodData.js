import Pizza1 from "../food_1.png";

// juice/drinks image
import CucumberJuiceImage from '../juiceimages/Cucumber.png'
import AppleJuiceImage from '../juiceimages/AppleJuice.png'
import BeetrootJuiceImage from '../juiceimages/Beetroot.png'
import CarrotJuiceImage from '../juiceimages/CarrotJuice.png'
import CitrusBlastJuiceImage from '../juiceimages/CitrusBlast.png'
import ChiaRefresherJuiceImage from '../juiceimages/ChiaRefresher.png'
import TulsiLemonJuiceImage from '../juiceimages/TulsiLemon.png'
import CoconutWaterJuiceImage from '../juiceimages/CoconutWater.png'

const foodApi = {
  getAllItems: () => {
    return {
      week1: [
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
            "Sea salt",
          ],
          nutrition: {
            carbs: "65g",
            protein: "32g",
            fat: "24g",
            fiber: "3g",
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation:
            "Best enjoyed fresh from the oven with a drizzle of olive oil",
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
            "Oregano",
          ],
          nutrition: {
            carbs: "72g",
            protein: "35g",
            fat: "30g",
            fiber: "4g",
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation: "Perfect with a cold soda and extra chili flakes",
        },
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
            "Brioche bun",
          ],
          nutrition: {
            carbs: "45g",
            protein: "38g",
            fat: "42g",
            fiber: "2g",
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation:
            "Try it with our house-made pickles for extra crunch",
        },
        {
          id: 6,
          name: "Smoky BBQ Burger",
          slug: "smoky-bbq-burger",
          description:
            "Grilled beef, smoky BBQ sauce, onion rings, and cheddar",
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
            "Toasted bun",
          ],
          nutrition: {
            carbs: "50g",
            protein: "40g",
            fat: "45g",
            fiber: "3g",
          },
          allergens: ["Dairy", "Gluten", "Soy"],
          chefRecommendation: "Great with curly fries and a root beer",
        },
      ],
      drinks: [
        {
          id: 801,
          name: "Minted Cucumber Detox",
          slug: "minted-cucumber-detox",
          description:
            "Cool, calm, and deeply cleansing – your ultimate detox companion.",
          price: 3.99,
          calories: 45,
          prepTime: "2 mins",
          rating: 4.8,
          image: CucumberJuiceImage,
          ingredients: [
            "Fresh cucumber juice",
            "Mint leaves",
            "Lemon juice",
            "Himalayan salt",
            "Filtered water",
          ],
          nutrition: {
            carbs: "9g",
            protein: "1g",
            fat: "0g",
            fiber: "1g",
          },
          allergens: [],
          chefRecommendation:
            "Best enjoyed chilled for a refreshing detox experience",
        },
        {
          id: 802,
          name: "Apple Juice",
          slug: "apple-juice",
          description:
            "Sweet, crisp, and packed with antioxidants – nature’s energy shot.",
          price: 3.49,
          calories: 120,
          prepTime: "2 mins",
          rating: 4.7,
          image: AppleJuiceImage,
          ingredients: ["Fresh apple extract", "A dash of lemon juice"],
          nutrition: {
            carbs: "28g",
            protein: "0g",
            fat: "0g",
            fiber: "1g",
          },
          allergens: [],
          chefRecommendation:
            "Pair with a light breakfast or sip anytime for instant refreshment",
        },
        {
          id: 803,
          name: "Beetroot Juice",
          slug: "beetroot-juice",
          description:
            "A vibrant boost for stamina, heart health, and glowing skin.",
          price: 3.99,
          calories: 60,
          prepTime: "3 mins",
          rating: 4.5,
          image: BeetrootJuiceImage,
          ingredients: [
            "Fresh beetroot extract",
            "Carrot juice",
            "Lemon juice",
            "Ginger",
          ],
          nutrition: {
            carbs: "14g",
            protein: "1g",
            fat: "0g",
            fiber: "2g",
          },
          allergens: [],
          chefRecommendation: "Perfect pre-workout drink for natural energy",
        },
        {
          id: 804,
          name: "Carrot Juice",
          slug: "carrot-juice",
          description: "Packed with beta-carotene and sunshine in every sip.",
          price: 3.49,
          calories: 90,
          prepTime: "2 mins",
          rating: 4.6,
          image: CarrotJuiceImage,
          ingredients: [
            "Fresh carrot extract",
            "Orange juice",
            "Ginger",
            "Lemon",
          ],
          nutrition: {
            carbs: "20g",
            protein: "1g",
            fat: "0g",
            fiber: "2g",
          },
          allergens: [],
          chefRecommendation: "Best served cold with a dash of black salt",
        },
        {
          id: 805,
          name: "Citrus Blast (Mosambi Juice)",
          slug: "citrus-blast-mosambi-juice",
          description:
            "Zesty and hydrating – a citrus explosion for your immune system.",
          price: 3.99,
          calories: 80,
          prepTime: "2 mins",
          rating: 4.7,
          image: CitrusBlastJuiceImage,
          ingredients: [
            "Mosambi (sweet lime) juice",
            "Mint leaves",
            "Lemon juice",
            "Black salt",
          ],
          nutrition: {
            carbs: "18g",
            protein: "0g",
            fat: "0g",
            fiber: "1g",
          },
          allergens: [],
          chefRecommendation:
            "Drink fresh in the morning to kickstart your day",
        },
        {
          id: 806,
          name: "Chia Refresher Juice",
          slug: "chia-refresher-juice",
          description: "Hydration meets nutrition in this superfood sip.",
          price: 4.49,
          calories: 95,
          prepTime: "3 mins",
          rating: 4.9,
          image: ChiaRefresherJuiceImage,
          ingredients: [
            "Lemon juice",
            "Honey",
            "Soaked chia seeds",
            "Mint",
            "Filtered water",
          ],
          nutrition: {
            carbs: "16g",
            protein: "2g",
            fat: "3g",
            fiber: "5g",
          },
          allergens: [],
          chefRecommendation:
            "Shake well before drinking to enjoy the chia seed texture",
        },
        {
          id: 807,
          name: "Tulsi Lemon Shot",
          slug: "tulsi-lemon-shot",
          description: "A potent immunity booster in a quick and zesty shot.",
          price: 2.49,
          calories: 25,
          prepTime: "1 min",
          rating: 4.8,
          image: TulsiLemonJuiceImage,
          ingredients: [
            "Tulsi (holy basil) extract",
            "Lemon juice",
            "Honey",
            "Ginger",
          ],
          nutrition: {
            carbs: "5g",
            protein: "0g",
            fat: "0g",
            fiber: "0g",
          },
          allergens: [],
          chefRecommendation: "Perfect as a morning immunity ritual",
        },
        {
          id: 808,
          name: "Coconut Water",
          slug: "coconut-water",
          description: "Pure and natural hydration straight from paradise.",
          price: 2.99,
          calories: 40,
          prepTime: "1 min",
          rating: 4.9,
          image: CoconutWaterJuiceImage,
          ingredients: ["Tender coconut water"],
          nutrition: {
            carbs: "9g",
            protein: "0g",
            fat: "0g",
            fiber: "0g",
          },
          allergens: [],
          chefRecommendation: "Serve chilled for ultimate refreshment",
        },
      ],
    };
  },
  getItemBySlug: (category, slug) => {
    const allItems = foodApi.getAllItems();
    const categoryItems = allItems[category];
    return categoryItems.find((item) => item.slug === slug);
  },
};

export default foodApi;
