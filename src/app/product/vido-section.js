"use client";

import { useState, useRef } from "react";
import { Play, Pause } from "lucide-react";
import Image from "next/image";

export default function FamilyVideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handlePlay = () => {
    setIsPlaying(true);
    setShowControls(false);
  };

  const handlePause = () => {
    setIsPlaying(false);
    setShowControls(true);
  };

  const handleMouseEnter = () => {
    if (isPlaying) {
      setShowControls(true);
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  return (
    <section className="w-full section ">
      <div
        className="relative w-full  max-h-[800px] rounded-2xl overflow-hidden cursor-pointer group bg-gray-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Video Element */}
        <video
          ref={videoRef}
          className="w-full h-[500px] object-cover"
          onPlay={handlePlay}
          onPause={handlePause}
          preload="metadata"
          controls
          playsInline
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
            type="video/mp4"
          />
          <source
            src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Poster Image Overlay (shown when video is not playing) */}
        {!isPlaying && (
          <div className="absolute inset-0 bg-gray-200">
            <Image
              src="/img/banner2.png"
              alt="Happy family scene with parents and children"
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Play Button Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
          onClick={togglePlay}
        >
          <button
            className="flex items-center justify-center w-20 h-20 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-white/50"
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            aria-label={isPlaying ? "Pause video" : "Play video"}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-gray-800" fill="currentColor" />
            ) : (
              <Play
                className="w-8 h-8 text-gray-800 ml-1"
                fill="currentColor"
              />
            )}
          </button>
        </div>

        {/* Video Controls Bar (appears on hover when playing) */}
        {isPlaying && showControls && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
            <div className="flex items-center gap-4 text-white">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                className="flex items-center justify-center w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? (
                  <Pause className="w-5 h-5" fill="currentColor" />
                ) : (
                  <Play className="w-5 h-5 ml-0.5" fill="currentColor" />
                )}
              </button>
              <div className="text-sm opacity-90">Family Moments</div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
