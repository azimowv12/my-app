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
        <footer className="w-full">
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