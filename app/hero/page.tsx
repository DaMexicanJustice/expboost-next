import { BgVideo } from "../components/bg-video";

export default function Hero() {
  return (
    <>
      <section id="Hero-section" className="w-full h-svh z-20">
        <div className="flex flex-row h-full justify-center items-center">
          <div className="flex flex-col gap-6 uppercase">
            <h1 className="text-4xl font-bold">
              EXPBoost is gamified podcast.
            </h1>
            <p>Join us on a deepdive into game design.</p>
            <p className="font-bold">Every Monday. 15:00 CET UTC+2</p>
          </div>
        </div>
      </section>
      <div
        className="top-0 left-0 absolute h-svh w-full object-cover -z-10
        bg-black/40"
      ></div>
      <BgVideo />
    </>
  );
}
