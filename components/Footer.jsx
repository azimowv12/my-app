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
                <div className="border-t border-white/20  pt-8">
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
                                <div className="font-medium">Buxoro, O'zbekiston</div>
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