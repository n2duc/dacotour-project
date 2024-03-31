import BreadCrumb from "@/components/BreadCrumb";
import FormService from "@/components/FormService";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export async function generateMetadata({ params: { serviceId }}) {
  const title = serviceId.split("-").map((name) => capitalize(name)).join(" ");
  return {
    title,
  };
}

export default function ServicesPage({ params: { serviceId }}) {
  const nameService = serviceId.split("-").map((name) => capitalize(name)).join(" ");

  return (
    <div className="max-container">
      <BreadCrumb />
      <div className="py-20 h-[80vh]">
        <h1 className="font-semibold text-3xl text-center">Services {nameService}</h1>
        <FormService serviceId={serviceId} />
      </div>
    </div>
  )
}