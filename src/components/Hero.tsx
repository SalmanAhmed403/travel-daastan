import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1586804097106-f87c276b6aa9?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-transparent" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Discover Pakistan
        </h1>
        <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 animate-fade-in-delay">
          Journey through ancient lands, majestic mountains, and rich cultural heritage
        </p>
        <a 
          href="#cities" 
          className="inline-flex items-center justify-center px-8 py-3 border-2 border-white text-lg font-semibold rounded-full hover:bg-white hover:text-indigo-900 transition-colors duration-300"
        >
          Explore Now
        </a>
        
        <ChevronDown className="absolute bottom-8 h-8 w-8 animate-bounce" />
      </div>
    </div>
  );
}