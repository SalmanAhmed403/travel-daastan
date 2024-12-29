import React from 'react';
import { MapPin, Star } from 'lucide-react';
import type { Destination } from '../types';

interface CityCardProps {
  city: Destination;
  onSelect: () => void;
}

export default function CityCard({ city, onSelect }: CityCardProps) {
  const averageRating = city.reviews.reduce((acc, review) => acc + review.rating, 0) / city.reviews.length;

  return (
    <div 
      className="group bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
      onClick={onSelect}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={city.images[0]} 
          alt={city.name}
          className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-white">{city.name}</h3>
            <div className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-2 py-1">
              <Star className="h-4 w-4 text-yellow-400 mr-1" />
              <span className="text-white">{averageRating.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex items-center text-white/80 mt-2">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{city.location}</span>
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-gray-600 line-clamp-2">{city.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {city.thingsToSee.slice(0, 3).map((thing) => (
            <span 
              key={thing}
              className="text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-full"
            >
              {thing}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}