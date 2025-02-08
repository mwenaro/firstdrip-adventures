// components/packages/TourPackage.tsx

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '../ui/badge';
import { CalendarDays, Check, X } from 'lucide-react';
import { Button } from '../ui/button';


interface TourPackageProps {
  title: string;
  days: number;
  nights: number;
  itinerary: { day: number; description: string }[];
  included: string[];
  excluded: string[];
}

export const TourPackage = ({ title, days, nights, itinerary, included, excluded }: TourPackageProps) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription>
          <Badge variant="secondary" className="mr-2">
            {days} Days
          </Badge>
          <Badge variant="secondary">
            {nights} Nights
          </Badge>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Itinerary</h3>
          {itinerary.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <CalendarDays className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium">Day {item.day}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold">Included</h3>
          <ul className="space-y-2">
            {included.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-green-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold">Excluded</h3>
          <ul className="space-y-2">
            {excluded.map((item, index) => (
              <li key={index} className="flex items-center space-x-2">
                <X className="h-4 w-4 text-red-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary/90">
          Book Now
        </Button>
      </CardFooter>
    </Card>
  );
};