import { BgVideo } from "../components/bg-video";

export default function Hero() {
  return (
    <>
      <section id="Hero-section" className="w-full h-svh z-20">
        <div className="flex flex-row h-full justify-center items-center">
          <div className="flex flex-col gap-6 uppercase">
            <div>
              <h1
                className="text-6xl font-extrabold text-white leading-none uppercase tracking-tighter"
                style={{
                  textShadow: "0 7px #0ea5e9, 0 15px #0ea5e9",
                }}
              >
                EXPBoost is gamified
                <br />
                podcast
              </h1>
            </div>
            <p>Join us on a deepdive into game design.</p>
            <p className="font-bold">Every Monday. 15:00 CET UTC+2</p>
          </div>
        </div>
      </section>
      <div
        className="top-0 left-0 absolute h-svh w-full object-cover -z-10
        bg-black/60"
      ></div>
      <BgVideo />
    </>
  );
}
