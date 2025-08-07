import { useState } from 'react';
import { Search, TrendingUp, Film, Tv } from 'lucide-react';
import { MovieCard } from './MovieCard';
import { Input } from './ui/input';

const mockSearchResults = [
  {
    id: 7,
    title: "Avatar: The Way of Water",
    genre: "Adventure",
    rating: 8.1,
    year: 2022,
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=450&fit=crop"
  },
  {
    id: 8,
    title: "House of the Dragon",
    genre: "Fantasy",
    rating: 8.5,
    year: 2022,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=450&fit=crop"
  },
  {
    id: 9,
    title: "Everything Everywhere All at Once",
    genre: "Comedy",
    rating: 8.1,
    year: 2022,
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=300&h=450&fit=crop"
  },
  {
    id: 10,
    title: "The Bear",
    genre: "Comedy",
    rating: 8.7,
    year: 2022,
    image: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=300&h=450&fit=crop"
  }
];

const popularGenres = [
  { name: "Action", color: "from-red-500 to-orange-500", icon: Film },
  { name: "Comedy", color: "from-yellow-500 to-pink-500", icon: Tv },
  { name: "Drama", color: "from-blue-500 to-purple-500", icon: Film },
  { name: "Sci-Fi", color: "from-green-500 to-teal-500", icon: Tv },
  { name: "Horror", color: "from-gray-700 to-red-600", icon: Film },
  { name: "Romance", color: "from-pink-500 to-rose-500", icon: Tv }
];

export function SearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  const filteredResults = searchQuery
    ? mockSearchResults.filter(movie =>
        movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        movie.genre.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : mockSearchResults;

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-2xl font-bold text-gray-800">Discover</h1>
        <p className="text-gray-600">Find your next binge-watch</p>
      </div>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
        <Input
          type="text"
          placeholder="Search movies & TV shows..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-12 pr-4 py-4 bg-white/80 backdrop-blur-sm border-0 rounded-2xl shadow-lg text-base"
        />
      </div>

      {/* Popular Genres */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <TrendingUp size={20} className="text-purple-600" />
          <h2 className="text-xl font-semibold">Popular Genres</h2>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {popularGenres.map((genre) => {
            const Icon = genre.icon;
            return (
              <button
                key={genre.name}
                onClick={() => setSelectedGenre(selectedGenre === genre.name ? null : genre.name)}
                className={`bg-gradient-to-br ${genre.color} rounded-2xl p-4 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 ${
                  selectedGenre === genre.name ? 'ring-4 ring-white ring-opacity-50' : ''
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={24} />
                  <span className="font-semibold">{genre.name}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Search Results */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">
            {searchQuery ? `Results for "${searchQuery}"` : 'Trending Now'}
          </h2>
          <span className="text-sm text-gray-500">{filteredResults.length} results</span>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          {filteredResults.map((movie) => (
            <MovieCard key={movie.id} movie={movie} compact />
          ))}
        </div>

        {filteredResults.length === 0 && searchQuery && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search size={32} className="text-gray-400" />
            </div>
            <p className="text-gray-500">No results found for "{searchQuery}"</p>
            <p className="text-sm text-gray-400 mt-2">Try a different search term</p>
          </div>
        )}
      </div>
    </div>
  );
}