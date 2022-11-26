import useAuthRedirect from "../../hooks/useAuthRedirect";

const PatientData = () => {
  useAuthRedirect();

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Patient Data
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            This is a section of some simple filler text, also known as
            placeholder text. It shares some characteristics of a real written
            text but is random or otherwise generated.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-8">
          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Growth</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto"
            >
              More
            </a>
          </div>

          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Security</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto"
            >
              More
            </a>
          </div>

          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Cloud</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto"
            >
              More
            </a>
          </div>

          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Speed</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto"
            >
              More
            </a>
          </div>

          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Support</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto"
            >
              More
            </a>
          </div>

          <div className="flex flex-col border rounded-lg p-4 md:p-6">
            <h3 className="text-lg md:text-xl font-semibold mb-2">Dark Mode</h3>
            <p className="text-gray-500 mb-4">
              Filler text is dummy text which has no meaning however looks very
              similar to real text.
            </p>
            <a
              href="#"
              className="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-bold transition duration-100 mt-auto"
            >
              More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientData;
