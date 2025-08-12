import BasicFAQ from "../_components/faq-section";
import BikeExplorer from "../_components/Features";
import FinancerLogos from "../_components/financers";
import Gallery from "../_components/gallery";
import MainProductViewer from "../_components/MainProductViewer";
import VehicleSpecsTable from "../_components/table";
import VideoSection from "../_components/troubleshoot";
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const response = await fetch(
    `https://macapi.brandingwaale.com/v1/vehicles/get-by-slug/${slug}`
  );
  const data = await response.json();
  if (!data) return <h1>Not Found</h1>;
  const vehicles = data.data;
  console.log(data);
  return {
    title:
      vehicles?.meta_title && vehicles?.meta_title !== ""
        ? vehicles?.meta_title
        : vehicles?.title,
    description: vehicles?.meta_description,
    keywords: vehicles?.meta_keywords,
    alternates: {
      canonical: `/products/${vehicles?.slug}`,
    },
  };
}
export default async function Page({ params }) {
  const { slug } = await params;
  const response = await fetch(
    `https://macapi.brandingwaale.com/v1/vehicles/get-by-slug/${slug}`
  );
  const data = await response.json();

  if (!data) return <h1>Not Found</h1>;

  console.log(data);
  return (
    <div className="  overflow-hidden">
      <MainProductViewer product={data.data} />
      <BikeExplorer product={data.data}></BikeExplorer>
      <FinancerLogos></FinancerLogos>
      <VehicleSpecsTable product={data.data}></VehicleSpecsTable>
      <Gallery product={data.data}></Gallery>
      <VideoSection></VideoSection>
      <BasicFAQ product={data.data}></BasicFAQ>
    </div>
  );
}
