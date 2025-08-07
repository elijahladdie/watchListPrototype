import { useState } from 'react';
import { Home, Search, Bookmark, User } from 'lucide-react';
import { HomeScreen } from './components/HomeScreen';
import { WatchListScreen } from './components/WatchListScreen';
import { SearchScreen } from './components/SearchScreen';
import { ProfileScreen } from './components/ProfileScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderActiveScreen = () => {
    switch (activeTab) {
      case 'home':
        return <HomeScreen />;
      case 'search':
        return <SearchScreen />;
      case 'watchlist':
        return <WatchListScreen />;
      case 'profile':
        return <ProfileScreen />;
      default:
        return <HomeScreen />;
    }
  };

  return (
    <div className="h-screen bg-neutral-400 flex justify-center items-center overflow-hidden">
      <div
        className="relative bg-gradient-to-br from-watchlist-purple-50 to-watchlist-blue-50 rounded-t-xl shadow-lg "

      >
        {/* Scrollable Content */}
        <div className="h-full overflow-y-scroll scroll-thin"
          style={{
            width: '500px',
            height: '812px',
          }}>
          {renderActiveScreen()}
        </div>

        {/* Bottom Navigation */}
        <div className="sticky bottom-0 z-10 bg-white/80 backdrop-blur-lg border-t border-watchlist-purple-100">
          <div className="flex justify-around items-center py-2 px-4">
            {[
              { id: 'home', icon: Home, label: 'Home' },
              { id: 'search', icon: Search, label: 'Search' },
              { id: 'watchlist', icon: Bookmark, label: 'My List' },
              { id: 'profile', icon: User, label: 'Profile' },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-300 min-h-[44px] min-w-[44px] ${isActive
                    ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg scale-110'
                    : 'text-gray-500 hover:text-purple-600'
                    }`}
                >
                  <Icon size={24} />
                  <span className="text-xs mt-1">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="h-screen bg-neutral-400 flex justify-center items-center overflow-hidden">
//   <div
//     className="relative bg-gradient-to-br from-watchlist-purple-50 to-watchlist-blue-50 rounded-xl shadow-lg overflow-y-scroll scroll-thin"
//     style={{
//       width: '500px',
//       height: '812px',
//     }}
//   >
//     {/* Main Content */}
//     <div className="h-full mb-20">
//       {renderActiveScreen()}
//     </div>

//     {/* Bottom Navigation */}
//     <div className="sticky bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-watchlist-purple-100">
//       <div className="flex justify-around items-center py-2 px-4">
//         {[
//           { id: 'home', icon: Home, label: 'Home' },
//           { id: 'search', icon: Search, label: 'Search' },
//           { id: 'watchlist', icon: Bookmark, label: 'My List' },
//           { id: 'profile', icon: User, label: 'Profile' },
//         ].map((tab) => {
//           const Icon = tab.icon;
//           const isActive = activeTab === tab.id;
//           return (
//             <button
//               key={tab.id}
//               onClick={() => setActiveTab(tab.id)}
//               className={`flex flex-col items-center py-2 px-3 rounded-xl transition-all duration-300 min-h-[44px] min-w-[44px] ${isActive
//                 ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white shadow-lg scale-110'
//                 : 'text-gray-500 hover:text-purple-600'
//                 }`}

//             >                <Icon size={24} />
//               <span className="text-xs mt-1">{tab.label}</span>
//             </button>
//           );
//         })}
//       </div>
//     </div>
//   </div>
// </div>