import React from 'react';
import { Star, Award, CheckCircle, IndianRupee } from 'lucide-react';
import { ServiceProvider } from '../types';

interface ProviderCardProps {
  provider: ServiceProvider;
  onBook: (provider: ServiceProvider) => void;
}

export const ProviderCard: React.FC<ProviderCardProps> = ({ provider, onBook }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-16 h-16 rounded-full object-cover border-2 border-gray-100"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <h3 className="text-lg font-semibold text-gray-900">{provider.name}</h3>
            {provider.available ? (
              <span className="flex items-center space-x-1 text-green-600 text-xs font-medium bg-green-50 px-2 py-1 rounded-full">
                <CheckCircle className="h-3 w-3" />
                <span>Available</span>
              </span>
            ) : (
              <span className="text-red-600 text-xs font-medium bg-red-50 px-2 py-1 rounded-full">
                Busy
              </span>
            )}
          </div>
          <p className="text-gray-600 text-sm mb-2">{provider.service}</p>
          <div className="flex items-center space-x-4 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="font-medium">{provider.rating}</span>
              <span>({provider.reviews} reviews)</span>
            </div>
            <div className="flex items-center space-x-1">
              <Award className="h-4 w-4 text-blue-500" />
              <span>{provider.experience}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Skills:</p>
        <div className="flex flex-wrap gap-2">
          {provider.skills.map((skill, index) => (
            <span
              key={index}
              className="bg-blue-50 text-blue-700 text-xs px-2 py-1 rounded-full font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <IndianRupee className="h-4 w-4 text-gray-600" />
          <span className="text-lg font-semibold text-gray-900">₹{provider.pricePerHour}</span>
          <span className="text-gray-500 text-sm">/hour</span>
        </div>
        <button
          onClick={() => onBook(provider)}
          disabled={!provider.available}
          className={`px-6 py-2 rounded-lg font-medium transition-all ${
            provider.available
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
        >
          {provider.available ? 'Book Now' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
};