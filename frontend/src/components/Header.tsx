import { Bell, Gift, User } from 'lucide-react';
import { Link } from '@tanstack/react-router';

const Header = () => {
  return (
    <header className="bg-[#1a1a1a]/90 backdrop-blur-lg sticky top-0 z-50 border-b border-white/10">
      <div className="container flex items-center justify-between px-6 py-4 mx-auto">
        <div className="flex items-center space-x-12">
          <Link href="/" className="flex items-center space-x-3">
            <Gift className="w-8 h-8" />
            <h1 className="text-2xl font-bold">Secret Santa</h1>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="relative btn-icon">
            <Bell className="w-6 h-6" />
            <span className="absolute top-0 right-0 flex items-center justify-center w-4 h-4 text-xs font-bold text-black bg-yellow-400 rounded-full">
              2
            </span>
          </button>
          <button className="btn-icon">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
