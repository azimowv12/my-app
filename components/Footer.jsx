'use client';

import { useState } from 'react';
import {
    Heart,
    Mail,
    Phone,
    MapPin,
    Facebook,
    Twitter,
    Instagram,
    Youtube,
    Send,
    Sun,
    Moon
} from 'lucide-react';

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isDark, setIsDark] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email) {
            alert(`Obuna bo'ldingiz! ${email} manziliga xabarlar yuboriladi`);
            setEmail('');
        }
    };

    return (
        <footer className={`${isDark ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'} transition-all duration-300`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                                <Sun className="h-6 w-6" />
                            </div>
                            <span className="text-xl font-bold">WeatherApp</span>
                        </div>
                        <p className="text-white/80 leading-relaxed">
                            Dunyo bo'ylab shaharlarning aniq ob-havo ma'lumotlari.
                            Eng so'ngi texnologiyalar yordamida ishlab chiqilgan.
                        </p>
                        <div className="flex space-x-3">
                            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200">
                                <Facebook className="h-5 w-5" />
                            </button>
                            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200">
                                <Twitter className="h-5 w-5" />
                            </button>
                            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200">
                                <Instagram className="h-5 w-5" />
                            </button>
                            <button className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200">
                                <Youtube className="h-5 w-5" />
                            </button>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Tez Havolalar</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                                    <span>Asosiy</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                                    <span>Shaharlar</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                                    <span>Prognoz</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                                    <span>Xarita</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white/80 hover:text-white transition-colors duration-200 flex items-center space-x-2">
                                    <span>Yordam</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Mashhur Shaharlar</h3>
                        <div className="grid grid-cols-2 gap-2">
                            {['Toshkent', 'Samarqand', 'Buxoro', 'Xiva', 'Andijon', 'Fargʻona', 'Namangan', 'Qarshi'].map((city) => (
                                <a
                                    key={city}
                                    href="#"
                                    className="text-white/80 hover:text-white transition-colors duration-200 text-sm py-1"
                                >
                                    {city}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-semibold">Yangiliklar</h3>
                        <p className="text-white/80 text-sm">
                            Ob-havo yangiliklari va maxsus takliflar haqida xabardor bo'ling
                        </p>

                        <form onSubmit={handleSubscribe} className="space-y-3">
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/60" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email manzilingiz"
                                    className="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-white/20 hover:bg-white/30 rounded-md transition-all duration-200"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </form>

                        <div className="flex items-center space-x-3 pt-4">
                            <span className="text-sm text-white/80">Tema:</span>
                            <button
                                onClick={() => setIsDark(!isDark)}
                                className="flex items-center space-x-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all duration-200"
                            >
                                {isDark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                                <span className="text-sm">{isDark ? 'Tun' : 'Kun'}</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/20 mt-8 pt-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center space-x-3 justify-center md:justify-start">
                            <Phone className="h-5 w-5 text-white/80" />
                            <div>
                                <div className="text-sm text-white/60">Telefon</div>
                                <div className="font-medium">+998 71 123 45 67</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 justify-center">
                            <Mail className="h-5 w-5 text-white/80" />
                            <div>
                                <div className="text-sm text-white/60">Email</div>
                                <div className="font-medium">info@weatherapp.uz</div>
                            </div>
                        </div>
                        <div className="flex items-center space-x-3 justify-center md:justify-end">
                            <MapPin className="h-5 w-5 text-white/80" />
                            <div>
                                <div className="text-sm text-white/60">Manzil</div>
                                <div className="font-medium">Toshkent, O'zbekiston</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`${isDark ? 'bg-gray-800' : 'bg-black/20'} border-t border-white/10`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
                        <div className="flex items-center space-x-2 text-sm text-white/80">
                            <span>© 2024 WeatherApp. Barcha huquqlar himoyalangan.</span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm">
                            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                                Maxfiylik siyosati
                            </a>
                            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                                Foydalanish shartlari
                            </a>
                            <a href="#" className="text-white/80 hover:text-white transition-colors duration-200">
                                Cookie
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}