'use client';

import { useState } from 'react';
import { ArrowLeft, MapPin, Star, Search, Globe, Users, Mountain, Building2 } from 'lucide-react';

export default function Shaharlar({ onBack, onCitySelect }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('all');

    const categories = {
        all: { label: 'Barchasi', icon: <Globe className="h-4 w-4" /> },
        popular: { label: 'Mashhurlar', icon: <Star className="h-4 w-4" /> },
        uzbekistan: { label: "O'zbekiston", icon: <Building2 className="h-4 w-4" /> },
        capital: { label: 'Poytaxtlar', icon: <Building2 className="h-4 w-4" /> },
        resort: { label: 'Damohatlar', icon: <Mountain className="h-4 w-4" /> }
    };

    const cities = [
        // O'zbekiston shaharlari
        { name: 'Toshkent', country: 'UZ', category: ['uzbekistan', 'capital'], population: '2.5M', description: 'Oʻzbekiston poytaxti' },
        { name: 'Buxoro', country: 'UZ', category: ['uzbekistan', 'popular'], population: '280K', description: 'Qadimiy madaniyat markazi' },
        { name: 'Samarqand', country: 'UZ', category: ['uzbekistan', 'popular'], population: '530K', description: 'Amir Temur poytaxti' },
        { name: 'Xiva', country: 'UZ', category: ['uzbekistan', 'popular'], population: '90K', description: 'Qadimiy xorazm shahri' },
        { name: 'Andijon', country: 'UZ', category: ['uzbekistan'], population: '450K', description: 'Fargʻona vodiysi' },
        { name: 'Namangan', country: 'UZ', category: ['uzbekistan'], population: '626K', description: 'Fargʻona vodiysi' },
        { name: 'Fargʻona', country: 'UZ', category: ['uzbekistan'], population: '333K', description: 'Fargʻona vodiysi' },
        { name: 'Qarshi', country: 'UZ', category: ['uzbekistan'], population: '274K', description: 'Qashqadaryo viloyati' },
        { name: 'Nukus', country: 'UZ', category: ['uzbekistan'], population: '230K', description: 'Qoraqalpogʻiston poytaxti' },
        { name: 'Termiz', country: 'UZ', category: ['uzbekistan'], population: '136K', description: 'Surxondaryo viloyati' },
        { name: 'Jizzax', country: 'UZ', category: ['uzbekistan'], population: '179K', description: 'Jizzax viloyati' },
        { name: 'Navoiy', country: 'UZ', category: ['uzbekistan'], population: '146K', description: 'Navoiy viloyati' },
        
        // Dunyo poytaxtlari
        { name: 'Moscow', country: 'RU', category: ['capital', 'popular'], population: '12.6M', description: 'Rossiya poytaxti' },
        { name: 'London', country: 'GB', category: ['capital', 'popular'], population: '9.0M', description: 'Buyuk Britaniya poytaxti' },
        { name: 'Paris', country: 'FR', category: ['capital', 'popular'], population: '2.1M', description: 'Fransiya poytaxti' },
        { name: 'Berlin', country: 'DE', category: ['capital'], population: '3.7M', description: 'Germaniya poytaxti' },
        { name: 'Tokyo', country: 'JP', category: ['capital', 'popular'], population: '37.4M', description: 'Yaponiya poytaxti' },
        { name: 'Beijing', country: 'CN', category: ['capital'], population: '21.5M', description: 'Xitoy poytaxti' },
        { name: 'New York', country: 'US', category: ['popular'], population: '8.4M', description: 'AQShning yirik shahri' },
        { name: 'Istanbul', country: 'TR', category: ['popular'], population: '15.5M', description: 'Turkiyaning yirik shahri' },
        { name: 'Dubai', country: 'AE', category: ['popular'], population: '3.3M', description: 'BAAning yirik shahri' },
        { name: 'Singapore', country: 'SG', category: ['capital'], population: '5.7M', description: 'Singapur poytaxti' },
        
        // Damohat shaharlari
        { name: 'Antalya', country: 'TR', category: ['resort'], population: '2.4M', description: 'Turkiyaning dam olish maskani' },
        { name: 'Bali', country: 'ID', category: ['resort'], population: '4.3M', description: 'Indoneziya oroli' },
        { name: 'Phuket', country: 'TH', category: ['resort'], population: '416K', description: 'Taylandning dengiz boʻyi' },
        { name: 'Sharm El Sheikh', country: 'EG', category: ['resort'], population: '73K', description: 'Misrning kurort shahri' }
    ];

    const filteredCities = cities.filter(city => {
        const matchesSearch = city.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            city.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = activeCategory === 'all' || city.category.includes(activeCategory);
        return matchesSearch && matchesCategory;
    });

    const getCountryFlag = (countryCode) => {
        const flags = {
            'UZ': '🇺🇿', 'RU': '🇷🇺', 'GB': '🇬🇧', 'FR': '🇫🇷', 'DE': '🇩🇪',
            'JP': '🇯🇵', 'CN': '🇨🇳', 'US': '🇺🇸', 'TR': '🇹🇷', 'AE': '🇦🇪',
            'SG': '🇸🇬', 'ID': '🇮🇩', 'TH': '🇹🇭', 'EG': '🇪🇬'
        };
        return flags[countryCode] || '🏴';
    };

    const getCategoryCount = (category) => {
        if (category === 'all') return cities.length;
        return cities.filter(city => city.category.includes(category)).length;
    };

    return (
        <div className="min-h-screen bg-black/80">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <button
                        onClick={onBack}
                        className="flex items-center space-x-2 text-white hover:text-white/80 transition-colors duration-200 bg-white/20 backdrop-blur-md rounded-xl px-4 py-3 border border-white/30"
                    >
                        <ArrowLeft className="h-5 w-5" />
                        <span>Orqaga</span>
                    </button>
                    <h1 className="text-3xl font-bold text-white flex items-center space-x-3">
                        <MapPin className="h-8 w-8" />
                        <span>Shaharlar Katalogi</span>
                    </h1>
                    <div className="w-32"></div>
                </div>

                {/* Search */}
                <div className="mb-6">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            placeholder="Shahar nomi yoki tavsif boʻyicha qidiring..."
                            className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                        />
                    </div>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {Object.entries(categories).map(([key, category]) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(key)}
                            className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium transition-all duration-200 border ${
                                activeCategory === key
                                    ? 'bg-white text-green-600 border-white shadow-lg'
                                    : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
                            }`}
                        >
                            {category.icon}
                            <span>{category.label}</span>
                            <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                                {getCategoryCount(key)}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Cities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                    {filteredCities.map((city, index) => (
                        <div
                            key={index}
                            className="bg-white/20 backdrop-blur-md rounded-2xl p-4 border border-white/30 hover:border-white/50 hover:bg-white/30 transition-all duration-300 cursor-pointer group shadow-xl"
                            onClick={() => onCitySelect(city.name)}
                        >
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center space-x-2">
                                    <span className="text-2xl">{getCountryFlag(city.country)}</span>
                                    <h3 className="text-lg font-bold text-white group-hover:text-white/90">
                                        {city.name}
                                    </h3>
                                </div>
                                {city.category.includes('popular') && (
                                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                                )}
                            </div>
                            
                            <p className="text-white/70 text-sm mb-3 line-clamp-2">
                                {city.description}
                            </p>
                            
                            <div className="flex items-center justify-between text-xs text-white/60">
                                <div className="flex items-center space-x-1">
                                    <Users className="h-3 w-3" />
                                    <span>{city.population}</span>
                                </div>
                                <div className="flex space-x-1">
                                    {city.category.map((cat, idx) => (
                                        <span
                                            key={idx}
                                            className="bg-white/20 px-2 py-1 rounded-full capitalize"
                                        >
                                            {categories[cat]?.label || cat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State */}
                {filteredCities.length === 0 && (
                    <div className="text-center py-12">
                        <MapPin className="h-16 w-16 text-white/50 mx-auto mb-4" />
                        <h3 className="text-xl font-bold text-white mb-2">Shahar topilmadi</h3>
                        <p className="text-white/70">
                            "{searchTerm}" boʻyicha hech qanday shahar topilmadi. <br />
                            Boshqa kalit soʻzlar bilan qidiring yoki filterni oʻzgartiring.
                        </p>
                    </div>
                )}

                {/* Statistics */}
                <div className="mt-8 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                    <h3 className="text-xl font-bold text-white mb-4">Katalog Ma'lumotlari</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div>
                            <div className="text-2xl font-bold text-white">{cities.length}</div>
                            <div className="text-white/70 text-sm">Jami Shaharlar</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">
                                {cities.filter(c => c.country === 'UZ').length}
                            </div>
                            <div className="text-white/70 text-sm">Oʻzbekiston</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">
                                {cities.filter(c => c.category.includes('capital')).length}
                            </div>
                            <div className="text-white/70 text-sm">Poytaxtlar</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-white">
                                {cities.filter(c => c.category.includes('popular')).length}
                            </div>
                            <div className="text-white/70 text-sm">Mashhurlar</div>
                        </div>
                    </div>
                </div>

                
            </div>
        </div>
    );
}