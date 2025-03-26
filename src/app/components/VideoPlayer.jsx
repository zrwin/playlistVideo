import CommentSection from '../components/CommentSection'
export default function VideoPlayer({ videoId , videoDetails , showFullDescription, setShowFullDescription}) {
    return (
        <div className="w-2/3 p-4 flex flex-col items-center">
        {videoId ? (
          <>
            <iframe
              className="w-full h-150 rounded-lg shadow-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube Video Player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h2 className="text-xl font-bold mt-4">{videoDetails?.title}</h2>
            <p className="text-gray-600">
              {showFullDescription ? videoDetails?.description : `${videoDetails?.description?.split(" ").slice(0, 40).join(" ")}...`}
              {videoDetails?.description?.split(" ").length > 100 && (
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-blue-600 hover:underline ml-2"
                >
                  {showFullDescription ? "Show Less" : "More"}
                </button>
              )}
            </p>
            <p className="text-gray-800 font-semibold mt-2">👍 {videoDetails?.likes} Likes</p>
            <CommentSection />
          </>
        ) : (
          <p className="text-gray-600">Select a video to play</p>
        )}
      </div>
      );
  }