import useSWR from "swr";
import { Modal } from "flowbite-react";
import VideoCard from "../../components/cards/VideoCard";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import { useState } from "react";
import ReactPlayer from "react-player/youtube";

const Videos = () => {
  useAuthRedirect();
  const { data, error } = useSWR("/api/videos");
  const [shownVideo, setShownVideo] = useState(null);

  if (error) return <div>Error</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <div className="mb-10 md:mb-16">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
            Videos
          </h2>

          <p className="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
            Work out at home to our range of videos led by Parkinson’s fitness
            programs from across the country!
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6 xl:gap-8">
          {data.map((video) => (
            <VideoCard
              onClick={() => setShownVideo(video)}
              key={video.videoId}
              title={video.name}
              videoId={video.videoId}
            />
          ))}
        </div>
      </div>

      <Modal size="3xl" show={!!shownVideo} onClose={() => setShownVideo(null)}>
        <Modal.Header>{shownVideo?.name}</Modal.Header>
        <Modal.Body>
          <ReactPlayer
            width="100%"
            url={`https://www.youtube.com/watch?v=${shownVideo?.videoId}`}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Videos;
