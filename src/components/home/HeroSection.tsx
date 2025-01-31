import { Globe, Plane } from "lucide-react";
import { Button } from "../ui/button";
import { SparklesText } from "../ui/sparkles-text";
import { MyShimmerButton } from "../custom/MyShimmerButton";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 min-h-screen flex items-center overflow-hidden">
      {/* Background Layer */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage: "url('/featured-tours/zanzibar-archipelago.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-100 opacity-90"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo & Title */}
          <div className="flex justify-center items-center mb-6">
            <Globe className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 text-blue-600 mr-3 sm:mr-4 animate-bounce" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 animate-text">
              <SparklesText text="FirstDrip Adventures" />
            </h1>
          </div>
          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-800 font-light mb-8 sm:mb-10">
            Explore East Africa&apos;s Spectacular Safaris and Pristine Coastal
            Paradises
          </p>

          {/* Buttons */}
          <div className="flex justify-center flex-wrap gap-4">
            <MyShimmerButton
              background="blue"
              shimmerSize="0.5rem"
              shimmerColr="gold"
              className="bg-blue-600 hover:bg-blue-700 shadow-lg transform hover:scale-105 transition-transform rounded-sm"
            >
              <Plane className="mr-2" /> Explore Packages
            </MyShimmerButton>

            <Link href={"/booking"}>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-300 hover:border-gray-400 shadow-md transform hover:scale-105 transition-transform"
              >
                {/* Plan Custom Trip */}
                Book Now
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Subtle Floating Icons */}
      <div className="absolute -top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-blue-300 rounded-full opacity-30 animate-pulse-slow"></div>
    </div>
  );
};
