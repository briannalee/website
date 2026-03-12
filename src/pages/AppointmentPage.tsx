/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Clock, Mail } from 'lucide-react';
import toast from 'react-hot-toast';

interface AppointmentForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  therapyType: string;
  message: string;
}

export function AppointmentPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<AppointmentForm>();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: AppointmentForm) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      toast.success('Appointment request submitted! We\'ll confirm shortly.');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const therapyTypes = [
    'Cognitive Behavioral Therapy (CBT)',
    'Mindfulness-Based Therapy',
    'Psychodynamic Therapy',
    'Acceptance & Commitment Therapy',
    'Couples Therapy',
    'First Consultation'
  ];

  const timeSlots = [
    '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="section-title text-center">Book Your Appointment</h1>
        <p className="section-subtitle text-center">
          Quick and easy appointment scheduling. Get started in just 2 minutes.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: <Calendar />, title: 'Choose Date', desc: 'Pick your preferred date' },
            { icon: <Clock />, title: 'Select Time', desc: 'Pick a convenient time slot' },
            { icon: <Mail />, title: 'Confirm', desc: 'Get confirmation in your email' }
          ].map((step, i) => (
            <div key={i} className="card text-center">
              <div className="text-indigo-600 mb-3 flex justify-center">{step.icon}</div>
              <h3 className="font-bold mb-1">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="card space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  Full Name
                </label>
                <input
                  type="text"
                  {...register('name', { required: 'Name is required' })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Your full name"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  Email Address
                </label>
                <input
                  type="email"
                  {...register('email', { required: 'Email is required' })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register('phone', { required: 'Phone is required' })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="(555) 123-4567"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Therapy Type */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  Therapy Type
                </label>
                <select
                  {...register('therapyType', { required: 'Please select a therapy type' })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                >
                  <option value="">Select therapy type...</option>
                  {therapyTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.therapyType && (
                  <p className="text-red-500 text-sm mt-1">{errors.therapyType.message}</p>
                )}
              </div>

              {/* Date */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    min={today}
                    {...register('date', { required: 'Date is required' })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  />
                  {errors.date && (
                    <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                  )}
                </div>

                {/* Time */}
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-900">
                    Preferred Time
                  </label>
                  <select
                    {...register('time', { required: 'Time is required' })}
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  >
                    <option value="">Select time...</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>{slot}</option>
                    ))}
                  </select>
                  {errors.time && (
                    <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-900">
                  Additional Information (Optional)
                </label>
                <textarea
                  {...register('message')}
                  rows={4}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                  placeholder="Brief description of what brought you here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full disabled:opacity-50"
              >
                {isSubmitting ? 'Booking...' : 'Book Appointment'}
              </button>
            </form>
          </div>

          {/* Side Info */}
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Appointment Info</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-1">Duration</p>
                  <p className="text-sm">50 minutes</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Format</p>
                  <p className="text-sm">Video or Phone</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Cost</p>
                  <p className="text-sm">$120 per session</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Confirmation</p>
                  <p className="text-sm">Sent to your email</p>
                </div>
              </div>
            </div>

            <div className="card bg-blue-50">
              <h3 className="text-lg font-bold mb-4 text-gray-900">What to Expect</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>✓ You'll receive a confirmation email</li>
                <li>✓ Join link sent 15 minutes before</li>
                <li>✓ Initial intake assessment</li>
                <li>✓ Treatment plan discussion</li>
                <li>✓ Invoiced after session</li>
              </ul>
            </div>

            <div className="card bg-green-50">
              <h3 className="text-lg font-bold mb-4 text-gray-900">Cancellation Policy</h3>
              <p className="text-sm text-gray-700">
                Free cancellation up to 24 hours before appointment. Late cancellations may incur a fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
