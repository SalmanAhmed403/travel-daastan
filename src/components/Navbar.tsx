import React, { useState } from 'react';
import { Map, Search, X } from 'lucide-react';

export default function Navbar({ onSearch }: { onSearch: (query: string) => void }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  return (
    <nav className="fixed w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-pink-800 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2">
            <Map className="h-8 w-8" />
            <span className="text-2xl font-bold tracking-wider">DastaanTrails</span>
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="/" className="font-semibold hover:text-pink-200 transition-colors">Home</a>
            <a href="#destinations" className="font-semibold hover:text-pink-200 transition-colors">Destinations</a>
            <a href="#about" className="font-semibold hover:text-pink-200 transition-colors">About</a>
            <a href="#contact" className="font-semibold hover:text-pink-200 transition-colors">Contact</a>
          </div>

          <div className="relative">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              {isSearchOpen ? <X className="h-6 w-6" /> : <Search className="h-6 w-6" />}
            </button>

            {isSearchOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden transform origin-top-right transition-all">
                <div className="p-2">
                  <input
                    type="text"
                    placeholder="Search destinations..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full px-4 py-2 text-gray-900 bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}