import { Mail, MessageCircle, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-indigo-400 mb-4">TherapyHub</h3>
            <p className="text-gray-400">Professional mental health support when you need it.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="text-gray-400 space-y-2">
              <li><Link to="/" className="hover:text-indigo-400 transition">Home</Link></li>
              <li><Link to="/blog" className="hover:text-indigo-400 transition">Blog</Link></li>
              <li><Link to="/services" className="hover:text-indigo-400 transition">Services</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="text-gray-400 space-y-2">
              <p className="flex items-center gap-2"><Mail size={18} /> hello@therapyhub.com</p>
              <p className="flex items-center gap-2"><MessageCircle size={18} /> (555) 123-4567</p>
              <p className="flex items-center gap-2"><MapPin size={18} /> San Francisco, CA</p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4 text-gray-400">
              <Facebook className="hover:text-indigo-400 cursor-pointer transition" />
              <Twitter className="hover:text-indigo-400 cursor-pointer transition" />
              <Instagram className="hover:text-indigo-400 cursor-pointer transition" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; 2024 TherapyHub. All rights reserved.</p>
          <p className="mt-2 text-sm">HIPAA Compliant | Licensed Therapists | Confidential</p>
        </div>
      </div>
    </footer>
  );
}
