import React from 'react';
import { ArrowLeft, MapPin, History, Utensils, Camera } from 'lucide-react';
import { Country } from '../types';

interface DestinationDetailsProps {
  country: Country;
  onBack: () => void;
}

export default function DestinationDetails({ country, onBack }: DestinationDetailsProps) {
  return (
    <div>
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 mb-6 hover:text-blue-800"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Countries
      </button>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="relative h-96">
          <img 
            src={country.coverImage} 
            alt={country.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">{country.name}</h1>
          </div>
        </div>

        <div className="p-8">
          <p className="text-xl text-gray-700 mb-8">{country.description}</p>

          <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {country.destinations.map((dest) => (
              <div key={dest.id} className="border rounded-lg p-4">
                <img 
                  src={dest.image} 
                  alt={dest.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{dest.name}</h3>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <div className="flex items-center text-sm text-gray-500">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{dest.location}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <History className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold">History</h3>
              </div>
              <p className="text-gray-600">{country.history}</p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Utensils className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold">Culture & Cuisine</h3>
              </div>
              <p className="text-gray-600">{country.culture}</p>
            </div>
            <div>
              <div className="flex items-center mb-4">
                <Camera className="h-6 w-6 text-blue-600 mr-2" />
                <h3 className="text-xl font-bold">Best Time to Visit</h3>
              </div>
              <p className="text-gray-600">{country.bestTimeToVisit}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}