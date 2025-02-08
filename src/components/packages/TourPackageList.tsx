'use client'
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CheckCircle, XCircle } from "lucide-react";
import { TourPackage as ITourPackage, tourPackages } from "@/data/tourPackages";
import { Button } from "@/components/ui/button";



// interface TourPackageProps extends ITourPackage { }

const TourPackage: React.FC<ITourPackage> = ({ title, included, excluded, itinerary }) => {
  return (
    <Card className="w-full  max-w-7xl mx-auto shadow-lg rounded-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="itinerary" className="w-full">
          <TabsList className="w-full flex space-x-4 mb-4 justify-start ">
            <TabsTrigger value="itinerary" className="text-md font-semibold">Itinerary</TabsTrigger>
            <TabsTrigger value="included" className="text-md font-semibold">Included</TabsTrigger>
            <TabsTrigger value="excluded" className="text-md font-semibold">Excluded</TabsTrigger>
          </TabsList>

          <TabsContent value="itinerary">
            <Accordion type="single" collapsible defaultValue="day-0">
              {itinerary.map((day, index) => (
                <AccordionItem key={index} value={`day-${index}`}>
                  <AccordionTrigger className="text-lg font-bold">{day.title}</AccordionTrigger>
                  <AccordionContent className="px-4 py-2 text-justify bg-slate-100 rounded-md text-base lg:columns-2 gap-8"><p>{day.description}</p></AccordionContent>
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

interface TourPackagesProps {
  limit?: number
  showMoreBtn?: boolean
}

export const TourPackageList: React.FC<TourPackagesProps> = ({
  limit = 3, showMoreBtn = false
}) => {

  const [tours, setTours] = useState(tourPackages.slice(0, limit === 0 ? tourPackages.length : limit))
  return (

    <div className="w-full grid gap-4  p-2 bg-gray-100 min-h-fit">


      {tours.map((tour, index) => (
        <TourPackage key={index} {...tour} />
      ))}

      {/* Show more Btn */}
      <div className="flex items-center justify-center py-2"> 
      {
        ((showMoreBtn && limit !== 0) && tours.length !== tourPackages.length) ? <Button className="mx-auto" onClick={()=>setTours(tourPackages)}>  Show More</Button> : null
      }
      </div>
    
    </div>

  );
};


