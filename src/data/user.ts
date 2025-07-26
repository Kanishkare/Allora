import { User, Booking } from '../types';

export const currentUser: User = {
  id: '1',
  name: 'Rahul Sharma',
  email: 'rahul.sharma@email.com',
  phone: '+91 98765 43210',
  address: '123, Green Park, New Delhi - 110016',
  profileImage: 'https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=300',
  joinedDate: '2023-06-15',
  totalBookings: 12,
  membershipLevel: 'Gold'
};

export const userBookings: Booking[] = [
  {
    id: '1',
    serviceId: '1',
    providerId: '1',
    date: '2024-01-15',
    time: '10:00',
    address: '123, Green Park, New Delhi - 110016',
    phone: '+91 98765 43210',
    notes: 'Kitchen sink repair needed',
    status: 'completed',
    totalAmount: 1500
  },
  {
    id: '2',
    serviceId: '2',
    providerId: '2',
    date: '2024-01-20',
    time: '14:00',
    address: '123, Green Park, New Delhi - 110016',
    phone: '+91 98765 43210',
    notes: 'Electrical wiring check',
    status: 'confirmed',
    totalAmount: 2400
  },
  {
    id: '3',
    serviceId: '7',
    providerId: '5',
    date: '2024-01-10',
    time: '09:00',
    address: '123, Green Park, New Delhi - 110016',
    phone: '+91 98765 43210',
    notes: 'Deep cleaning required',
    status: 'completed',
    totalAmount: 1200
  }
];