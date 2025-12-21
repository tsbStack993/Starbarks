"use client"
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <section className="py-16 px-6 scroll-mt-24" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-6">About Us</h2>
          <p className="text-sm font-semibold md:text-lg text-gray-600 mb-6">
            Starbarks was founded with a passion for crafting exceptional coffee experiences. Our baristas are dedicated to quality, ensuring every cup is brewed to perfection. We believe in creating a warm and welcoming atmosphere where every guest feels at home.
          </p>
          <p className="text-sm md:text-lg text-gray-600">
            Join us for a cup of coffee and discover the difference that care and craftsmanship make.
          </p>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8}}
          className="md:w-1/2"
        >
          <img
            src={"/images/logo.png"}
            alt="Our Team"
            className="w-full h-auto rounded-lg "
          />
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
