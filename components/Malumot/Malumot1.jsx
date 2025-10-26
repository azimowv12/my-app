'use client';

import { useState } from 'react';
import { ArrowLeft, Info, Globe, Database, Shield, Code, Users, Cloud, Sun, Wind, Droplets } from 'lucide-react';

export default function Malumot1() {
    const [activeTab, setActiveTab] = useState('about');

    const features = [
        {
            icon: <Globe className="h-8 w-8" />,
            title: "Global Qamrov",
            description: "Dunyo bo'ylab 200,000+ shahar va qishloqlarning aniq ob-havo ma'lumotlari"
        },
        {
            icon: <Database className="h-8 w-8" />,
            title: "5 Kunlik Prognoz",
            description: "Keyingi 5 kun uchun batafsil ob-havo prognozi va har 3 soatlik ma'lumot"
        },
        {
            icon: <Cloud className="h-8 w-8" />,
            title: "To'liq Ma'lumot",
            description: "Harorat, namlik, shamol tezligi, bosim va boshqa muhim ko'rsatkichlar"
        },
        {
            icon: <Shield className="h-8 w-8" />,
            title: "Ishonchli Ma'lumot",
            description: "OpenWeatherMap API asosida ishlaydi - dunyoning eng ishonchli ob-havo manbai"
        }
    ];

    const techStack = [
        { name: "React.js", description: "Zamonaviy frontend framework" },
        { name: "Next.js", description: "React asosidagi fullstack framework" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework" },
        { name: "OpenWeatherMap API", description: "Ob-havo ma'lumotlari manbai" },
        { name: "Axios", description: "HTTP so'rovlari kutubxonasi" }
    ];

    const weatherTerms = [
        {
            term: "Harorat",
            description: "Havoning issiqlik darajasi, °C da",
            icon: <Sun className="h-5 w-5 text-yellow-500" />
        },
        {
            term: "Namlik",
            description: "Havadagi namlik miqdori, % da",
            icon: <Droplets className="h-5 w-5 text-blue-400" />
        },
        {
            term: "Shamol tezligi",
            description: "Shamolning harakat tezligi, m/s da",
            icon: <Wind className="h-5 w-5 text-gray-400" />
        },
        {
            term: "Atmosfera bosimi",
            description: "Havo bosimi, hPa da",
            icon: <Cloud className="h-5 w-5 text-gray-500" />
        }
    ];

    return (
        <div className="min-h-screenp-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">

                    <h1 className="text-3xl text-center font-bold text-white flex items-center space-x-3">
                        <Info className="h-8 w-8" />
                        <span>Dastur Haqida Ma'lumot</span>
                    </h1>
                    <div className="w-32"></div> {/* Balance uchun bo'sh div */}
                </div>

                {/* Tabs */}
                <div className="flex space-x-1 mb-8 bg-white/20 backdrop-blur-md rounded-2xl p-2 border border-white/30">
                    {[
                        { id: 'about', label: 'Dastur Haqida', icon: <Info className="h-4 w-4" /> },
                        { id: 'tech', label: 'Texnologiyalar', icon: <Code className="h-4 w-4" /> },
                        { id: 'terms', label: 'Atamalar', icon: <Cloud className="h-4 w-4" /> },
                        { id: 'team', label: 'Jamoa', icon: <Users className="h-4 w-4" /> }
                    ].map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 flex-1 text-center justify-center ${activeTab === tab.id
                                ? 'bg-white text-blue-600 shadow-lg'
                                : 'text-white hover:bg-white/10'
                                }`}
                        >
                            {tab.icon}
                            <span>{tab.label}</span>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="bg-white/20 backdrop-blur-md rounded-2xl p-8 border border-white/30">
                    {/* About Tab */}
                    {activeTab === 'about' && (
                        <div className="space-y-8">
                            <div className="text-center mb-8">
                                <h2 className="text-3xl font-bold text-white mb-4">Ob-havo Dasturi Haqida</h2>
                                <p className="text-white/80 text-lg max-w-3xl mx-auto">
                                    Bu zamonaviy ob-havo dasturi dunyo bo'ylab barcha shahar va qishloqlarning
                                    aniq ob-havo ma'lumotlarini taqdim etadi. Dastur ochiq manbali texnologiyalar
                                    asosida yaratilgan bo'lib, foydalanish uchun mutlaqo bepul.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                                    >
                                        <div className="text-blue-200 mb-4">{feature.icon}</div>
                                        <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                                        <p className="text-white/70">{feature.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 mt-8">
                                <h3 className="text-2xl font-bold text-white mb-4">Dastur Imkoniyatlari</h3>
                                <ul className="text-white/70 space-y-3">
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span>Joriy ob-havo ma'lumotlari</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span>5 kunlik batafsil ob-havo prognozi</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span>Shamol tezligi va yo'nalishi</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span>Atmosfera bosimi va namlik</span>
                                    </li>
                                    <li className="flex items-center space-x-3">
                                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                        <span>Ko'rinish masofasi</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Tech Tab */}
                    {activeTab === 'tech' && (
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-white text-center mb-8">Ishlatilgan Texnologiyalar</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {techStack.map((tech, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                                    >
                                        <h3 className="text-xl font-bold text-white mb-3">{tech.name}</h3>
                                        <p className="text-white/70">{tech.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 mt-8">
                                <h3 className="text-2xl font-bold text-white mb-4">API Ma'lumotlari</h3>
                                <div className="text-white/70 space-y-4">
                                    <p>
                                        <strong>Manba:</strong> OpenWeatherMap API
                                    </p>
                                    <p>
                                        <strong>Ma'lumot yangilanishi:</strong> Har 3 soatda
                                    </p>
                                    <p>
                                        <strong>Qamrov:</strong> 200,000+ shahar
                                    </p>
                                    <p>
                                        <strong>Aniqlik:</strong> 99.9% ishonchlilik
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Terms Tab */}
                    {activeTab === 'terms' && (
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-white text-center mb-8">Ob-havo Atamalari</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {weatherTerms.map((term, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
                                    >
                                        <div className="flex items-center space-x-3 mb-4">
                                            {term.icon}
                                            <h3 className="text-xl font-bold text-white">{term.term}</h3>
                                        </div>
                                        <p className="text-white/70">{term.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                                <h3 className="text-2xl font-bold text-white mb-4">Harorat Shkalasi</h3>
                                <div className="text-white/70 space-y-3">
                                    <div className="flex justify-between">
                                        <span>📛 Juda issiq: 35°C+</span>
                                        <span>❄️ Sovuq: 0°C-</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>☀️ Issiq: 25-35°C</span>
                                        <span>🌡️ Iliq: 15-25°C</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Team Tab */}
                    {activeTab === 'team' && (
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold text-white text-center mb-8">Loyiha Jamosi</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {[
                                    {
                                        name: "Dasturchi",
                                        role: "Full Stack Developer",
                                        description: "Loyihaning barcha qismlarini ishlab chiqish"
                                    },
                                    {
                                        name: "OpenWeatherMap",
                                        role: "Ma'lumotlar Manbai",
                                        description: "Ob-havo API xizmati"
                                    },
                                    {
                                        name: "Foydalanuvchilar",
                                        role: "Test Qiluvchilar",
                                        description: "Dasturni sinovdan o'tkazish"
                                    }
                                ].map((member, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 text-center"
                                    >
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Users className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                                        <p className="text-blue-200 font-medium mb-3">{member.role}</p>
                                        <p className="text-white/70">{member.description}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-center">
                                <h3 className="text-2xl font-bold text-white mb-4">Loyiha Maqsadi</h3>
                                <p className="text-white/70 text-lg">
                                    Bu loyiha ochiq manbali texnologiyalar yordamida oddiy va samarali
                                    ob-havo dasturini yaratish maqsadida ishlab chiqilgan.
                                    Barcha foydalanuvchilar uchun bepul va ochiq manba.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

               
            </div>
        </div>
    );
}