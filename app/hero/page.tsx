import { BgVideo } from "../components/bg-video";

export default function Hero() {
  return (
    <>
      <section
        id="Hero-section"
        className="relative w-full h-[calc(100svh-4rem)]
      xl:h-svh overflow-hidden"
      >
        <div
          className="top-0 left-0 absolute h-[calc(100svh-4rem)] xl:h-svh w-full object-cover -z-10
          bg-black/60"
        ></div>
        <BgVideo />
        <div className="flex flex-row h-full justify-center items-center mx-4">
          <div className="flex flex-col gap-6 uppercase">
            <div>
              <h1
                className="hidden font-extrabold text-white leading-none uppercase tracking-tighter
                xl:block xl:text-6xl"
                style={{
                  textShadow: "0 7px #0ea5e9, 0 15px #0ea5e9",
                }}
              >
                EXPBoost is gamified
                <br />
                podcast
              </h1>
              <h1
                className="text-xl font-extrabold text-white leading-none uppercase tracking-tighter
                lg:hidden"
                style={{
                  textShadow: "0 2px #0ea5e9, 0 4px #0ea5e9",
                }}
              >
                EXPBoost is gamified podcast
              </h1>
            </div>
            <p>Join us on a deepdive into game design.</p>
            <p className="font-bold">Every Monday. 15:00 CET UTC+2</p>
          </div>
        </div>
      </section>
    </>
  );
}
