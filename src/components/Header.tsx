import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-indigo-600">
          TherapyHub
        </Link>
        
        <div className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-indigo-600 transition">Home</Link>
          <Link to="/services" className="hover:text-indigo-600 transition">Services</Link>
          <Link to="/blog" className="hover:text-indigo-600 transition">Blog</Link>
          <Link to="/chat" className="hover:text-indigo-600 transition">Chat</Link>
          <Link to="/appointments" className="hover:text-indigo-600 transition">Book Now</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-white border-t flex flex-col gap-4 p-4">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/services" className="hover:text-indigo-600">Services</Link>
          <Link to="/blog" className="hover:text-indigo-600">Blog</Link>
          <Link to="/chat" className="hover:text-indigo-600">Chat</Link>
          <Link to="/appointments" className="hover:text-indigo-600">Book Now</Link>
        </div>
      )}
    </header>
  );
}
