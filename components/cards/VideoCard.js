const VideoCard = ({ title, videoId, onClick }) => {
  return (
    <a
      href="#"
      onClick={onClick}
      className="group h-48 md:h-96 flex justify-start items-end bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
    >
      <img
        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
        loading="lazy"
        alt={title}
        className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
      />

      <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

      <span className="inline-block text-gray-200 text-md md:text-lg font-bold backdrop-blur relative px-2 md:px-3 py-1 ml-3 mb-3">
        {title}
      </span>
    </a>
  );
};

export default VideoCard;
