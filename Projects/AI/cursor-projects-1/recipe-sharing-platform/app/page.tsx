import Image from "next/image";
import { Search, Heart, Clock, Star, User, Menu } from "lucide-react";

export default function Home() {
  // Mock data for featured recipes
  const featuredRecipes = [
    {
      id: 1,
      title: "Creamy Mushroom Risotto",
      author: "Chef Maria",
      rating: 4.8,
      cookTime: "45 min",
      image: "/api/placeholder/300/200",
      tags: ["Italian", "Vegetarian"]
    },
    {
      id: 2,
      title: "Spicy Thai Curry",
      author: "Chef John",
      rating: 4.6,
      cookTime: "30 min",
      image: "/api/placeholder/300/200",
      tags: ["Thai", "Spicy"]
    },
    {
      id: 3,
      title: "Classic Beef Burger",
      author: "Chef Sarah",
      rating: 4.9,
      cookTime: "25 min",
      image: "/api/placeholder/300/200",
      tags: ["American", "Beef"]
    },
    {
      id: 4,
      title: "Chocolate Lava Cake",
      author: "Chef David",
      rating: 4.7,
      cookTime: "20 min",
      image: "/api/placeholder/300/200",
      tags: ["Dessert", "Chocolate"]
    }
  ];

  const categories = [
    "All", "Breakfast", "Lunch", "Dinner", "Dessert", 
    "Vegetarian", "Vegan", "Gluten-Free", "Quick & Easy"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-orange-600">RecipeShare</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Recipes</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Categories</a>
                <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Sign In
              </button>
              <button className="bg-white border border-orange-600 text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Discover & Share
              <span className="text-orange-600 block">Amazing Recipes</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our community of food lovers. Share your favorite recipes, discover new dishes, 
              and connect with fellow cooking enthusiasts from around the world.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search for recipes, ingredients, or chefs..."
                  className="w-full pl-10 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition-colors">
                  Search
                </button>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Start Sharing
              </button>
              <button className="bg-white border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
                Browse Recipes
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Popular Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 bg-gray-100 hover:bg-orange-100 text-gray-700 hover:text-orange-700 rounded-full font-medium transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Recipes */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 bg-gradient-to-br from-orange-200 to-red-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-orange-600 text-6xl">🍽️</div>
                  </div>
                  <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                    <Heart className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h3>
                  <p className="text-gray-600 mb-4">by {recipe.author}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{recipe.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span className="text-sm">{recipe.cookTime}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {recipe.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="w-full bg-orange-600 hover:bg-orange-700 text-white py-2 rounded-lg font-medium transition-colors">
                    View Recipe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-orange-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white mb-2">10,000+</div>
              <div className="text-orange-100">Recipes Shared</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">5,000+</div>
              <div className="text-orange-100">Happy Chefs</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white mb-2">50,000+</div>
              <div className="text-orange-100">Meals Cooked</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-orange-600 mb-4">RecipeShare</h3>
              <p className="text-gray-400">
                Connecting food lovers worldwide through the joy of cooking and sharing.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Browse Recipes</a></li>
                <li><a href="#" className="hover:text-white">Share Recipe</a></li>
                <li><a href="#" className="hover:text-white">Categories</a></li>
                <li><a href="#" className="hover:text-white">Chefs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Support</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RecipeShare. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
