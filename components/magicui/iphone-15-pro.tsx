"use client";
import React, { useRef, useEffect } from "react";
import type { HTMLAttributes } from "react";

export interface Iphone15ProProps extends HTMLAttributes<HTMLDivElement> {
  videoSrc?: string
  imageSrc?: string
}

export function Iphone15Pro({
  className,
  videoSrc,
  imageSrc,
  style,
  ...props
}: Iphone15ProProps) {
  const hasVideo = !!videoSrc
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && hasVideo) {
      videoRef.current.play().catch(e => console.error("Autoplay failed", e));
    }
  }, [hasVideo, videoSrc]);
  
  return (
    <div
      className={`relative inline-block w-full max-w-[300px] h-[650px] align-middle ${className ?? ""}`}
      style={{
        ...style,
      }}
      {...props}
    >
      {/* Outer Phone Frame */}
      <div className="absolute inset-0 rounded-[55px] border-[12px] border-[#1C1C1E] bg-transparent shadow-2xl pointer-events-none z-10">
        {/* Dynamic Island */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-full z-20"></div>
        {/* Side Buttons (Visual only, fake elements) */}
        <div className="absolute -left-[14px] top-[100px] w-[2px] h-[26px] bg-[#2C2C2E] rounded-l-md"></div>
        <div className="absolute -left-[14px] top-[150px] w-[2px] h-[55px] bg-[#2C2C2E] rounded-l-md"></div>
        <div className="absolute -left-[14px] top-[220px] w-[2px] h-[55px] bg-[#2C2C2E] rounded-l-md"></div>
        <div className="absolute -right-[14px] top-[170px] w-[2px] h-[80px] bg-[#2C2C2E] rounded-r-md"></div>
      </div>

      {/* Screen Content */}
      <div className="absolute inset-[12px] rounded-[43px] overflow-hidden z-0 bg-white">
        {hasVideo ? (
          <video
            ref={videoRef}
            className="block size-full object-cover"
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt="App screenshot"
            className="block size-full object-cover object-top"
          />
        ) : null}
      </div>
    </div>
  )
}
