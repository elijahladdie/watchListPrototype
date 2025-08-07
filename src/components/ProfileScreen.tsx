import { useState } from 'react';
import { User, Settings, Heart, Clock, Star, Award, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const userStats = [
  { label: 'Movies Watched', value: 47, icon: Star, color: 'from-yellow-500 to-orange-500' },
  { label: 'TV Shows', value: 12, icon: Award, color: 'from-blue-500 to-purple-500' },
  { label: 'Hours Watched', value: 284, icon: Clock, color: 'from-green-500 to-teal-500' },
  { label: 'Favorites', value: 23, icon: Heart, color: 'from-pink-500 to-rose-500' }
];

const favoriteGenres = [
  { name: 'Sci-Fi', percentage: 35 },
  { name: 'Drama', percentage: 28 },
  { name: 'Action', percentage: 22 },
  { name: 'Comedy', percentage: 15 }
];

const menuItems = [
  { id: 'notifications', label: 'Notifications', icon: 'bell' },
  { id: 'privacy', label: 'Privacy Settings', icon: 'shield' },
  { id: 'export', label: 'Export Data', icon: 'download' },
  { id: 'help', label: 'Help & Support', icon: 'help-circle' },
  { id: 'about', label: 'About WatchList', icon: 'info' }
];

export function ProfileScreen() {
  const [userName] = useState('Alex Chen');
  const [userEmail] = useState('alex.chen@email.com');
  const [memberSince] = useState('January 2024');

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-8 text-center">
        <div className="relative inline-block">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <User size={40} className="text-white" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-800">{userName}</h1>
        <p className="text-gray-600">{userEmail}</p>
        <p className="text-sm text-gray-500">Member since {memberSince}</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        {userStats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className={`bg-gradient-to-br ${stat.color} rounded-2xl p-4 text-white shadow-lg`}>
              <div className="flex items-center justify-between mb-2">
                <Icon size={24} />
                <span className="text-2xl font-bold">{stat.value}</span>
              </div>
              <p className="text-sm opacity-90">{stat.label}</p>
            </div>
          );
        })}
      </div>

      {/* Favorite Genres */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Heart size={20} className="text-purple-600" />
          Favorite Genres
        </h2>
        <div className="space-y-3">
          {favoriteGenres.map((genre) => (
            <div key={genre.name} className="flex items-center justify-between">
              <span className="font-medium">{genre.name}</span>
              <div className="flex items-center gap-3 flex-1 ml-4">
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${genre.percentage}%` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600 w-10">{genre.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Menu */}
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <Settings size={20} className="text-purple-600" />
            Settings
          </h2>
        </div>
        <div className="divide-y divide-gray-100">
          {menuItems.map((item) => (
            <button
              key={item.id}
              className="w-full flex items-center justify-between p-4 hover:bg-purple-50 transition-colors duration-200"
            >
              <span className="font-medium text-gray-700">{item.label}</span>
              <ChevronRight size={20} className="text-gray-400" />
            </button>
          ))}
        </div>
      </div>

      {/* Achievement Badge */}
      <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl p-6 text-white shadow-lg">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Award size={32} />
          </div>
          <div>
            <h3 className="text-lg font-bold">Binge Master</h3>
            <p className="text-sm opacity-90">Watched 10+ hours this week</p>
          </div>
        </div>
      </div>
    </div>
  );
}