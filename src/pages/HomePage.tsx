import { Link } from 'react-router-dom';
import { Heart, MessageCircle, Calendar, Brain, Shield, Clock } from 'lucide-react';

export function HomePage() {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 flex items-center">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Your Mental Health Journey Starts Here
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Connect with licensed therapists, access professional mental health support, and take control of your wellbeing with our comprehensive telehealth platform.
              </p>
              <div className="flex gap-4">
                <Link to="/appointments" className="btn-primary">
                  Book Appointment
                </Link>
                <Link to="/chat" className="btn-outline">
                  Start Chat Now
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="aspect-video bg-gradient-to-br from-indigo-200 to-purple-200 rounded-xl flex items-center justify-center">
                  <Heart size={80} className="text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="section-title text-center">Why Choose TherapyHub?</h2>
          <p className="section-subtitle text-center">Professional mental health support with convenience and confidentiality</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield size={40} />,
                title: "100% Confidential",
                description: "HIPAA compliant platform with end-to-end encryption"
              },
              {
                icon: <Clock size={40} />,
                title: "Available 24/7",
                description: "Book appointments or access chat support anytime"
              },
              {
                icon: <Brain size={40} />,
                title: "Licensed Therapists",
                description: "All therapists are certified and highly experienced"
              },
              {
                icon: <Calendar size={40} />,
                title: "Easy Scheduling",
                description: "Book appointments in just 2 minutes"
              },
              {
                icon: <MessageCircle size={40} />,
                title: "Instant Chat",
                description: "Connect with therapists through instant messaging"
              },
              {
                icon: <Heart size={40} />,
                title: "Personalized Care",
                description: "Treatment tailored to your unique needs"
              }
            ].map((feature, i) => (
              <div key={i} className="card text-center">
                <div className="text-indigo-600 mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of people who have improved their mental health and wellbeing
          </p>
          <Link to="/appointments" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block">
            Schedule Your First Session
          </Link>
        </div>
      </section>
    </div>
  );
}
