import React from 'react';
import { Clock, IndianRupee, Star } from 'lucide-react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
  onClick: (service: Service) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onClick }) => {
  return (
    <div
      onClick={() => onClick(service)}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 cursor-pointer group"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg flex items-center justify-center text-2xl group-hover:from-blue-100 group-hover:to-blue-200 transition-all">
            {service.icon}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
              {service.name}
            </h3>
            <p className="text-sm text-gray-500">{service.category}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 bg-green-50 px-2 py-1 rounded-full">
          <Star className="h-3 w-3 text-green-600 fill-current" />
          <span className="text-xs font-medium text-green-700">4.8</span>
        </div>
      </div>

      <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <IndianRupee className="h-4 w-4" />
            <span className="font-medium">₹{service.basePrice}+</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{service.duration}</span>
          </div>
        </div>
        <button className="text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline transition-all">
          Book Now →
        </button>
      </div>
    </div>
  );
};