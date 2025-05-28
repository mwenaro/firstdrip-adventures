// components/TourPackages.tsx
import { TourPackage } from "./TourPackage";

const tourPackages = [
  {
    title: "3 DAYS 2 NIGHTS MOMBASA CITY & DIANI BEACH ESCAPE",
    days: 3,
    nights: 2,
    startingPoint: "Mombasa",
    itinerary: [
      {
        day: 1,
        description:
          "Start in Mombasa: Explore Fort Jesus and Old Town. Cross Likoni Ferry to Diani Beach. Check into beach resort (e.g., Baobab Beach Resort). Sunset dhow cruise.",
      },
      {
        day: 2,
        description:
          "Full-day Diani adventure: Snorkeling at Kisite Marine Park (dolphin encounters!), Colobus Monkey Sanctuary visit. Optional kite surfing lesson.",
      },
      {
        day: 3,
        description:
          "Morning beach relaxation. Return to Mombasa for airport drop-off or extend to Shimba Hills.",
      },
    ],
    included: [
      "Mombasa hotel/airport pickup",
      "2 nights’ beachfront accommodation",
      "All ground transfers (including ferry)",
      "Kisite snorkeling trip",
      "Guided Mombasa city tour",
    ],
    excluded: ["Kite surfing fees", "Alcoholic drinks", "Tips"],
  },
  {
    title: "4 DAYS 3 NIGHTS NORTH COAST ADVENTURE (MOMBASA TO WATAMU)",
    days: 4,
    nights: 3,
    startingPoint: "Mombasa",
    itinerary: [
      {
        day: 1,
        description:
          "Mombasa pickup. Visit Haller Park (giraffe feeding) and Bamburi Beach. Drive north to Watamu. Check into eco-lodge (e.g., Hemingways Watamu).",
      },
      {
        day: 2,
        description:
          "Watamu Marine Park snorkeling + turtle conservation visit. Afternoon kayaking in Mida Creek mangroves.",
      },
      {
        day: 3,
        description:
          "Day trip to Arabuko-Sokoke Forest (birdwatching) and Gedi Ruins. Return to Watamu for seafood dinner.",
      },
      {
        day: 4,
        description:
          "Transfer back to Mombasa with stop at Nyali Beach for lunch. Airport drop-off.",
      },
    ],
    included: [
      "All Mombasa pickups/drop-offs",
      "3 nights’ Watamu accommodation",
      "Marine park fees & guided tours",
      "Mida Creek kayak rental",
    ],
    excluded: ["Deep-sea fishing", "Souvenirs", "Malindi excursions"],
  },
  {
    title: "2 DAYS 1 NIGHT MOMBASA HISTORIC & ISLAND GETAWAY",
    days: 2,
    nights: 1,
    startingPoint: "Mombasa",
    itinerary: [
      {
        day: 1,
        description:
          "Mombasa city tour: Fort Jesus, Old Town spice markets, and Hindu temples. Afternoon boat transfer to private island (e.g., Funzi Keys) for beach relaxation.",
      },
      {
        day: 2,
        description:
          "Morning dolphin-spotting cruise in Funzi Bay. Return to Mombasa for airport departure.",
      },
    ],
    included: [
      "Private island stay",
      "All boat transfers",
      "Guided Mombasa tour",
      "Meals at Funzi Keys",
    ],
    excluded: ["Scuba diving", "Spa treatments"],
  },
  {
    title: "2 DAYS 1 NIGHT MASAI MARA SAFARI PACKAGE",
    days: 2,
    nights: 1,
    itinerary: [
      {
        day: 1,
        description:
          "Pick up from Nairobi hotel or Airport in the morning. Drive to Masai Mara a 5-hour drive to the main gate...",
      },
      {
        day: 2,
        description:
          "Early morning breakfast, after breakfast checkout with packed lunch for more game drive...",
      },
    ],
    included: [
      "Arrival & Departure airport transfers",
      "Transportation as per itinerary",
      "Accommodation per itinerary",
      "Meals as per itinerary",
    ],
    excluded: [
      "Visas and related costs",
      "Personal Taxes",
      "Drinks, tips, laundry",
    ],
  },
  {
    title: "2 DAYS 1 NIGHT AMBOSELI SAFARI PACKAGE",
    days: 2,
    nights: 1,
    itinerary: [
      {
        day: 1,
        description:
          "Pick up from Nairobi hotel or Airport in the early morning. Depart Nairobi for Amboseli National Park...",
      },
      {
        day: 2,
        description:
          "Early morning game drive later you break for breakfast, after breakfast checkout with packed lunch...",
      },
    ],
    included: [
      "Arrival & Departure airport transfers",
      "Transportation as per itinerary",
      "Accommodation per itinerary",
      "Meals as per itinerary",
    ],
    excluded: [
      "Visas and related costs",
      "Personal Taxes",
      "Drinks, tips, laundry",
    ],
  },
  // Add more packages as needed
];

export const TourPackages = () => {
  return (
    <div className="container mx-auto px-4 py-4">
      <h1 className="text-3xl font-bold mb-6 text-center md:text-4xl">
        Tour Packages
      </h1>
      <div className="space-y-6">
        {tourPackages.map((pkg, index) => (
          <TourPackage key={index} {...pkg} />
        ))}
      </div>
    </div>
  );
};
