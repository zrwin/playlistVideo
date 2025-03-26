export default function PlaylistSidebar({ videos, selectedVideo, onSelectVideo }) {
    return (
      <div className="w-1/3 h-screen overflow-y-auto p-4 bg-gray-900 text-white">
        <h2 className="text-xl font-bold mb-4">Playlist</h2>
        <ul className="space-y-4">
          {videos.map((video, index) => (
            <li
              key={video.id}
              className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-all ${
                selectedVideo === video.snippet.resourceId.videoId ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
              onClick={() => onSelectVideo(video.snippet.resourceId.videoId)}
            >
              <span className="text-lg font-bold">{index + 1}.</span>
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-20 h-12 rounded-lg" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{video.snippet.title}</h3>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }