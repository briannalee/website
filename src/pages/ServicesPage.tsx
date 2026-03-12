import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export function ServicesPage() {
  const services = [
    {
      name: "Therapy Sessions",
      price: "$120",
      period: "per session",
      description: "One-on-one therapy with a licensed therapist",
      features: [
        "50-minute sessions",
        "Personalized treatment plans",
        "Multiple therapy modalities",
        "Flexible scheduling",
        "Secure video/phone options"
      ]
    },
    {
      name: "Chat Support",
      price: "$0.50",
      period: "per message",
      description: "Instant messaging with licensed therapists",
      features: [
        "Real-time text support",
        "Quick response times",
        "Affordable and flexible",
        "Perfect for daily support",
        "Confidential messaging"
      ]
    },
    {
      name: "Coaching Packages",
      price: "$200",
      period: "per package",
      description: "Goal-oriented coaching sessions",
      features: [
        "4 sessions per month",
        "Goal tracking tools",
        "Progress monitoring",
        "Accountability support",
        "Custom action plans"
      ]
    }
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="section-title text-center">Our Services & Pricing</h1>
        <p className="section-subtitle text-center">Choose the therapy option that works best for you</p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, i) => (
            <div key={i} className="card relative">
              {i === 1 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{service.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold text-indigo-600">{service.price}</span>
                <span className="text-gray-600"> {service.period}</span>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-gray-700">
                    <Check size={20} className="text-green-500" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link to="/appointments" className="btn-primary w-full text-center">
                Get Started
              </Link>
            </div>
          ))}
        </div>

        {/* Therapy Types */}
        <section className="mb-20">
          <h2 className="section-title text-center mb-12">Therapy Types We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Cognitive Behavioral Therapy (CBT)",
                description: "Evidence-based therapy for anxiety, depression, OCD, and many other conditions. Focuses on changing thought patterns and behaviors."
              },
              {
                name: "Mindfulness-Based Therapy",
                description: "Combines meditation and awareness techniques to reduce stress, anxiety, and promote emotional wellbeing."
              },
              {
                name: "Psychodynamic Therapy",
                description: "Explores unconscious patterns and past experiences to understand current behaviors and emotions."
              },
              {
                name: "Acceptance & Commitment Therapy",
                description: "Helps you accept difficult thoughts while committing to actions aligned with your values."
              },
              {
                name: "Interpersonal Therapy",
                description: "Focuses on improving relationships and communication skills to resolve current life challenges."
              },
              {
                name: "Couples Therapy",
                description: "Work with a therapist to improve communication, resolve conflicts, and strengthen your relationship."
              }
            ].map((therapy, i) => (
              <div key={i} className="card">
                <h3 className="text-xl font-bold mb-2">{therapy.name}</h3>
                <p className="text-gray-600">{therapy.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Insurance & Payment */}
        <section className="bg-blue-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Insurance & Payment Options</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold mb-2">We Accept</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Major health insurance plans</li>
                <li>• Out-of-network coverage</li>
                <li>• Flexible payment plans</li>
                <li>• HSA/FSA funds</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Payment Methods</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Credit/Debit cards</li>
                <li>• Online banking</li>
                <li>• Insurance billing</li>
                <li>• Employee benefits</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
