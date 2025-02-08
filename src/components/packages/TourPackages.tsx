// components/TourPackages.tsx
import { TourPackage } from './TourPackage';

const tourPackages = [
  {
    title: '2 DAYS 1 NIGHT MASAI MARA SAFARI PACKAGE',
    days: 2,
    nights: 1,
    itinerary: [
      {
        day: 1,
        description:
          'Pick up from Nairobi hotel or Airport in the morning. Drive to Masai Mara a 5-hour drive to the main gate...',
      },
      {
        day: 2,
        description:
          'Early morning breakfast, after breakfast checkout with packed lunch for more game drive...',
      },
    ],
    included: [
      'Arrival & Departure airport transfers',
      'Transportation as per itinerary',
      'Accommodation per itinerary',
      'Meals as per itinerary',
    ],
    excluded: ['Visas and related costs', 'Personal Taxes', 'Drinks, tips, laundry'],
  },
  {
    title: '2 DAYS 1 NIGHT AMBOSELI SAFARI PACKAGE',
    days: 2,
    nights: 1,
    itinerary: [
      {
        day: 1,
        description:
          'Pick up from Nairobi hotel or Airport in the early morning. Depart Nairobi for Amboseli National Park...',
      },
      {
        day: 2,
        description:
          'Early morning game drive later you break for breakfast, after breakfast checkout with packed lunch...',
      },
    ],
    included: [
      'Arrival & Departure airport transfers',
      'Transportation as per itinerary',
      'Accommodation per itinerary',
      'Meals as per itinerary',
    ],
    excluded: ['Visas and related costs', 'Personal Taxes', 'Drinks, tips, laundry'],
  },
  // Add more packages as needed
];

export const TourPackages = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tour Packages</h1>
      <div className="space-y-6">
        {tourPackages.map((pkg, index) => (
          <TourPackage key={index} {...pkg} />
        ))}
      </div>
    </div>
  );
};