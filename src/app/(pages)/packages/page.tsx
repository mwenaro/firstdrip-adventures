import { Footer } from "@/components/home/Footer";
import { TourPackageList } from "@/components/packages/TourPackageList";

export default function TourPackagesPage() {
  return <div className="min-h-screen bg-gray-50">
    <h2 className="text-3xl font-bold text-center">Safari Packages</h2>
    <TourPackageList limit={2} showMoreBtn={true} />
    <Footer />
  </div>
}