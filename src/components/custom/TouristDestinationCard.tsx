import { TouristDestination } from "@/data/touristDestinations";
import { PlayCircle, ImageIcon, MapPin } from "lucide-react";
import { MagicCard } from "../ui/magic-card";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import Image from "next/image";

interface TouristDestinationCardProps {
  destination: TouristDestination;
}

export const TouristDestinationCard: React.FC<TouristDestinationCardProps> = ({
  destination,
}) => {
  return (
    <MagicCard>
      <Card className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            {destination.name}
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            {destination.location}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700 mb-4">{destination.description}</p>
          <p className="text-sm font-semibold text-blue-600 mb-4">
            {destination.highlight}
          </p>
          <div className="grid grid-cols-2 gap-4">
            {destination.images.map((image, index) => (
              <div key={index} className="relative aspect-w-16 aspect-h-9">
                <Image
                  width={100}
                  height={100}
                  src={image}
                  alt={`${destination.name} Image ${index + 1}`}
                  className="rounded-lg object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
              </div>
            ))}
          </div>
          {destination.videos.length > 0 && (
            <div className="mt-4">
              <Button variant="outline" className="w-full">
                <PlayCircle className="w-4 h-4 mr-2" />
                Watch Video
              </Button>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="default">Learn More</Button>
        </CardFooter>
      </Card>
    </MagicCard>
  );
};
