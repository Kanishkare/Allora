import React, { useState } from 'react';
import { ArrowLeft, Star, Users, Clock } from 'lucide-react';
import { Service, ServiceProvider } from '../types';
import { serviceProviders } from '../data/services';
import { ProviderCard } from './ProviderCard';
import { BookingModal } from './BookingModal';

interface ServiceDetailProps {
  service: Service;
  onBack: () => void;
}

export const ServiceDetail: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  const [selectedProvider, setSelectedProvider] = useState<ServiceProvider | null>(null);
  const [showBookingModal, setShowBookingModal] = useState(false);

  const providersForService = serviceProviders.filter(
    provider => provider.service === service.name
  );

  const handleBookProvider = (provider: ServiceProvider) => {
    setSelectedProvider(provider);
    setShowBookingModal(true);
  };

  const handleBookingConfirm = (bookingData: any) => {
    console.log('Booking confirmed:', bookingData);
    setShowBookingModal(false);
    setSelectedProvider(null);
    // Here you would typically send the booking data to your backend
    alert('Booking confirmed! You will receive a confirmation call shortly.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to Services</span>
          </button>

          <div className="flex items-start space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-3xl">
              {service.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{service.name}</h1>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span>4.8 Average Rating</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span>{providersForService.length} Professionals Available</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{service.duration}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Providers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Professionals</h2>
          <p className="text-gray-600">Choose from our verified and experienced service providers</p>
        </div>

        {providersForService.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {providersForService.map((provider) => (
              <ProviderCard
                key={provider.id}
                provider={provider}
                onBook={handleBookProvider}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No providers available</h3>
            <p className="text-gray-600">We're working to add more professionals for this service.</p>
          </div>
        )}
      </div>

      {/* Booking Modal */}
      {showBookingModal && selectedProvider && (
        <BookingModal
          provider={selectedProvider}
          onClose={() => {
            setShowBookingModal(false);
            setSelectedProvider(null);
          }}
          onBook={handleBookingConfirm}
        />
      )}
    </div>
  );
};