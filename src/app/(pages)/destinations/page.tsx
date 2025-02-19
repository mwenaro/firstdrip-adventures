import { TouristDestinationCard } from "@/components/custom/TouristDestinationCard";
import { kenyaTouristDestinations } from "@/data/touristDestinations";

export default function DestinationsPage() {
  return (
    <>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-8">
          Kenya Tourist Destinations
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kenyaTouristDestinations.map((destination, index) => (
            <TouristDestinationCard key={index} destination={destination} />
          ))}
        </div>
      </div>
     
    </>
  );
}
