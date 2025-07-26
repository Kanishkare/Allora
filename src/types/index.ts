export interface Service {
  id: string;
  name: string;
  category: string;
  icon: string;
  description: string;
  basePrice: number;
  duration: string;
}

export interface ServiceProvider {
  id: string;
  name: string;
  service: string;
  rating: number;
  reviews: number;
  experience: string;
  pricePerHour: number;
  image: string;
  skills: string[];
  available: boolean;
  completedJobs: number;
}

export interface Booking {
  id: string;
  serviceId: string;
  providerId: string;
  date: string;
  time: string;
  address: string;
  phone: string;
  notes: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  totalAmount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  profileImage: string;
  joinedDate: string;
  totalBookings: number;
  membershipLevel: 'Bronze' | 'Silver' | 'Gold' | 'Platinum';
}