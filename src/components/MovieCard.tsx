import { useState } from 'react';
import { Star, Plus, Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Movie {
  id: number;
  title: string;
  genre: string;
  rating: number;
  year: number;
  image: string;
  isWatched?: boolean;
  inWatchlist?: boolean;
}

interface MovieCardProps {
  movie: Movie;
  compact?: boolean;
}

export function MovieCard({ movie, compact = false }: MovieCardProps) {
  const [isInWatchlist, setIsInWatchlist] = useState(movie.inWatchlist || false);
  const [isWatched, setIsWatched] = useState(movie.isWatched || false);

  const toggleWatchlist = () => {
    setIsInWatchlist(!isInWatchlist);
  };

  const toggleWatched = () => {
    setIsWatched(!isWatched);
  };

  return (
    <div className={`${compact ? 'min-w-[140px]' : 'w-full'} bg-white/80 backdrop-blur-sm rounded-3xl p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}>
      <div className="relative">
        <ImageWithFallback
          src={movie.image}
          alt={movie.title}
          className={`${compact ? 'w-full h-32' : 'w-full h-40'} rounded-2xl object-cover`}
        />
        
        {/* Action buttons */}
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          <button
            onClick={toggleWatchlist}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
              isInWatchlist
                ? 'bg-green-500 text-white shadow-lg'
                : 'bg-white/80 text-gray-600 hover:bg-purple-500 hover:text-white'
            }`}
          >
            {isInWatchlist ? <Check size={16} /> : <Plus size={16} />}
          </button>
          
          {isInWatchlist && (
            <button
              onClick={toggleWatched}
              className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                isWatched
                  ? 'bg-blue-500 text-white shadow-lg'
                  : 'bg-white/80 text-gray-600 hover:bg-blue-500 hover:text-white'
              }`}
            >
              <Check size={16} />
            </button>
          )}
        </div>

        {/* Rating badge */}
        <div className="absolute bottom-2 left-2 bg-black/70 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
          <Star size={12} className="text-yellow-400 fill-current" />
          <span className="text-white text-xs font-medium">{movie.rating}</span>
        </div>
      </div>
      
      <div className="mt-3 space-y-1">
        <h3 className={`font-semibold text-gray-800 ${compact ? 'text-sm' : 'text-base'} line-clamp-2`}>
          {movie.title}
        </h3>
        <p className={`text-gray-600 ${compact ? 'text-xs' : 'text-sm'}`}>
          {movie.genre} • {movie.year}
        </p>
      </div>
    </div>
  );
}