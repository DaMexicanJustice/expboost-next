import VideoText from "../components/video-text";

export default function Latest() {
  return (
    <section id="latest-episodes" className="w-full h-svh z-20 bg-slate-900">
      <div id="latest-container" className="flex flex-col items-center">
        <div
          className="flex flex-col items-center gap-6 bg-sky-500 text-black rounded-b-3xl p-10
        xl:p-20"
        >
          <VideoText
            text="Latest"
            gifSrc="/images/video-text-3.gif"
            startHex="#0369A1"
            endHex="#0169F1"
          />
          <div
            className="flex flex-col justify-center items-center gap-6
          xl:flex-row"
          >
            <div className="flex flex-col items-center gap-6">
              <div
                id="placeholder-image"
                className="h-40 w-64 bg-blue-700 rounded-b-xl"
              ></div>
              <h3 className="text-xl">Revive Couch Co-Op!</h3>
              <p>January 18, 2023</p>
            </div>

            <div className="flex flex-col gap-6 items-center">
              <div
                id="placeholder-image"
                className="h-40 w-64 bg-blue-700 rounded-b-xl"
              ></div>
              <h3 className="text-xl">Revive Couch Co-Op!</h3>
              <p>January 18, 2023</p>
            </div>

            <div className="flex flex-col gap-6 items-center">
              <div
                id="placeholder-image"
                className="h-40 w-64 bg-blue-700 rounded-b-xl"
              ></div>
              <h3 className="text-xl">Revive Couch Co-Op!</h3>
              <p>January 18, 2023</p>
            </div>

            <div className="flex flex-col gap-6 items-center">
              <div
                id="placeholder-image"
                className="h-40 w-64 bg-blue-700 rounded-b-xl"
              ></div>
              <h3 className="text-xl">Revive Couch Co-Op!</h3>
              <p>January 18, 2023</p>
            </div>
          </div>
          <h3 className="uppercase text-sm font-bold hover:underline hover:opacity-50 hover:cursor-pointer w-fit">
            View More
          </h3>
        </div>
      </div>
    </section>
  );
}
