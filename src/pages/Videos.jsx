import React, { useState, useRef } from "react";
import { PlayCircle, X, Maximize } from "react-feather";

const videos = [
  {
    id: 1,
    title: "Day 1 - Zumba Basics",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1683133334722-e8080c6af068?w=600&auto=format&fit=crop&q=60",
    duration: "54 min",
    src: "https://drive.google.com/file/d/1qyc_kz7cfQlypGTwXO-iVavSMx4nY56n/preview",
    isDrive: true,
  },
  {
    id: 2,
    title: "Day 2 - High Energy Zumba",
    thumbnail:
      "https://images.unsplash.com/photo-1527933053326-89d1746b76b9?w=600&auto=format&fit=crop&q=60",
    duration: "01h 06min",
    src: "https://drive.google.com/file/d/1DFWKZK9tep3gQPDB7e7o4Ni0oSA5eGP6/preview",
    isDrive: true,
  },
  {
    id: 3,
    title: "Day 3 - Cardio & Fat Burn",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661378540853-ec744a6c4ba1?w=600&auto=format&fit=crop&q=60",
    duration: "59 min",
    src: "https://drive.google.com/file/d/1ZXpzB-O17kJGZKSxBjmtZ-YJ3WKxIWOD/preview",
    isDrive: true,
  },
  {
    id: 4,
    title: "Day 4 - Dance Party Mix",
    thumbnail:
      "https://media.istockphoto.com/id/485457582/photo/dance-fitness-gym-class.webp?a=1&b=1&s=612x612&w=0&k=20&c=tQXeqzb1HPsYkEyedt8x7aby91sN9bLRqm885fJcH6M=",
    duration: "52 min",
    src: "https://drive.google.com/file/d/1X2uaPtDMpwPr0yRztsRVYE_4AodNBXa0/preview",
    isDrive: true,
  },
  {
    id: 5,
    title: "Day 5 - Strength & Core",
    thumbnail:
      "https://images.unsplash.com/photo-1749640245925-4e31e81c3d38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8enVtYmElMjBmaXRuZXNzfGVufDB8fDB8fHww",
    duration: "55 min",
    src: "https://drive.google.com/file/d/1dIkCm8znUcarCHC3Mv9RQJbWvyfH5ty3/preview",
    isDrive: true,
  },
  {
    id: 6,
    title: "Day 6 - Full Body Burnout",
    thumbnail:
      "https://media.istockphoto.com/id/1860710155/photo/fitness-instructor-lunging-forward-with-dumb-bells-in-gym.webp?a=1&b=1&s=612x612&w=0&k=20&c=xNUG-g0HIWfTlYzZWDfYtFN1W-R7dza4EdAyWhO27cc=",
    duration: "56 min",
    src: "https://drive.google.com/file/d/1vUYIPqpeK_NOKh8wd7JZ3WUPG0-9svg6/preview",
    isDrive: true,
  },
];

const Videos = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [height, setHeight] = useState(500)
  const videoRef = useRef(null);
  const iframeRef = useRef(null);

  const closeModal = () => setSelectedVideo(null);

  const handleFullscreen = () => {
    const el = selectedVideo.isDrive ? iframeRef.current : videoRef.current;

    if (!document.fullscreenElement) {
      el.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
  };


  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white px-6 py-12">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight">
          Zumba Workout Plan
        </h1>
        <p className="text-gray-400 mt-2 text-lg">
          Follow the structured Zumba sessions day by day!
        </p>
      </div>

      {/* Videos Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {videos.map((video) => (
    <div
      key={video.id}
      className="group relative rounded-xl overflow-hidden border border-gray-700 bg-neutral-900 hover:border-gray-500 transition-all duration-300 cursor-pointer shadow-md hover:shadow-xl"
      onClick={() => setSelectedVideo(video)}
    >
      {/* Thumbnail */}
      <img
        src={video.thumbnail}
        alt={video.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 flex items-center justify-center transition">
        <PlayCircle className="w-14 h-14 text-white opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-transform" />
      </div>

      {/* Video Info */}
      <div className="p-3">
        <h3 className="text-base font-medium text-gray-100 mb-1 group-hover:text-white transition-colors">
          {video.title}
        </h3>
        <p className="text-sm text-gray-400">{video.duration}</p>
      </div>
    </div>
  ))}
</div>


      {/* Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
          <div
            ref={iframeRef}
            className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-2xl bg-gray-950"
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 left-4 text-white hover:text-white transition z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Fullscreen Button */}
            <button
              onClick={handleFullscreen}
              className="absolute bottom-10 right-4 text-white hover:text-white transition z-10"
            >
              <Maximize className="w-7 h-7" />
            </button>

            {/* Video Player */}
            <div className="relative w-full pt-[56.25%]"> {/* 16:9 aspect ratio */}
              {selectedVideo.isDrive ? (
                <iframe
                  src={selectedVideo.src}
                  allow="autoplay"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                ></iframe>
              ) : (
                <video
                  ref={videoRef}
                  src={selectedVideo.src}
                  controls
                  autoPlay
                  className="absolute top-0 left-0 w-full h-full rounded-xl"
                ></video>
              )}
            </div>


            {/* Video Title */}
            <div className="p-5">
              <h2 className="text-xl font-bold text-white">
                {selectedVideo.title}
              </h2>
              <p className="text-gray-400 text-sm">{selectedVideo.duration}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Videos;
