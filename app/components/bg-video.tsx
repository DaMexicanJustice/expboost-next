export function BgVideo() {
  return (
    <div className="absolute inset-0 -z-20">
      <video
        autoPlay
        loop
        muted
        className="top-0 left-0 absolute size-full object-cover"
      >
        <source src="/videos/bg-video.mp4" type="video/mp4"></source>
      </video>
    </div>
  );
}
