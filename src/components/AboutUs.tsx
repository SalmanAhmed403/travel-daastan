import React from 'react';
import { Globe, Users, Heart, Map } from 'lucide-react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">About DastaanTrails</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-6">Our Story</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              DastaanTrails was born from a passion to showcase Pakistan's incredible beauty and rich cultural heritage to the world. Our mission is to guide travelers through the enchanting landscapes, ancient traditions, and warm hospitality that make Pakistan truly special.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From the mighty peaks of the Karakoram to the historic streets of Lahore, we're here to help you discover the hidden gems and timeless stories of this remarkable land.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Globe, title: 'Cultural Heritage', value: '5000+ Years' },
              { icon: Users, title: 'Happy Travelers', value: '10000+' },
              { icon: Map, title: 'Destinations', value: '100+' },
              { icon: Heart, title: 'Local Experiences', value: '500+' }
            ].map(({ icon: Icon, title, value }) => (
              <div key={title} className="bg-white p-6 rounded-xl shadow-md text-center">
                <Icon className="h-8 w-8 mx-auto mb-4 text-indigo-600" />
                <h4 className="font-semibold text-gray-900">{title}</h4>
                <p className="text-indigo-600 font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-600">
              To promote sustainable tourism while preserving Pakistan's natural beauty and cultural heritage for future generations.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To make Pakistan a premier travel destination, showcasing its diversity and hospitality to the world.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-gray-600">
              Authenticity, sustainability, and respect for local communities guide everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}