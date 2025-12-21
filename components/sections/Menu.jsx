"use client"
import { useState } from "react";
import { motion } from "framer-motion";

function MenuComponent() {
  const [activeCategory, setActiveCategory] = useState("All");

  const menuItems = [
    { name: "Espresso", price: "$3.50", description: "Rich and bold coffee shot.", category: "Coffee" },
    { name: "Latte", price: "$4.00", description: "Smooth espresso with steamed milk.", category: "Coffee" },
    { name: "Cappuccino", price: "$4.20", description: "Espresso with equal parts steamed and foamed milk.", category: "Coffee" },
    { name: "Americano", price: "$3.80", description: "Espresso diluted with hot water.", category: "Coffee" },
    { name: "Croissant", price: "$2.50", description: "Freshly baked, buttery pastry.", category: "Pastry" },
    { name: "Muffin", price: "$2.20", description: "Soft and moist, available in various flavors.", category: "Pastry" },
  ];

  const categories = ["All", ...new Set(menuItems.map(item => item.category))];

  const filteredItems = activeCategory === "All"
    ? menuItems
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-12 px-6 scroll-mt-20" id="menu">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Menu</h2>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category
                  ? "bg-[#00704A] text-white"
                  : "bg-white text-gray-700 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium text-[#00704A]">{item.price}</span>
                <span className="text-sm text-gray-500">{item.category}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MenuComponent;
