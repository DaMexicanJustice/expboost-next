import About from "./about/page";
import Footer from "./components/footer";
import MobileNavbar from "./components/mobile-navbar";
import Navbar from "./components/navbar";
import PollCta from "./components/poll-cta";
import Signup from "./signup/page";
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
        <div className="hidden xl:block">
          <PollCta />
        </div>
        <main id="sections">
          <Hero />
          <Latest />
          <About />
          <Signup />
          <Footer />
        </main>
      </div>
    </div>
  );
}
