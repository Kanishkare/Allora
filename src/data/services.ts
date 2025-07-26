import { Service, ServiceProvider } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Plumber',
    category: 'Home Repair',
    icon: '🔧',
    description: 'Pipe repairs, leak fixing, bathroom fittings',
    basePrice: 500,
    duration: '1-3 hours'
  },
  {
    id: '2',
    name: 'Electrician',
    category: 'Home Repair',
    icon: '⚡',
    description: 'Wiring, appliance repair, electrical installations',
    basePrice: 600,
    duration: '1-4 hours'
  },
  {
    id: '3',
    name: 'Carpenter',
    category: 'Home Repair',
    icon: '🔨',
    description: 'Furniture repair, woodwork, door/window fixing',
    basePrice: 700,
    duration: '2-6 hours'
  },
  {
    id: '4',
    name: 'AC Technician',
    category: 'Appliance Repair',
    icon: '❄️',
    description: 'AC installation, repair, maintenance, gas filling',
    basePrice: 800,
    duration: '1-3 hours'
  },
  {
    id: '5',
    name: 'Bike Mechanic',
    category: 'Vehicle Service',
    icon: '🏍️',
    description: 'Bike repair, servicing, part replacement',
    basePrice: 400,
    duration: '1-2 hours'
  },
  {
    id: '6',
    name: 'Car Mechanic',
    category: 'Vehicle Service',
    icon: '🚗',
    description: 'Car repair, servicing, diagnostic, maintenance',
    basePrice: 1000,
    duration: '2-8 hours'
  },
  {
    id: '7',
    name: 'House Cleaning',
    category: 'Household',
    icon: '🧹',
    description: 'Deep cleaning, regular cleaning, sanitization',
    basePrice: 300,
    duration: '2-4 hours'
  },
  {
    id: '8',
    name: 'Cook/Chef',
    category: 'Household',
    icon: '👨‍🍳',
    description: 'Home cooking, meal preparation, party catering',
    basePrice: 800,
    duration: '2-8 hours'
  },
  {
    id: '9',
    name: 'Security Guard',
    category: 'Security',
    icon: '🛡️',
    description: 'Residential security, event security, night watch',
    basePrice: 1200,
    duration: '8-12 hours'
  },
  {
    id: '10',
    name: 'Gardener',
    category: 'Outdoor',
    icon: '🌱',
    description: 'Lawn care, plant maintenance, landscaping',
    basePrice: 500,
    duration: '2-4 hours'
  },
  {
    id: '11',
    name: 'Painter',
    category: 'Home Repair',
    icon: '🎨',
    description: 'Wall painting, texture work, home decoration',
    basePrice: 600,
    duration: '4-8 hours'
  },
  {
    id: '12',
    name: 'Pest Control',
    category: 'Household',
    icon: '🐛',
    description: 'Insect control, rodent control, sanitization',
    basePrice: 900,
    duration: '2-3 hours'
  }
];

export const serviceProviders: ServiceProvider[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    service: 'Plumber',
    rating: 4.8,
    reviews: 156,
    experience: '8 years',
    pricePerHour: 500,
    image: 'https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=300',
    skills: ['Pipe Repair', 'Bathroom Fitting', 'Water Heater'],
    available: true,
    completedJobs: 342
  },
  {
    id: '2',
    name: 'Amit Sharma',
    service: 'Electrician',
    rating: 4.9,
    reviews: 203,
    experience: '12 years',
    pricePerHour: 600,
    image: 'https://images.pexels.com/photos/1300408/pexels-photo-1300408.jpeg?auto=compress&cs=tinysrgb&w=300',
    skills: ['Home Wiring', 'Appliance Repair', 'LED Installation'],
    available: true,
    completedJobs: 498
  },
  {
    id: '3',
    name: 'Suresh Patel',
    service: 'Carpenter',
    rating: 4.7,
    reviews: 89,
    experience: '15 years',
    pricePerHour: 700,
    image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=300',
    skills: ['Furniture Making', 'Door Repair', 'Custom Woodwork'],
    available: true,
    completedJobs: 267
  },
  {
    id: '4',
    name: 'Vikram Singh',
    service: 'AC Technician',
    rating: 4.6,
    reviews: 124,
    experience: '6 years',
    pricePerHour: 800,
    image: 'https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=300',
    skills: ['AC Installation', 'Gas Filling', 'Maintenance'],
    available: false,
    completedJobs: 189
  },
  {
    id: '5',
    name: 'Priya Devi',
    service: 'House Cleaning',
    rating: 4.9,
    reviews: 267,
    experience: '5 years',
    pricePerHour: 300,
    image: 'https://images.pexels.com/photos/1181724/pexels-photo-1181724.jpeg?auto=compress&cs=tinysrgb&w=300',
    skills: ['Deep Cleaning', 'Kitchen Cleaning', 'Sanitization'],
    available: true,
    completedJobs: 543
  },
  {
    id: '6',
    name: 'Chef Ramesh',
    service: 'Cook/Chef',
    rating: 4.8,
    reviews: 98,
    experience: '10 years',
    pricePerHour: 800,
    image: 'https://images.pexels.com/photos/1516983/pexels-photo-1516983.jpeg?auto=compress&cs=tinysrgb&w=300',
    skills: ['Indian Cuisine', 'Party Catering', 'Healthy Meals'],
    available: true,
    completedJobs: 234
  }
];