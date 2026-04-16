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
      className="w-full h-50 rounded-sm object-cover"
      autoPlay
      loop
      muted
      playsInline
    >
      <source src="/assets/304598.mp4" type="video/mp4" />
    </video>
  );
}
