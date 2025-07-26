import React, { useState } from 'react';
import { X, Calendar, Clock, MapPin, Phone, FileText, IndianRupee } from 'lucide-react';
import { ServiceProvider } from '../types';
import { format, addDays } from 'date-fns';

interface BookingModalProps {
  provider: ServiceProvider;
  onClose: () => void;
  onBook: (bookingData: any) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ provider, onClose, onBook }) => {
  const [bookingData, setBookingData] = useState({
    date: format(new Date(), 'yyyy-MM-dd'),
    time: '09:00',
    address: '',
    phone: '',
    notes: '',
    hours: 2
  });

  const nextDays = Array.from({ length: 7 }, (_, i) => addDays(new Date(), i));
  const timeSlots = [
    '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const totalAmount = bookingData.hours * provider.pricePerHour;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onBook({
      ...bookingData,
      providerId: provider.id,
      totalAmount
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900">Book Service</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        <div className="p-6">
          {/* Provider Info */}
          <div className="flex items-center space-x-3 mb-6 p-4 bg-gray-50 rounded-lg">
            <img
              src={provider.image}
              alt={provider.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{provider.name}</h3>
              <p className="text-sm text-gray-600">{provider.service}</p>
              <p className="text-sm font-medium text-blue-600">₹{provider.pricePerHour}/hour</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Date Selection */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                <Calendar className="h-4 w-4" />
                <span>Select Date</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                {nextDays.map((day, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setBookingData({ ...bookingData, date: format(day, 'yyyy-MM-dd') })}
                    className={`p-3 text-sm rounded-lg border transition-all ${
                      bookingData.date === format(day, 'yyyy-MM-dd')
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="font-medium">{format(day, 'MMM dd')}</div>
                    <div className="text-xs text-gray-500">{format(day, 'EEE')}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Time Selection */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-3">
                <Clock className="h-4 w-4" />
                <span>Select Time</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    type="button"
                    onClick={() => setBookingData({ ...bookingData, time })}
                    className={`p-2 text-sm rounded-lg border transition-all ${
                      bookingData.time === time
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Duration (hours)
              </label>
              <select
                value={bookingData.hours}
                onChange={(e) => setBookingData({ ...bookingData, hours: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8].map((hour) => (
                  <option key={hour} value={hour}>
                    {hour} hour{hour > 1 ? 's' : ''}
                  </option>
                ))}
              </select>
            </div>

            {/* Address */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <MapPin className="h-4 w-4" />
                <span>Service Address</span>
              </label>
              <textarea
                value={bookingData.address}
                onChange={(e) => setBookingData({ ...bookingData, address: e.target.value })}
                placeholder="Enter your complete address..."
                required
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <Phone className="h-4 w-4" />
                <span>Phone Number</span>
              </label>
              <input
                type="tel"
                value={bookingData.phone}
                onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                placeholder="Enter your phone number"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="flex items-center space-x-2 text-sm font-medium text-gray-700 mb-2">
                <FileText className="h-4 w-4" />
                <span>Additional Notes (Optional)</span>
              </label>
              <textarea
                value={bookingData.notes}
                onChange={(e) => setBookingData({ ...bookingData, notes: e.target.value })}
                placeholder="Any specific requirements or notes..."
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Total Amount */}
            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <span className="font-medium text-gray-700">Total Amount:</span>
                <div className="flex items-center space-x-1">
                  <IndianRupee className="h-5 w-5 text-blue-600" />
                  <span className="text-xl font-bold text-blue-600">₹{totalAmount}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">
                {bookingData.hours} hours × ₹{provider.pricePerHour}/hour
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};