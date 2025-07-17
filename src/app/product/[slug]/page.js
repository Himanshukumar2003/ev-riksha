import StepsSection from "../features-cards";
import VehicleSpecsTable from "../table";
import Gallery from "../gallery";
import BasicFAQ from "../faq-section";
import MainProductViewer from "../main-products";
import { products } from "@/data/vehicle-data";
import BikeExplorer from "../feachers";

export default function ProductPage({ params }) {
  const { slug } = params;
  const product = products.find((val) => val.slug === slug);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-semibold text-red-500">
            Product not found!
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <MainProductViewer product={product} />
      <VehicleSpecsTable product={product} />
      <BikeExplorer></BikeExplorer>
      <Gallery product={product} />
      <BasicFAQ product={product} />
    </>
  );
}
