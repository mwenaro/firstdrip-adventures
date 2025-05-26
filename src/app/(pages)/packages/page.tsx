import { TourPackageList } from "@/components/packages/TourPackageList";

export default function TourPackagesPage() {
  return <div className="min-h-screen bg-gray-50 mt-16 pt-6">
    <h2 className="text-3xl font-bold text-center my-6 md:text-4xl">Safari Packages</h2>
    <TourPackageList limit={5} showMoreBtn={true} />

  </div>
}