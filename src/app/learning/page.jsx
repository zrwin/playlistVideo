"use client";

import React from "react";
import { useRouter } from "next/navigation"; // For navigation in Next.js App Router
import playlists from "../assets/playlist";

export default function LearningPage() {
  const router = useRouter();


  const handleClick = (id) => {
    router.push(`/playlists/${id}`); // Navigate to dynamic route
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-blue-500 to-indigo-600 p-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-8 flex justify-center ">Learning Resources</h1>
        <div className="flex justify-center item-center text-white mb-4">
            <h2>Get Started with some of the famous instructors in your react journey.</h2>
        </div>
        <div className="mt-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {playlists.map((playlist, index) => (
            <div
              key={index}
              onClick={() => handleClick(playlist.playlistId)}
              className="cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105"
            >
            
            <img
                src={playlist.image}
                alt={playlist.title}
                className="w-full h-55 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800">{playlist.title}</h2>
                <p className="text-gray-600 mt-2">{playlist.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
