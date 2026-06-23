"use client";

export function ScrollVideoBackground() {
  return (
    <div className="scroll-video-system" aria-hidden="true">
      <video
        className="scroll-video"
        muted
        playsInline
        autoPlay
        loop
        preload="auto"
      >
        {/* Boomerang loop (forward + reverse) so the 3s clip restarts with no visible cut */}
        <source src="/assets/video/systemmag-scroll-loop.mp4" type="video/mp4" />
      </video>
      <div className="video-fallback">
        <div className="fallback-track">
          <span /><span /><span /><span /><span /><span />
        </div>
        <div className="fallback-track offset">
          <span /><span /><span /><span /><span /><span />
        </div>
      </div>
    </div>
  );
}
