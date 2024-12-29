import React from 'react';
import { MapPin } from 'lucide-react';
import { Country } from '../types';

interface CountryCardProps {
  country: Country;
  onSelect: () => void;
}

export default function CountryCard({ country, onSelect }: CountryCardProps) {
  return (
    <div 
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105"
      onClick={onSelect}
    >
      <img 
        src={country.coverImage} 
        alt={country.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center mb-2">
          <MapPin className="h-5 w-5 text-blue-600 mr-2" />
          <h3 className="text-xl font-bold text-gray-800">{country.name}</h3>
        </div>
        <p className="text-gray-600 mb-4">{country.shortDescription}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{country.destinations.length} destinations</span>
          <span className="mx-2">•</span>
          <span>{country.bestTimeToVisit}</span>
        </div>
      </div>
    </div>
  );
}