import Divider from "./components/divider";
import MobileNavbar from "./components/mobile-navbar";
import Navbar from "./components/navbar";
import StickySocials from "./components/sticky-socials";
import Hero from "./hero/page";
import Latest from "./latest/page";

export default function Home() {
  return (
    <div id="container" className="w-full">
      <div id="navbar" className="hidden xl:block">
        <Navbar />
      </div>
      <div className="xl:hidden">
        <MobileNavbar />
      </div>
      <div id="content" className="">
        <div className="hidden xl:block">
          <StickySocials />
        </div>
        <main id="sections" className="">
          <Hero />
          <Divider />

          <Latest />
        </main>
      </div>
    </div>
  );
}
