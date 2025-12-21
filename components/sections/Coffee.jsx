"use client"
import React from "react";
import { motion } from "framer-motion";
import MenuComponent from "./Menu";



export default function LandingPage() {
  return (
    <div className="font-sans bg-gradient-to-b from-amber-50 to-amber-100 text-gray-800">
      <MenuComponent/>
      {/* Features Section */}
      <section className="py-20 px-6 bg-white xl:px-32  ">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Starbarks?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {["Fresh Beans", "Flexible Plans", "Eco-Friendly"].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-amber-50 rounded-lg shadow-md text-center"
            >
              <h3 className="text-xl font-semibold mb-2 text-[#00704A]">{feature}</h3>
              <p>Enjoy {feature.toLowerCase()} with every cup.</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
