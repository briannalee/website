import { useState } from 'react';
import { Send, MessageCircle, Lock, Clock } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'therapist';
  timestamp: Date;
}

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm here to support you. What's on your mind today?",
      sender: 'therapist',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [credits, setCredits] = useState(10);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages([...messages, newMessage]);
    setInput('');
    setCredits(credits - 1);

    // Simulate therapist response after a delay
    setTimeout(() => {
      const therapistResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: "Thank you for sharing that with me. Can you tell me more about what you're experiencing?",
        sender: 'therapist',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, therapistResponse]);
    }, 1000);
  };

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="section-title text-center mb-4">Live Chat Support</h1>
        <p className="section-subtitle text-center">
          Connect with a licensed therapist for real-time support (Only $0.50 per message)
        </p>

        <div className="bg-white rounded-xl shadow-xl overflow-hidden mb-8">
          {/* Header */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <div>
                <h3 className="font-semibold">Dr. Sarah Mitchell</h3>
                <p className="text-sm text-indigo-100">Online now</p>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">
              <Clock size={16} />
              {credits} credits
            </div>
          </div>

          {/* Chat Messages */}
          <div className="h-96 overflow-y-auto p-6 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs lg:max-w-md rounded-lg p-4 ${
                    message.sender === 'user'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-200 text-gray-900'
                  }`}
                >
                  <p>{message.text}</p>
                  <p
                    className={`text-xs mt-2 ${
                      message.sender === 'user' ? 'text-indigo-200' : 'text-gray-600'
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t p-4 bg-white">
            {credits > 0 ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition flex items-center gap-2"
                >
                  <Send size={18} />
                  Send
                </button>
              </div>
            ) : (
              <div className="text-center py-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-yellow-700 font-semibold">You're out of credits!</p>
                <p className="text-yellow-600 text-sm">Buy more credits to continue chatting</p>
              </div>
            )}
          </div>
        </div>

        {/* Pricing & Info */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="text-indigo-600" size={24} />
              <h3 className="text-xl font-bold">Affordable Support</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p className="text-3xl font-bold text-indigo-600">$0.50</p>
              <p className="text-sm">per message</p>
              <ul className="space-y-2">
                <li>✓ Quick responses from therapists</li>
                <li>✓ Perfect for daily support</li>
                <li>✓ Flexible and affordable</li>
                <li>✓ HIPAA compliant</li>
              </ul>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center gap-2 mb-4">
              <Lock className="text-green-600" size={24} />
              <h3 className="text-xl font-bold">Complete Privacy</h3>
            </div>
            <div className="space-y-3 text-gray-700">
              <p>Your conversations are completely confidential</p>
              <ul className="space-y-2">
                <li>✓ End-to-end encrypted</li>
                <li>✓ HIPAA compliant platform</li>
                <li>✓ Licensed therapists only</li>
                <li>✓ No chat history saved</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Buy Credits CTA */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Chatting?</h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {[
              { credits: 10, price: '$5' },
              { credits: 25, price: '$12' },
              { credits: 50, price: '$20' },
              { credits: 100, price: '$35' }
            ].map((pkg) => (
              <button
                key={pkg.credits}
                className="border-2 border-indigo-600 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-600 hover:text-white transition"
              >
                {pkg.credits} credits - {pkg.price}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
