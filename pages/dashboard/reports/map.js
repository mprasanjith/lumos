import useSWR from "swr";
import ReactTooltip from "react-tooltip";
import MapChart from "../../../components/charts/MapChart";
import useAuthRedirect from "../../../hooks/useAuthRedirect";
import { useState } from "react";

const PatientData = () => {
  useAuthRedirect();

  const { data, error } = useSWR("/api/reports");

  const [content, setContent] = useState("");

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Patient Map
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Explore the patient map
          </p>
        </div>

        <MapChart people={data} setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    </div>
  );
};

export default PatientData;
