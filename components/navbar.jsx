'use client';

import { Cloud, MapPin, Settings, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className=" backdrop-blur-md border-b border-white/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-yellow-300" />
            <span className="text-xl font-bold text-white">WeatherUz</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium">
              Bosh Sahifa
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium">
              Shaharlar
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium">
              Xarita
            </a>
            <a href="#" className="text-white hover:text-yellow-300 transition-colors duration-200 font-medium">
              Ma'lumot
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-yellow-300 transition-colors duration-200">
              <MapPin className="h-5 w-5" />
            </button>
            <button className="text-white hover:text-yellow-300 transition-colors duration-200">
              <Bell className="h-5 w-5" />
            </button>
            <button className="text-white hover:text-yellow-300 transition-colors duration-200">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}