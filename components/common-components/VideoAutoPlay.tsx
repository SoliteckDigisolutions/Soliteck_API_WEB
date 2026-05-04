"use client";
import { useEffect, useRef } from "react";

export default function SlowVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // 0.5 = half speed
    }
  }, []);

  return (
    <video
      ref={videoRef}
      className="w-full border-6 border-white rounded-2xl   h-50 object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source className="rounded-xl" src="/assets/304598.mp4" type="video/mp4" />
    </video>
  );
}
