"use client"
import { useState } from "react";
import { motion } from "framer-motion";

function GuestReview() {
  const [reviews, setReviews] = useState([
    { name: "Sarah", rating: 5, comment: "Great coffee and friendly staff!" },
    { name: "James", rating: 4, comment: "Nice ambiance, will come back." },
  ]);
  const [newReview, setNewReview] = useState({ name: "", rating: 0, comment: "" });

  const handleRating = (rating) => {
    setNewReview({ ...newReview, rating });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newReview.name && newReview.rating && newReview.comment) {
      setReviews([...reviews, newReview]);
      setNewReview({ name: "", rating: 0, comment: "" });
    }
  };

  return (
    <section className="py-16 px-6 bg-gray-50 scroll-mt-24" id="review">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Guest Reviews</h2>

        {/* Review Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-lg shadow-md mb-8 bg-[url('/images/p4.jpg')] bg-cover bg-center "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3 className="text-xl font-semibold mb-4">Add Your Review</h3>
          <input
            type="text"
            placeholder="Your Name"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <div className="mb-4">
            <label className="block mb-2">Rating:</label>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => handleRating(star)}
                  className={`text-2xl ${newReview.rating >= star ? "text-yellow-500" : "text-gray-400"}`}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
          <textarea
            placeholder="Your Review"
            value={newReview.comment}
            onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
            className="w-full p-2 border rounded mb-4"
            required
          />
          <button
            type="submit"
            className="bg-[#00704A] text-white px-4 py-2 rounded hover:bg-opacity-90"
          >
            Submit Review
          </button>
        </motion.form>

        {/* Display Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-[url('/images/p4.jpg')] bg-cover bg-center  p-6 rounded-lg shadow"
            >
              <div className="flex items-center mb-2">
                <span className="font-semibold">{review.name}</span>
                <div className="ml-2 flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-600">{review.comment}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default GuestReview;
