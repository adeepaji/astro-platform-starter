// Launch guide prices — approve and update before publishing.
// Only public booking/payment URLs belong here. Never add Stripe secret keys.
import { commercialServicesEnabled } from './businessLaunch';
export type ServiceId = 'personal' | 'group' | 'online';

function approvedUrl(value: string | undefined, provider: 'calendly' | 'stripe'): string {
  if (!commercialServicesEnabled || !value) return '';
  try {
    const url = new URL(value.trim());
    const host = url.hostname.toLowerCase();
    if (url.protocol !== 'https:') return '';
    if (provider === 'calendly' && (host === 'calendly.com' || host.endsWith('.calendly.com'))) return url.toString();
    if (provider === 'stripe' && (host === 'buy.stripe.com' || host === 'checkout.stripe.com')) return url.toString();
  } catch { /* Invalid URL: use request booking fallback. */ }
  return '';
}

export const services = [
  {
    id: 'personal' as const,
    title: 'Live Online Personal Training',
    price: 50,
    unit: '/ 60-min session',
    eyebrow: 'PERSONAL COACHING',
    description: 'One-to-one guidance tailored to your goals, fitness level and schedule.',
    details: ['Proposed 60-minute video session', 'Technique guidance and tailored progression', 'Worldwide online availability to be confirmed'],
    bookingUrl: approvedUrl(import.meta.env.PUBLIC_BF_CALENDLY_PERSONAL, 'calendly'),
    paymentUrl: approvedUrl(import.meta.env.PUBLIC_BF_STRIPE_PERSONAL, 'stripe'),
  },
  {
    id: 'group' as const,
    title: 'Live Online Group Fitness',
    price: 12,
    unit: '/ person per class',
    eyebrow: 'TRAIN TOGETHER',
    description: 'An energetic, supportive session built around strength and conditioning.',
    details: ['Proposed 45-minute live online class', 'Suitable for varied experience levels', 'International time zones and timetable to be confirmed'],
    bookingUrl: approvedUrl(import.meta.env.PUBLIC_BF_CALENDLY_GROUP, 'calendly'),
    paymentUrl: approvedUrl(import.meta.env.PUBLIC_BF_STRIPE_GROUP, 'stripe'),
  },
  {
    id: 'online' as const,
    title: 'Online Coaching & Plans',
    price: 89,
    unit: '/ month',
    eyebrow: 'COACHING ANYWHERE',
    description: 'Structured workouts, ongoing guidance and a flexible online training routine.',
    details: ['Individual training plan', 'Weekly check-in', 'Monthly subscription terms to be confirmed'],
    bookingUrl: approvedUrl(import.meta.env.PUBLIC_BF_CALENDLY_ONLINE, 'calendly'),
    paymentUrl: approvedUrl(import.meta.env.PUBLIC_BF_STRIPE_ONLINE, 'stripe'),
  },
];
