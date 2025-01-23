import { Globe, Plane } from "lucide-react";
import { Button } from "../ui/button";
import { SparklesText } from "../ui/sparkles-text";

export const HeroSection: React.FC = () => {
    return (
      <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center">
        <div className="container mx-auto px-4 z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center items-center mb-6">
              <Globe className="w-16 h-16 text-blue-600 mr-4" />
              {/* <h1 className="text-6xl font-extrabold text-gray-900">FirstDrip Adventures</h1> */}
              <h1 className="text-6xl font-extrabold text-gray-900"><SparklesText  text="FirstDrip Adventures" /></h1>

            </div>
            <p className="text-xl text-gray-700 mb-10">
              Unlock East Africa&apos;s Hidden Treasures - From Spectacular Safaris to Pristine Coastal Paradises
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Plane className="mr-2" /> Explore Packages
              </Button>
              <Button size="lg" variant="outline">
                Plan Custom Trip
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };