import BasicFAQ from "../_components/faq-section";
import BikeExplorer from "../_components/Features";
import FinancerLogos from "../_components/financers";
import Gallery from "../_components/gallery";
import MainProductViewer from "../_components/MainProductViewer";
import VehicleSpecsTable from "../_components/table";

export default async function Page({ params }) {
  const { slug } = await params;
  const response = await fetch(
    `https://hjv2pvkv-3001.inc1.devtunnels.ms/v1/vehicles/get-by-slug/${slug}`
  );
  const data = await response.json();

  if (!data) return <h1>Not Found</h1>;

  console.log(data);
  return (
    <div>
      <MainProductViewer product={data.data} />

      <BikeExplorer product={data.data}></BikeExplorer>
      <FinancerLogos></FinancerLogos>

      <VehicleSpecsTable product={data.data}></VehicleSpecsTable>
      <Gallery product={data.data}></Gallery>
      <BasicFAQ product={data.data}></BasicFAQ>
    </div>
  );
}
