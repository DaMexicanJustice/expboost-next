import MobileNavbar from "./components/mobile-navbar";
import Navbar from "./components/navbar";
import StickySocials from "./components/sticky-socials";
import Hero from "./hero/page";

export default function Home() {
  return (
    <div id="container" className="w-full bg-purple-900">
      <div id="navbar" className="hidden xl:block">
        <Navbar />
      </div>
      <div className="xl:hidden">
        <MobileNavbar />
      </div>
      <div id="content" className="mx-10">
        <div className="hidden xl:block">
          <StickySocials />
        </div>
        <main id="sections" className="">
          <Hero />
        </main>
      </div>
    </div>
  );
}
