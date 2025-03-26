"use client";
import VideoPlayer from "../../components/VideoPlayer";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Progress } from "@/components/ui/progress";
import PlaylistSidebar from "../../components/PlaylistSidebar"

export default function Playlist() {
  const [progress, setProgress] = useState(13)
  const playlistId = useParams().id;
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const [videoDetails, setVideoDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!playlistId) return;

    async function fetchVideos() {
      setLoading(true);
      setError(null);

      const url = `https://youtube-v311.p.rapidapi.com/playlistItems/?part=snippet&playlistId=${playlistId}&maxResults=200`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "318f8a0036msh8fc5b95f3216616p1351bajsn3de3adca4c82",
          "x-rapidapi-host": "youtube-v311.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        if (!response.ok) throw new Error("Failed to fetch videos");

        const data = await response.json();
        setVideos(data.items || []);
        if (data.items.length > 0) {
            const firstVideo = data.items[0].snippet;
            setSelectedVideo(firstVideo.resourceId.videoId);
            setVideoDetails({
            title: firstVideo.title,
            description: firstVideo.description,
            likes: Math.floor(Math.random() * 1000), // Placeholder for likes
          });
        }
      } catch (error) {
        console.error("Error fetching videos:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, [playlistId]);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <div className=" flex h-screen justify-center items-center ">
            <div className="w-1/3">

          <Progress value={progress} className="h-2" />
            </div>
        </div>
      ) : (
        <div className="flex h-screen ">
        {  error ? (<p className="text-center text-red-500">Error: {error}</p>) :
          videos.length === 0 ? (
          <p className="text-center text-gray-600">
            No videos found in this playlist.
          </p>
  ) : (
      <>
            <VideoPlayer videoId={selectedVideo}  videoDetails={videoDetails} showFullDescription={showFullDescription} setShowFullDescription={setShowFullDescription} />
            <PlaylistSidebar videos={videos} selectedVideo={selectedVideo} onSelectVideo={setSelectedVideo} />
          </>
          )
        }
        </div>
      )}
    </>
  );
}
