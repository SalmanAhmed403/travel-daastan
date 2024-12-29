import React, { useState } from 'react';
import { X, MapPin, Calendar, Star, Send } from 'lucide-react';
import type { Destination, Review } from '../types';

interface CityDetailsProps {
  city: Destination;
  onClose: () => void;
}

export default function CityDetails({ city, onClose }: CityDetailsProps) {
  const [activeImage, setActiveImage] = useState(0);
  const [review, setReview] = useState({ rating: 5, comment: '' });

  const handleSubmitReview = () => {
    const newReview: Review = {
      id: Date.now().toString(),
      userName: 'Guest User',
      rating: review.rating,
      comment: review.comment,
      date: new Date().toISOString().split('T')[0]
    };
    city.reviews.push(newReview);
    setReview({ rating: 5, comment: '' });
  };

  return (
    <div className="fixed inset-0 bg-black/50 z-50 overflow-y-auto">
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Image Gallery */}
          <div className="relative h-96">
            <img
              src={city.images[activeImage]}
              alt={city.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 flex justify-center gap-2">
              {city.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(idx)}
                  className={`w-3 h-3 rounded-full ${
                    idx === activeImage ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">{city.name}</h2>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span>{city.location}</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">About</h3>
                <p className="text-gray-600">{city.description}</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">History</h3>
                <p className="text-gray-600">{city.history}</p>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Things to See</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {city.thingsToSee.map((thing) => (
                  <div
                    key={thing}
                    className="bg-indigo-50 text-indigo-700 px-4 py-2 rounded-lg text-center"
                  >
                    {thing}
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Local Food</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {city.localFood.map((food) => (
                  <div
                    key={food.name}
                    className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4"
                  >
                    <img
                      src={food.image}
                      alt={food.name}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div>
                      <h4 className="font-semibold">{food.name}</h4>
                      <p className="text-gray-600">{food.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Reviews</h3>
              
              {/* Add Review */}
              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      onClick={() => setReview({ ...review, rating: star })}
                    >
                      <Star
                        className={`h-6 w-6 ${
                          star <= review.rating
                            ? 'text-yellow-400 fill-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                <div className="flex gap-4">
                  <input
                    type="text"
                    placeholder="Write your review..."
                    className="flex-1 px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={review.comment}
                    onChange={(e) =>
                      setReview({ ...review, comment: e.target.value })
                    }
                  />
                  <button
                    onClick={handleSubmitReview}
                    className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 flex items-center"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Submit
                  </button>
                </div>
              </div>

              {/* Review List */}
              <div className="space-y-4">
                {city.reviews.map((review) => (
                  <div
                    key={review.id}
                    className="border-b pb-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <span className="font-semibold mr-2">{review.userName}</span>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-gray-500 text-sm">{review.date}</span>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}