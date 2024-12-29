import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CityCard from './components/CityCard';
import CityDetails from './components/CityDetails';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import TeamSection from './components/TeamSection';
import LoadingSpinner from './components/LoadingSpinner';
import Pagination from './components/Pagination';
import { cities } from './data/cities';
import type { Destination } from './types';

const ITEMS_PER_PAGE = 6;

export default function App() {
  const [selectedCity, setSelectedCity] = useState<Destination | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredCities = cities.filter(city =>
    city.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    city.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredCities.length / ITEMS_PER_PAGE);
  const paginatedCities = filteredCities.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearch={setSearchQuery} />
      <Hero />
      
      <main>
        <section id="destinations" className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12">
            Explore Pakistan's Treasures
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {paginatedCities.map((city) => (
              <CityCard
                key={city.id}
                city={city}
                onSelect={() => setSelectedCity(city)}
              />
            ))}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </section>

        <AboutUs />
        <TeamSection />
        <Contact />
      </main>

      {selectedCity && (
        <CityDetails
          city={selectedCity}
          onClose={() => setSelectedCity(null)}
        />
      )}
    </div>
  );
}