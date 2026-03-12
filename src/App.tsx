import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { BlogListPage } from './pages/BlogListPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ChatPage } from './pages/ChatPage';
import { AppointmentPage } from './pages/AppointmentPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogListPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/appointments" element={<AppointmentPage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster position="top-right" />
      </div>
    </Router>
  );
}

export default App;
