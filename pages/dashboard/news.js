import useSWR from "swr";
import useAuthRedirect from "../../hooks/useAuthRedirect";

const News = () => {
  useAuthRedirect();

  const { data, error } = useSWR("/api/news");

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Newsfeed
          </h2>
          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Latest Parkinsons Disease News and Research
          </p>
        </div>
        <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {data.map((news, id) => (
            <div
              key={id}
              class="flex flex-col bg-white border rounded-lg overflow-hidden"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={news.link}
                class="group h-48 md:h-64 block bg-gray-100 overflow-hidden relative"
              >
                <img
                  src={news.media?.thumbnail?.url}
                  alt={news.media?.thumbnail?.["media:description"]}
                  loading="lazy"
                  class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
                />
              </a>

              <div class="flex flex-col flex-1 p-4 sm:p-6">
                <h2 class="text-gray-800 text-lg font-semibold mb-2">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={news.link}
                    class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
                  >
                    {news.title}
                  </a>
                </h2>

                <p class="text-gray-500 mb-4">{news.description}</p>

                <div>
                  <a
                    href={news.link}
                    target="_blank"
                    rel="noreferrer"
                    class="text-indigo-500 hover:text-indigo-600 active:text-indigo-700 font-semibold transition duration-100"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default News;
