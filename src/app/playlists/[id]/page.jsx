'use client';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function Playlist() {
  const playlistId = useParams().id; // Get playlist ID from URL params
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playlistId) return;

    console.log(playlistId);
    async function fetchVideos() {
      setLoading(true);
      setError(null);

      const url = `https://youtube-v311.p.rapidapi.com/playlistItems/?part=snippet&playlistId=${playlistId}&maxResults=200`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": "318f8a0036msh8fc5b95f3216616p1351bajsn3de3adca4c82",
          "x-rapidapi-host": "youtube-v311.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Failed to fetch videos");

        const data = await response.json();
        setVideos(data.items || []);
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [playlistId]);

  return (
    <div className="p-6 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">YouTube Playlist</h1>
      {loading ? (
        <p className="text-center text-gray-600">Loading videos...</p>
      ) : error ? (
        <p className="text-center text-red-500">Error: {error}</p>
      ) : videos.length === 0 ? (
        <p className="text-center text-gray-600">No videos found in this playlist.</p>
      ) : (
        <ul className="flex flex-col space-y-6">
          {videos.map((video, index) => (
            <li key={video.id} className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md">
              <span className="text-2xl font-bold text-gray-700">{index + 1}.</span>
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-32 h-20 rounded-lg"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{video.snippet.title}</h3>
                <a
                  href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Watch Video
                </a>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
