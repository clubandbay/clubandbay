// juice/drinks image
import CucumberJuiceImage from "../juiceimages/Cucumber.png";
import AppleJuiceImage from "../juiceimages/AppleJuice.png";
import BeetrootJuiceImage from "../juiceimages/Beetroot.png";
import CarrotJuiceImage from "../juiceimages/CarrotJuice.png";
import CitrusBlastJuiceImage from "../juiceimages/CitrusBlast.png";
import ChiaRefresherJuiceImage from "../juiceimages/ChiaRefresher.png";
import TulsiLemonJuiceImage from "../juiceimages/TulsiLemon.png";
import CoconutWaterJuiceImage from "../juiceimages/CoconutWater.png";

//week 1 menu images
import WeekOneImgOne from "../Menu/week1/classic-fold.png";
import WeekOneImgTwo from "../Menu/week1/Omelette-Squares.png";
import WeekOneImgThree from "../Menu/week1/egg-roll.png";
import WeekOneImgFour from "../Menu/week1/stuffed-oml.png";

//week 2 menu images
import WeekTwoImgOne from "../Menu/week2/egg-classic.png";
import WeekTwoImgTwo from "../Menu/week2/roll-up.png";
import WeekTwoImgThree from "../Menu/week2/egg-fill.png";
import WeekTwoImgFour from "../Menu/week2/egg-burgar.png";
import WeekTwoImgFive from "../Menu/week2/egg-pop.png";

//week 3 menu images
import WeekThreeImgOne from "../Menu/week3/green-gar.jpeg";
import WeekThreeImgTwo from "../Menu/week3/red-pepper-omelette.png";
import WeekThreeImgThree from "../Menu/week3/root-veg-fold.png";
import WeekThreeImgFour from "../Menu/week3/corn-herbs-eggwich.png";
import WeekThreeImgFive from "../Menu/week3/mushroom-burst-roll-up.png";

//week 4 menu images
import WeekFourImgOne from "../Menu/week4/Super-Greens-Omelette.jpeg";
import WeekFourImgTwo from "../Menu/week4/Garlic-Mint-Turmeric-Omelette.png";
import WeekFourImgThree from "../Menu/week4/Cottage-Cheese-Indian-Masala-Omlette.png";
import WeekFourImgFour from "../Menu/week4/Mushroom-Omlette.png";

// veg images
import VegImg1 from "../Menu/Paneer/Paneer-Burji-with-Bread.png";
import VegImg2 from "../Menu/Paneer/Tandoori-Paneer.png";
import VegImg3 from "../Menu/Paneer/Spiced-Paneer-with-Veg-added.png";
import VegImg4 from "../Menu/Paneer/Paneer-Spinach-Omelette.png";
import VegImg5 from "../Menu/Paneer/Multigrain-Paneer-Sandwich.png";
import VegImg6 from "../Menu/Paneer/Grilled-Paneer-Toast.png";
import VegImg7 from "../Menu/Paneer/Paneer-Power-Wrap.png";

const foodApi = {
  getAllItems: () => {
    return {
      week1: [
        {
          id: 101,
          name: "Classic Folded Omelette (Semi-Moon)",
          slug: "classic-folded-omelette",
          description:
            "The timeless style — soft inside, crisp edges. Great for adding fillings.",
          price: 8.99,
          calories: 320,
          prepTime: "10-15 mins",
          rating: 4.6,
          image: WeekOneImgOne,
          ingredients: [
            "Fresh eggs",
            "Butter",
            "Salt",
            "Pepper",
            "Optional fillings (onions, mint, etc)",
          ],
          nutrition: {
            carbs: "2g",
            protein: "18g",
            fat: "22g",
            fiber: "0g",
          },
          allergens: ["Eggs", "Dairy"],
          chefRecommendation:
            "Best enjoyed fresh with toast or in a breakfast wrap",
          categ: "non-veg",
          note: "Spinach, Cheese, mushrooms, etc will be charged Additionally.",
        },
        {
          id: 102,
          name: "Omelette Squares (Meal Box Style)",
          slug: "omelette-squares",
          description:
            "Cooked in a square mold, cut into neat cubes or rectangles. Perfect for commuters.",
          price: 9.49,
          calories: 350,
          prepTime: "15 mins",
          rating: 4.5,
          image: WeekOneImgTwo,
          ingredients: [
            "Fresh eggs",
            "Milk",
            "Salt",
            "Pepper",
            "Optional vegetables",
          ],
          nutrition: {
            carbs: "5g",
            protein: "20g",
            fat: "25g",
            fiber: "1g",
          },
          allergens: ["Eggs", "Dairy"],
          chefRecommendation:
            "Great for meal prep with a side of roasted potatoes",
          categ: "non-veg",
          note: "Spinach, Cheese, mushrooms, etc will be charged Additionally.",
        },
        {
          id: 103,
          name: "Egg Roll Omelette",
          slug: "egg-roll-omelette",
          description:
            "Layered and rolled omelette - light, fluffy with beautiful presentation.",
          price: 10.99,
          calories: 380,
          prepTime: "15-20 mins",
          rating: 4.7,
          image: WeekOneImgThree,
          ingredients: [
            "Fresh eggs",
            "Spring onions",
            "Sesame oil",
            "Soy sauce",
            "Optional meats",
          ],
          nutrition: {
            carbs: "3g",
            protein: "22g",
            fat: "28g",
            fiber: "1g",
          },
          allergens: ["Eggs", "Soy"],
          chefRecommendation: "Serve with sweet chili sauce for dipping",
          categ: "non-veg",
          note: "Spinach, Cheese, mushrooms, etc will be charged Additionally. Meat additions available.",
        },
        {
          id: 104,
          name: "Stuffed Omelette Sandwich (Omelette inside Bread Pocket)",
          slug: "stuffed-omelette-sandwich",
          description:
            "Omelette made into a pocket and filled like a sandwich. One-hand eatable.",
          price: 11.99,
          calories: 450,
          prepTime: "15 mins",
          rating: 4.8,
          image: WeekOneImgFour,
          ingredients: [
            "Fresh eggs",
            "Whole wheat bread",
            "Cheese",
            "Bell peppers",
            "Optional bacon or sausage",
          ],
          nutrition: {
            carbs: "35g",
            protein: "25g",
            fat: "30g",
            fiber: "4g",
          },
          allergens: ["Eggs", "Dairy", "Gluten"],
          chefRecommendation:
            "The perfect office breakfast - no mess, all flavor",
          categ: "non-veg",
          note: "Spinach, Cheese, mushrooms, etc will be charged Additionally. Meat additions available.",
        },

        //veg

        {
          id: 105,
          name: "Paneer Bhurji with Bread",
          slug: "paneer-bhurji-bread",
          description:
            "Spiced crumbled cottage cheese scramble served with soft white bread - comfort food perfected",
          price: 14.99,
          calories: 420,
          prepTime: "18-20 mins",
          rating: 4.9,
          image: VegImg1,
          ingredients: [
            "Fresh paneer",
            "Onions",
            "Tomatoes",
            "Green chilies",
            "Coriander leaves",
            "Pav bhaji masala",
            "White bread",
          ],
          nutrition: {
            carbs: "38g",
            protein: "28g",
            fat: "22g",
            fiber: "4g",
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation:
            "Best enjoyed with buttered bread and sliced onions",
          categ: "veg",
          note: "Whole wheat bread available on request (no extra charge)",
        },
        {
          id: 106,
          name: "Tandoori Paneer",
          slug: "tandoori-paneer",
          description:
            "Marinated cottage cheese grilled to perfection with authentic tandoori spices",
          price: 16.49,
          calories: 380,
          prepTime: "25 mins (incl. marination)",
          rating: 4.8,
          image: VegImg2,
          ingredients: [
            "Premium paneer cubes",
            "Hung curd",
            "Tandoori masala",
            "Kashmiri red chili",
            "Ginger-garlic paste",
            "Lemon juice",
          ],
          nutrition: {
            carbs: "12g",
            protein: "32g",
            fat: "25g",
            fiber: "2g",
          },
          allergens: ["Dairy"],
          chefRecommendation:
            "Pair with mint-coriander chutney and onion rings",
          categ: "veg",
          note: "Served with salad and lemon wedge",
        },
      ],

      week2: [
        {
          id: 201,
          name: "Classic Folded (Half-Moon)",
          slug: "classic-folded-half-moon",
          description:
            "The traditional style, perfect for stuffed omelettes with your favorite fillings",
          price: 9.49,
          calories: 340,
          prepTime: "12-15 mins",
          rating: 4.6,
          image: WeekTwoImgOne,
          ingredients: [
            "Fresh eggs",
            "Butter",
            "Salt",
            "Pepper",
            "Choice of fillings",
          ],
          nutrition: {
            carbs: "3g",
            protein: "19g",
            fat: "25g",
            fiber: "1g",
          },
          allergens: ["Eggs"],
          chefRecommendation:
            "Try with our three-cheese blend and fresh herbs for a gourmet experience",
          categ: "non-veg",
          note: "Spinach, Cheese, mushrooms, etc will be charged Additionally.",
        },
        {
          id: 202,
          name: "Roll-Up Style Omelette",
          slug: "roll-up-omelette",
          description:
            "Rolled like a wrap for easy eating in transit - the perfect breakfast to go",
          price: 9.99,
          calories: 380,
          prepTime: "10-12 mins",
          rating: 4.5,
          image: WeekTwoImgTwo,
          ingredients: [
            "Egg whites option available",
            "Whole wheat tortilla",
            "Low-fat cheese",
            "Fresh spinach",
            "Bell peppers",
          ],
          nutrition: {
            carbs: "22g",
            protein: "24g",
            fat: "18g",
            fiber: "3g",
          },
          allergens: ["Eggs", "Gluten"],
          chefRecommendation:
            "Excellent with our house-made salsa verde for extra flavor",
          categ: "non-veg",
          note: "Spinach, Cheese, mushrooms, etc will be charged Additionally.",
        },
        {
          id: 203,
          name: "Egg Omelette (Soft Fold)",
          slug: "soft-fold-omelette",
          description:
            "Delicate fold with fillings nestled in the center - fluffy perfection",
          price: 8.99,
          calories: 290,
          prepTime: "10 mins",
          rating: 4.4,
          image: WeekTwoImgThree,
          ingredients: [
            "Farm-fresh eggs",
            "Butter",
            "Fresh herbs",
            "Sea salt",
            "Black pepper",
          ],
          nutrition: {
            carbs: "1g",
            protein: "16g",
            fat: "22g",
            fiber: "0g",
          },
          allergens: ["Eggs", "Dairy"],
          chefRecommendation:
            "Best enjoyed immediately with crusty artisan bread",
          categ: "non-veg",
          note: "Spinach, Cheese, mushrooms, etc will be charged Additionally.",
        },
        {
          id: 204,
          name: "Omelette Burger (Eggwich)",
          slug: "omelette-burger",
          description:
            "Fluffy egg patty sandwiched between whole grain buns - breakfast meets burger",
          price: 12.49,
          calories: 420,
          prepTime: "15-18 mins",
          rating: 4.8,
          image: WeekTwoImgFour,
          ingredients: [
            "Thick egg patty",
            "Whole grain bun",
            "Avocado spread",
            "Tomato",
            "Arugula",
          ],
          nutrition: {
            carbs: "38g",
            protein: "22g",
            fat: "28g",
            fiber: "5g",
          },
          allergens: ["Eggs", "Gluten"],
          chefRecommendation:
            "Add bacon or sausage for a heartier breakfast sandwich",
          categ: "non-veg",
          note: "Spinach, Cheese, mushrooms, etc will be charged Additionally. Meat additions available.",
        },
        {
          id: 205,
          name: "Omelette Pops / Skewers",
          slug: "omelette-pops",
          description:
            "Fun mini omelettes on sticks with colorful veggie or cheese cubes - perfect for sharing",
          price: 11.99,
          calories: 280,
          prepTime: "20 mins",
          rating: 4.7,
          image: WeekTwoImgFive,
          ingredients: [
            "Bite-sized omelette cubes",
            "Cherry tomatoes",
            "Mozzarella balls",
            "Bell pepper cubes",
            "Fresh basil",
          ],
          nutrition: {
            carbs: "8g",
            protein: "20g",
            fat: "18g",
            fiber: "2g",
          },
          allergens: ["Eggs", "Dairy"],
          chefRecommendation:
            "Great for brunch parties with our dipping sauce trio",
          categ: "non-veg",
          note: "Spinach, Cheese, mushrooms, etc will be charged Additionally.",
        },

        //veg

        {
          id: 206,
          name: "Spiced Paneer with Veg",
          slug: "spiced-paneer-veg",
          description:
            "Cubes of paneer tossed with seasonal vegetables in aromatic spice blend",
          price: 15.99,
          calories: 350,
          prepTime: "20 mins",
          rating: 4.7,
          image: VegImg3,
          ingredients: [
            "Paneer cubes",
            "Bell peppers",
            "Onions",
            "Tomatoes",
            "Garam masala",
            "Turmeric",
            "Fresh fenugreek leaves",
          ],
          nutrition: {
            carbs: "22g",
            protein: "26g",
            fat: "20g",
            fiber: "5g",
          },
          allergens: ["Dairy"],
          chefRecommendation:
            "Excellent with roti or paratha (available separately)",
          categ: "veg",
          note: "Seasonal vegetables may vary",
        },
        {
          id: 207,
          name: "Paneer & Spinach Omelette (No Egg)",
          slug: "eggless-paneer-omelette",
          description:
            "Innovative egg-free omelette made with besan, stuffed with paneer and spinach",
          price: 13.99,
          calories: 320,
          prepTime: "15 mins",
          rating: 4.6,
          image: VegImg4,
          ingredients: [
            "Chickpea flour (besan)",
            "Crumbled paneer",
            "Chopped spinach",
            "Turmeric",
            "Cumin seeds",
            "Green chili paste",
          ],
          nutrition: {
            carbs: "28g",
            protein: "22g",
            fat: "18g",
            fiber: "6g",
          },
          allergens: ["Dairy"],
          chefRecommendation:
            "Serve with tamarind chutney for sweet-tangy contrast",
          categ: "veg",
          note: "Can be made vegan (replace paneer with tofu)",
        },
      ],

      week3: [
        {
          id: 301,
          name: "Green Garden Omelette",
          slug: "green-garden-omelette",
          description:
            "Fresh spinach, broccoli florets, and sweet peas in a fluffy egg wrap - nature's goodness",
          price: 11.49,
          calories: 280,
          prepTime: "15-18 mins",
          rating: 4.7,
          image: WeekThreeImgOne,
          ingredients: [
            "Organic eggs",
            "Baby spinach",
            "Broccoli florets",
            "Sweet peas",
            "Fresh dill",
          ],
          nutrition: {
            carbs: "12g",
            protein: "22g",
            fat: "16g",
            fiber: "4g",
          },
          allergens: ["Eggs"],
          chefRecommendation:
            "Drizzle with lemon-tahini sauce for extra flavor",
          categ: "non-veg",
          note: "Extra cheese or premium veggies will be charged additionally.",
        },
        {
          id: 302,
          name: "🔴 Red Pepper Omelette",
          slug: "red-pepper-omelette",
          description:
            "Vibrant bell peppers, juicy cherry tomatoes, and melted cheese - a colorful delight",
          price: 12.99,
          calories: 320,
          prepTime: "12-15 mins",
          rating: 4.8,
          image: WeekThreeImgTwo,
          ingredients: [
            "Farm eggs",
            "Red bell peppers",
            "Cherry tomatoes",
            "Goat cheese",
            "Paprika",
          ],
          nutrition: {
            carbs: "15g",
            protein: "24g",
            fat: "20g",
            fiber: "3g",
          },
          allergens: ["Eggs", "Dairy"],
          chefRecommendation: "Pair with our spicy harissa yogurt dip",
          categ: "non-veg",
          note: "Premium cheese upgrades available for additional charge.",
        },
        {
          id: 303,
          name: "🟠 Root Veg Fold (Tri-Fold)",
          slug: "root-veg-fold",
          description:
            "Earthiness of beetroot, sweetness of carrot, and zing of ginger in elegant tri-fold layers",
          price: 13.49,
          calories: 310,
          prepTime: "18-20 mins",
          rating: 4.9,
          image: WeekThreeImgThree,
          ingredients: [
            "Free-range eggs",
            "Shredded beetroot",
            "Julienned carrots",
            "Fresh ginger",
            "Turmeric",
          ],
          nutrition: {
            carbs: "18g",
            protein: "20g",
            fat: "15g",
            fiber: "5g",
          },
          allergens: ["Eggs"],
          chefRecommendation: "Excellent with a side of coconut yogurt",
          categ: "non-veg",
          note: "Cheese or protein additions available for extra charge.",
        },
        {
          id: 304,
          name: "🌽 Corn & Herbs Eggwich",
          slug: "corn-herbs-eggwich",
          description:
            "Sweet corn and fresh herb omelette sandwiched in wholesome whole wheat bread",
          price: 14.99,
          calories: 380,
          prepTime: "15 mins",
          rating: 4.6,
          image: WeekThreeImgFour,
          ingredients: [
            "Egg patty",
            "Sweet corn kernels",
            "Fresh basil & chives",
            "Whole wheat bread",
            "Garlic aioli",
          ],
          nutrition: {
            carbs: "42g",
            protein: "26g",
            fat: "22g",
            fiber: "6g",
          },
          allergens: ["Eggs", "Gluten", "Dairy"],
          chefRecommendation: "Add avocado slices for creaminess",
          categ: "non-veg",
          note: "Bacon or sausage additions available for non-veg version.",
        },
        {
          id: 305,
          name: "🍄 Mushroom Burst Roll-Up",
          slug: "mushroom-burst-rollup",
          description:
            "Savory button mushrooms, fresh parsley, and melted cheese in a neat roll-up package",
          price: 15.49,
          calories: 350,
          prepTime: "20 mins",
          rating: 4.9,
          image: WeekThreeImgFive,
          ingredients: [
            "Organic eggs",
            "Button mushrooms",
            "Parmesan cheese",
            "Fresh parsley",
            "Truffle oil",
          ],
          nutrition: {
            carbs: "10g",
            protein: "28g",
            fat: "24g",
            fiber: "2g",
          },
          allergens: ["Eggs", "Dairy", "Mushrooms"],
          chefRecommendation: "Sprinkle with toasted pine nuts for crunch",
          categ: "non-veg",
          note: "Wild mushroom upgrades available seasonally.",
        },

        //veg

        {
          id: 306,
          name: "Multigrain Paneer Sandwich",
          slug: "multigrain-paneer-sandwich",
          description:
            "Toasted multigrain bread with mint-paneer spread, cucumber and vibrant beet slaw",
          price: 12.99,
          calories: 380,
          prepTime: "12 mins",
          rating: 4.7,
          image: VegImg5,
          ingredients: [
            "Multigrain bread",
            "Mint-paneer spread",
            "Cucumber slices",
            "Beetroot-carrot slaw",
            "Honey-mustard dressing",
          ],
          nutrition: {
            carbs: "42g",
            protein: "24g",
            fat: "15g",
            fiber: "8g",
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation: "Perfect with masala chai for monsoon cravings",
          categ: "veg",
          note: "Gluten-free bread available (+$1.50)",
        },
        {
          id: 307,
          name: "Grilled Paneer Toast",
          slug: "grilled-paneer-toast",
          description:
            "Multigrain bread layered with grilled paneer slices, chili flakes and secret spices",
          price: 14.49,
          calories: 400,
          prepTime: "15 mins",
          rating: 4.8,
          image: VegImg6,
          ingredients: [
            "Multigrain bread",
            "Grilled paneer slices",
            "Chili flakes",
            "Chat masala",
            "Coriander chutney",
          ],
          nutrition: {
            carbs: "35g",
            protein: "28g",
            fat: "20g",
            fiber: "6g",
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation: "Add roasted garlic mayo for extra zing (50¢)",
          categ: "veg",
          note: "Extra paneer slices available (+$2)",
        },
        {
          id: 308,
          name: "Paneer Power Wrap",
          slug: "paneer-power-wrap",
          description:
            "Whole wheat wrap packed with spiced paneer, crunchy veggies and light cilantro sauce",
          price: 15.99,
          calories: 420,
          prepTime: "10 mins",
          rating: 4.9,
          image: VegImg7,
          ingredients: [
            "Whole wheat wrap",
            "Tandoori spiced paneer",
            "Shredded lettuce",
            "Bell peppers",
            "Cilantro-yogurt sauce",
            "Pickled onions",
          ],
          nutrition: {
            carbs: "45g",
            protein: "30g",
            fat: "18g",
            fiber: "7g",
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation: "Pair with mango lassi for complete meal",
          categ: "veg",
          note: "Add avocado for creaminess (+$1.50)",
        },
      ],

      week4: [
        {
          id: 401,
          name: "Super Greens Omelette",
          slug: "super-greens-omelette",
          description:
            "Power-packed with spinach, fresh mint, and green bell peppers - your daily greens in egg form",
          price: 12.99,
          calories: 260,
          prepTime: "15 mins",
          rating: 4.8,
          image: WeekFourImgOne,
          ingredients: [
            "Organic eggs",
            "Baby spinach",
            "Fresh mint leaves",
            "Green bell peppers",
            "Kale",
            "Pumpkin seeds",
          ],
          nutrition: {
            carbs: "8g",
            protein: "20g",
            fat: "18g",
            fiber: "5g",
          },
          allergens: ["Eggs"],
          chefRecommendation: "Top with avocado slices for healthy fats",
          categ: "non-veg",
          note: "Add feta or goat cheese for extra flavor (additional charge)",
        },
        {
          id: 402,
          name: "Garlic, Mint, Turmeric Omelette",
          slug: "garlic-mint-turmeric-omelette",
          description:
            "Bold flavors with immune-boosting turmeric, aromatic garlic, and refreshing mint",
          price: 13.49,
          calories: 290,
          prepTime: "18 mins",
          rating: 4.9,
          image: WeekFourImgTwo,
          ingredients: [
            "Free-range eggs",
            "Fresh garlic",
            "Mint leaves",
            "Turmeric",
            "Black pepper",
            "Ghee",
          ],
          nutrition: {
            carbs: "5g",
            protein: "18g",
            fat: "22g",
            fiber: "1g",
          },
          allergens: ["Eggs", "Dairy (ghee)"],
          chefRecommendation:
            "Pair with ginger tea for ultimate wellness boost",
          categ: "non-veg",
          note: "Can be made vegan with tofu substitute (additional charge)",
        },
        {
          id: 403,
          name: "Cottage Cheese Indian Masala Omelette",
          slug: "paneer-masala-omelette",
          description:
            "Spiced Indian cottage cheese (paneer) with onions, tomatoes, and garam masala",
          price: 14.99,
          calories: 380,
          prepTime: "20 mins",
          rating: 4.9,
          image: WeekFourImgThree,
          ingredients: [
            "Farm eggs",
            "Fresh paneer cubes",
            "Onions",
            "Tomatoes",
            "Cilantro",
            "Garam masala",
          ],
          nutrition: {
            carbs: "12g",
            protein: "32g",
            fat: "25g",
            fiber: "3g",
          },
          allergens: ["Eggs", "Dairy"],
          chefRecommendation: "Serve with mint chutney and buttered toast",
          categ: "non-veg",
          note: "Add extra paneer or veggies for additional charge",
        },
        {
          id: 404,
          name: "Mushroom Omelette",
          slug: "mushroom-omelette",
          description:
            "Sautéed button mushrooms with thyme and melted cheese in fluffy eggs",
          price: 15.49,
          calories: 320,
          prepTime: "15-18 mins",
          rating: 4.7,
          image: WeekFourImgFour,
          ingredients: [
            "Organic eggs",
            "Button mushrooms",
            "Swiss cheese",
            "Fresh thyme",
            "Shallots",
            "Truffle oil (drizzle)",
          ],
          nutrition: {
            carbs: "10g",
            protein: "24g",
            fat: "23g",
            fiber: "2g",
          },
          allergens: ["Eggs", "Dairy", "Mushrooms"],
          chefRecommendation: "Garnish with microgreens for earthy freshness",
          categ: "non-veg",
          note: "Upgrade to wild mushrooms seasonally available (premium charge)",
        },

        //veg

        {
          id: 405,
          name: "Multigrain Paneer Sandwich",
          slug: "multigrain-paneer-sandwich",
          description:
            "Toasted multigrain bread with mint-paneer spread, cucumber and vibrant beet slaw",
          price: 12.99,
          calories: 380,
          prepTime: "12 mins",
          rating: 4.7,
          image: VegImg5,
          ingredients: [
            "Multigrain bread",
            "Mint-paneer spread",
            "Cucumber slices",
            "Beetroot-carrot slaw",
            "Honey-mustard dressing",
          ],
          nutrition: {
            carbs: "42g",
            protein: "24g",
            fat: "15g",
            fiber: "8g",
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation: "Perfect with masala chai for monsoon cravings",
          categ: "veg",
          note: "Gluten-free bread available (+$1.50)",
        },
        {
          id: 406,
          name: "Paneer & Spinach Omelette (No Egg)",
          slug: "eggless-paneer-omelette",
          description:
            "Innovative egg-free omelette made with besan, stuffed with paneer and spinach",
          price: 13.99,
          calories: 320,
          prepTime: "15 mins",
          rating: 4.6,
          image: VegImg4,
          ingredients: [
            "Chickpea flour (besan)",
            "Crumbled paneer",
            "Chopped spinach",
            "Turmeric",
            "Cumin seeds",
            "Green chili paste",
          ],
          nutrition: {
            carbs: "28g",
            protein: "22g",
            fat: "18g",
            fiber: "6g",
          },
          allergens: ["Dairy"],
          chefRecommendation:
            "Serve with tamarind chutney for sweet-tangy contrast",
          categ: "veg",
          note: "Can be made vegan (replace paneer with tofu)",
        },
        {
          id: 407,
          name: "Grilled Paneer Toast",
          slug: "grilled-paneer-toast",
          description:
            "Multigrain bread layered with grilled paneer slices, chili flakes and secret spices",
          price: 14.49,
          calories: 400,
          prepTime: "15 mins",
          rating: 4.8,
          image: VegImg6,
          ingredients: [
            "Multigrain bread",
            "Grilled paneer slices",
            "Chili flakes",
            "Chat masala",
            "Coriander chutney",
          ],
          nutrition: {
            carbs: "35g",
            protein: "28g",
            fat: "20g",
            fiber: "6g",
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation: "Add roasted garlic mayo for extra zing (50¢)",
          categ: "veg",
          note: "Extra paneer slices available (+$2)",
        },
        {
          id: 408,
          name: "Paneer Bhurji with Bread",
          slug: "paneer-bhurji-bread",
          description:
            "Spiced crumbled cottage cheese scramble served with soft white bread - comfort food perfected",
          price: 14.99,
          calories: 420,
          prepTime: "18-20 mins",
          rating: 4.9,
          image: VegImg1,
          ingredients: [
            "Fresh paneer",
            "Onions",
            "Tomatoes",
            "Green chilies",
            "Coriander leaves",
            "Pav bhaji masala",
            "White bread",
          ],
          nutrition: {
            carbs: "38g",
            protein: "28g",
            fat: "22g",
            fiber: "4g",
          },
          allergens: ["Dairy", "Gluten"],
          chefRecommendation:
            "Best enjoyed with buttered bread and sliced onions",
          categ: "veg",
          note: "Whole wheat bread available on request (no extra charge)",
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
