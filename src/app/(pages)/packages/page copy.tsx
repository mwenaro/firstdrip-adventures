import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle, XCircle } from "lucide-react";

type Day = {
  title: string;
  description: string;
};

type TourPackageProps = {
  title: string;
  days: Day[];
  included: string[];
  excluded: string[];
};

const TourPackage: React.FC<TourPackageProps> = ({ title, days, included, excluded }) => {
  return (
    <Card className="max-w-2xl mx-auto shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="itinerary" className="w-full">
          <TabsList className="flex justify-center space-x-4 mb-4">
            <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
            <TabsTrigger value="included">Included</TabsTrigger>
            <TabsTrigger value="excluded">Excluded</TabsTrigger>
          </TabsList>
          
          <TabsContent value="itinerary">
            <Accordion type="single" collapsible>
              {days.map((day, index) => (
                <AccordionItem key={index} value={`day-${index}`}>
                  <AccordionTrigger>{day.title}</AccordionTrigger>
                  <AccordionContent>{day.description}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
          
          <TabsContent value="included">
            <ul className="space-y-2">
              {included.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="excluded">
            <ul className="space-y-2">
              {excluded.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <XCircle className="text-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

const tourData: TourPackageProps = {
  title: "2 DAYS 1 NIGHT MASAI MARA SAFARI PACKAGE",
  days: [
    {
      title: "Day 1: Nairobi / Masai Mara",
      description:
        "Pick up from Nairobi hotel or Airport in the morning. Drive to Masai Mara via The Great African Rift Valley escarpment and the famous Masai Town, Narok. Check in at Ashnil Mara camp or Sarova Mara game Camp or Mara Crossing Camp and have lunch. Afternoon game drive in search of the Lion, Cheetah, Elephant, Buffalo and other members of the Big five plus other animals. Dinner and overnight at the camp.",
    },
    {
      title: "Day 2: Masai Mara – Nairobi",
      description:
        "Early morning breakfast, checkout with packed lunch for more game drive. Spot wildebeest during migration season, zebra, impala, giraffe, lions, hyenas, cheetah, jackal, and more. After lunch, drive back to Nairobi, arriving in the evening.",
    },
  ],
  included: [
    "Arrival & Departure airport transfers",
    "Transportation as per itinerary",
    "Accommodation per itinerary",
    "Meals as per itinerary (B=Breakfast, L=Lunch, D=Dinner)",
    "English-speaking driver/guide",
    "National park entrance fees",
    "Excursions & activities as per itinerary",
    "Mineral Water while on safari",
  ],
  excluded: [
    "Visas and related costs",
    "Personal Taxes",
  ],
};

const TourPackages = () => {
  return (
    <div className="grid gap-6 p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center">Safari Packages</h1>
      <TourPackage {...tourData} />
    </div>
  );
};

export default TourPackages;
