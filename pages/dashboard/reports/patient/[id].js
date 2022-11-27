import useSWR from "swr";
import useAuthRedirect from "../../../../hooks/useAuthRedirect";

const PatientData = () => {
  useAuthRedirect();

  const { data, error } = useSWR("/api/reports");

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Patient Data
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Explore patient data for patient {}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
          {data.map((item) => (
            <div
              key={item.file}
              className="flex flex-col border rounded-lg p-4 md:p-6"
            >
              <h3 className="text-lg md:text-xl font-semibold mb-2">
                {item.name}
              </h3>
              <a
                download
                href={`/downloads/${item.file}`}
                className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto"
              >
                Download
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientData;
