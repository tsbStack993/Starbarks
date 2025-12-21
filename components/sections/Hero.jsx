"use client"
import { motion } from "framer-motion";

function HeroSection() {
  return (
    <section className="flex flex-col md:flex-row h-screen mx-auto px-4 sm:px-6 xl:px-32 bg-[url('/images/p6.jpg')] bg-cover bg-center shadow-lg">
      {/* Left Section (60%) */}
      <div className="md:w-3/5 w-full flex flex-col justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
        >
          Finest Coffee Blends
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg font-semibold text-gray-600 mb-8 lg:w-2/3"
        >
           Our expert baristas craft every cup with passion,
            making your visit unforgettable.
        </motion.p>
        <div>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#00704A] text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90"
          >
            Explore Menu
          </motion.button>
        </div>
      </div>

      {/* Right Section (40%) */}
      <div className="md:w-2/5 w-full flex justify-center items-center p-6">
        <motion.img
          src={"/images/hero.png"}
          alt="Coffee Shop"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-full h-auto rounded-lg"
        />
      </div>
    </section>
  );
}

export default HeroSection;
