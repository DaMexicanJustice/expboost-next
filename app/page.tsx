import Navbar from "./components/navbar";
import StickySocials from "./components/sticky-socials";
import Hero from "./hero/page";

export default function Home() {
  return (
    <div id="container" className="w-full bg-purple-900">
      <Navbar></Navbar>
      <div id="content" className="mx-10">
        <StickySocials></StickySocials>
        <main id="sections" className="">
          <Hero></Hero>
        </main>
      </div>
    </div>
  );
}
