'use client';

import { useState, useEffect } from 'react';
import { Search, MapPin, Cloud, Sun, CloudRain, CloudSnow, Eye, Droplets, Wind } from 'lucide-react';
import axios from 'axios';

export default function WeatherApp() {
    const [query, setQuery] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchWeather = async (cityName) => {
        if (!cityName.trim()) return;

        setIsLoading(true);
        setError('');
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&appid=7ff55054f53ec5c371bb065ff9e9f223&lang=ru`
            );

            setWeatherData(response.data);
        } catch (error) {
            console.error('Ob-havo ma\'lumotlarini olishda xatolik:', error);
            if (error.response?.status === 404) {
                setError('Shahar topilmadi. Iltimos, boshqa shahar nomini kiriting.');
            } else {
                setError('Ob-havo ma\'lumotlarini olishda xatolik yuz berdi.');
            }
            setWeatherData(null);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather(query);
    };

    const handleQuickCity = (city) => {
        setQuery(city);
        fetchWeather(city);
    };

    const getWeatherIcon = (weatherMain) => {
        switch (weatherMain.toLowerCase()) {
            case 'clear':
                return <Sun className="h-8 w-8 text-yellow-400" />;
            case 'clouds':
                return <Cloud className="h-8 w-8 text-gray-400" />;
            case 'rain':
            case 'drizzle':
                return <CloudRain className="h-8 w-8 text-blue-400" />;
            case 'snow':
                return <CloudSnow className="h-8 w-8 text-blue-200" />;
            default:
                return <Cloud className="h-8 w-8 text-gray-400" />;
        }
    };

    const getCurrentDate = () => {
        return new Date().toLocaleDateString('uz-UZ', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className="min-h-screen  p-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Ob-havo Dasturi</h1>
                    <p className="text-white/80">Shahar nomini kiriting va ob-havoni ko'ring</p>
                </div>

                <div className="w-full max-w-2xl mx-auto mb-8">
                    <form onSubmit={handleSubmit} className="relative">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                            <input
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Shahar nomini kiriting (masalan: Buxoro)..."
                                className="w-full pl-12 pr-24 py-4 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                                disabled={isLoading}
                            />
                            <button
                                type="submit"
                                disabled={isLoading || !query.trim()}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/40 disabled:bg-white/20 disabled:cursor-not-allowed backdrop-blur-md text-white px-6 py-2 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2"
                            >
                                <MapPin className="h-4 w-4" />
                                <span>Qidirish</span>
                            </button>
                        </div>
                    </form>

                    <div className="flex flex-wrap gap-3 mt-4 justify-center">
                        {['Buxoro', 'Toshkent', 'Samarqand', 'Xiva', 'Andijon'].map((city) => (
                            <button
                                key={city}
                                onClick={() => handleQuickCity(city)}
                                disabled={isLoading}
                                className="px-4 py-2 bg-white/10 hover:bg-white/20 disabled:bg-white/5 backdrop-blur-md rounded-full text-white text-sm font-medium transition-all duration-200 border border-white/20 disabled:border-white/10"
                            >
                                {city}
                            </button>
                        ))}
                    </div>
                </div>

                {isLoading && (
                    <div className="text-center text-white text-lg">Ob-havo ma'lumotlari yuklanmoqda...</div>
                )}

                {error && (
                    <div className="text-center text-red-200 bg-red-500/20 backdrop-blur-md rounded-xl p-4 max-w-md mx-auto">
                        {error}
                    </div>
                )}

                {weatherData && (
                    <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/30">
                        <div className="text-center mb-8">
                            <h2 className="text-2xl font-bold text-white mb-2">
                                {weatherData.city.name}, {weatherData.city.country}
                            </h2>
                            <p className="text-white/80 mb-4">{getCurrentDate()}</p>

                            <div className="flex items-center justify-center space-x-4 mb-4">
                                {getWeatherIcon(weatherData.list[0].weather[0].main)}
                                <div>
                                    <div className="text-4xl font-bold text-white">
                                        {Math.round(weatherData.list[0].main.temp)}°C
                                    </div>
                                    <div className="text-white/80 capitalize">
                                        {weatherData.list[0].weather[0].description}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                <Droplets className="h-6 w-6 text-blue-200 mx-auto mb-2" />
                                <div className="text-white font-semibold">{weatherData.list[0].main.humidity}%</div>
                                <div className="text-white/70 text-sm">Namlik</div>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                <Wind className="h-6 w-6 text-gray-200 mx-auto mb-2" />
                                <div className="text-white font-semibold">{weatherData.list[0].wind.speed} m/s</div>
                                <div className="text-white/70 text-sm">Shamol</div>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                <Eye className="h-6 w-6 text-gray-300 mx-auto mb-2" />
                                <div className="text-white font-semibold">{weatherData.list[0].visibility / 1000} km</div>
                                <div className="text-white/70 text-sm">Ko'rinish</div>
                            </div>
                            <div className="bg-white/10 rounded-xl p-4 text-center">
                                <Cloud className="h-6 w-6 text-gray-300 mx-auto mb-2" />
                                <div className="text-white font-semibold">{weatherData.list[0].main.pressure} hPa</div>
                                <div className="text-white/70 text-sm">Bosim</div>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-bold text-white mb-4">Keyingi 5 kun</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 ">
                                {weatherData.list.filter((_, index) => index % 8 === 0).slice(0, 5).map((day, index) => (
                                    <div key={index} className="bg-white/10 rounded-xl p-3 text-center flex flex-col items-center">
                                        <div className="text-white font-medium mb-2">
                                            {new Date(day.dt * 1000).toLocaleDateString('uz-UZ', { weekday: 'short' })}
                                        </div>
                                        <div className="flex justify-center w-full mb-1">{getWeatherIcon(day.weather[0].main)}</div>
                                        <div className="text-white font-bold text-lg mt-2">
                                            {Math.round(day.main.temp)}°C
                                        </div>
                                        <div className="text-white/70 text-sm capitalize">
                                            {day.weather[0].description}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

 
            </div>
        </div>
    );
}