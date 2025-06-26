"use client";

import BasicFAQ from "./faq-section";
import StepsSection from "./feachers-cards";
import Gallery from "./gallery";
import MainProductViewer from "./main-products";
import VehicleSpecsTable from "./table";

export default function Product() {
  return (
    <>
      <MainProductViewer></MainProductViewer>

      <div className="section">
        <StepsSection />
      </div>
      <VehicleSpecsTable />
      <Gallery />

      <div className="section">
        <BasicFAQ />
      </div>
    </>
  );
}
