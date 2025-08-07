import { useState } from 'react';
import { Filter, Grid, List, Check, Clock } from 'lucide-react';
import { MovieCard } from './MovieCard';

const mockWatchlistItems = [
  {
    id: 1,
    title: "Inception",
    genre: "Sci-Fi",
    rating: 8.8,
    year: 2010,
    image: "https://images.unsplash.com/photo-1489599577372-f264e4c32f1b?w=300&h=450&fit=crop",
    inWatchlist: true,
    isWatched: false,
    dateAdded: "2024-01-15"
  },
  {
    id: 2,
    title: "Breaking Bad",
    genre: "Drama",
    rating: 9.5,
    year: 2008,
    image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=450&fit=crop",
    inWatchlist: true,
    isWatched: true,
    dateAdded: "2024-01-10"
  },
  {
    id: 3,
    title: "Interstellar",
    genre: "Sci-Fi",
    rating: 8.6,
    year: 2014,
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=300&h=450&fit=crop",
    inWatchlist: true,
    isWatched: false,
    dateAdded: "2024-01-12"
  },
  {
    id: 4,
    title: "The Office",
    genre: "Comedy",
    rating: 9.0,
    year: 2005,
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=300&h=450&fit=crop",
    inWatchlist: true,
    isWatched: true,
    dateAdded: "2024-01-08"
  }
];

export function WatchListScreen() {
  const [filter, setFilter] = useState<'all' | 'unwatched' | 'watched'>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  const filteredItems = mockWatchlistItems.filter(item => {
    if (filter === 'unwatched') return !item.isWatched;
    if (filter === 'watched') return item.isWatched;
    return true;
  });

  const unwatchedCount = mockWatchlistItems.filter(item => !item.isWatched).length;
  const watchedCount = mockWatchlistItems.filter(item => item.isWatched).length;

  return (
    <div className="p-4 space-y-6">
      {/* Header */}
      <div className="pt-8">
        <h1 className="text-2xl font-bold text-gray-800">My WatchList</h1>
        <p className="text-gray-600">{mockWatchlistItems.length} titles in your collection</p>
      </div>

      {/* Stats */}
      <div className="flex gap-4">
        <div className="flex-1 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span className="font-semibold">{unwatchedCount}</span>
          </div>
          <p className="text-sm opacity-90">To Watch</p>
        </div>
        <div className="flex-1 bg-gradient-to-br from-green-500 to-teal-600 rounded-2xl p-4 text-white">
          <div className="flex items-center gap-2">
            <Check size={20} />
            <span className="font-semibold">{watchedCount}</span>
          </div>
          <p className="text-sm opacity-90">Completed</p>
        </div>
      </div>

      {/* Filter and View Controls */}
      <div className="flex items-center justify-between">
        <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-lg">
          {[
            { id: 'all', label: 'All', count: mockWatchlistItems.length },
            { id: 'unwatched', label: 'To Watch', count: unwatchedCount },
            { id: 'watched', label: 'Watched', count: watchedCount }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id as any)}
              className={`px-4 py-2 rounded-xl transition-all duration-300 ${
                filter === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-purple-600'
              }`}
            >
              <span className="text-sm font-medium">{tab.label}</span>
              <span className="ml-1 text-xs">({tab.count})</span>
            </button>
          ))}
        </div>

        <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl p-1 shadow-lg">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-xl transition-all duration-300 ${
              viewMode === 'grid'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                : 'text-gray-600'
            }`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded-xl transition-all duration-300 ${
              viewMode === 'list'
                ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-white'
                : 'text-gray-600'
            }`}
          >
            <List size={20} />
          </button>
        </div>
      </div>

      {/* Movies Grid/List */}
      <div className={`${viewMode === 'grid' ? 'grid grid-cols-2 gap-4' : 'space-y-4'}`}>
        {filteredItems.map((movie) => (
          <MovieCard key={movie.id} movie={movie} compact={viewMode === 'grid'} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Filter size={32} className="text-gray-400" />
          </div>
          <p className="text-gray-500">No items match your filter</p>
        </div>
      )}
    </div>
  );
}