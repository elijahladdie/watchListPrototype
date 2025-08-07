import { useState } from 'react';
import { Star, Clock, TrendingUp } from 'lucide-react';
import { MovieCard } from './MovieCard';
import { ImageWithFallback } from './figma/ImageWithFallback';

const mockRecommendations = [
  {
    id: 1,
    title: "The Matrix Resurrections",
    genre: "Sci-Fi",
    rating: 8.5,
    year: 2021,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop",
    aiReason: "Based on your love for sci-fi thrillers"
  },
  {
    id: 2,
    title: "Stranger Things 4",
    genre: "Drama",
    rating: 9.2,
    year: 2022,
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop",
    aiReason: "You watched 3 seasons, time for the finale!"
  },
  {
    id: 3,
    title: "Dune",
    genre: "Adventure",
    rating: 8.8,
    year: 2021,
    image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=300&h=450&fit=crop",
    aiReason: "Epic stories match your viewing history"
  }
];

const trendingNow = [
  {
    id: 4,
    title: "Wednesday",
    genre: "Comedy",
    rating: 8.1,
    year: 2022,
    image: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=300&h=450&fit=crop"
  },
  {
    id: 5,
    title: "The Batman",
    genre: "Action",
    rating: 8.9,
    year: 2022,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop"
  },
  {
    id: 6,
    title: "Top Gun: Maverick",
    genre: "Action",
    rating: 9.1,
    year: 2022,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=450&fit=crop"
  }
];

export function HomeScreen() {
  const [watchTime] = useState("2h 45m today");

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between pt-8">
        <div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            WatchList
          </h1>
          <p className="text-gray-600">Discover your next favorite</p>
        </div>
        <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
          <div className="flex items-center gap-2 text-purple-600">
            <Clock size={16} />
            <span className="text-sm font-medium">{watchTime}</span>
          </div>
        </div>
      </div>

      {/* AI Recommendations */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <Star size={16} className="text-white" />
          </div>
          <h2 className="text-xl font-semibold">AI Recommendations</h2>
        </div>
        
        <div className="space-y-3">
          {mockRecommendations.map((movie) => (
            <div key={movie.id} className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 shadow-lg">
              <div className="flex gap-4">
                <div className="relative">
                  <ImageWithFallback
                    src={movie.image}
                    alt={movie.title}
                    className="w-20 h-28 rounded-2xl object-cover shadow-md"
                  />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Star size={12} className="text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{movie.title}</h3>
                  <p className="text-sm text-gray-600">{movie.genre} • {movie.year}</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={14} className="text-yellow-500 fill-current" />
                    <span className="text-sm font-medium">{movie.rating}</span>
                  </div>
                  <p className="text-xs text-purple-600 mt-2 italic">{movie.aiReason}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trending Now */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-pink-500 rounded-full flex items-center justify-center">
            <TrendingUp size={16} className="text-white" />
          </div>
          <h2 className="text-xl font-semibold">Trending Now</h2>
        </div>
        
        <div className="flex gap-4 overflow-x-auto pb-4">
          {trendingNow.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}