import AboutContent from "../components/about-content";

export default function About() {
  return (
    <section id="About">
      <div
        className="bg-[url('/images/waterfall_opaque.png')] bg-cover bg-center bg-no-repeat bg-fixed p-4
        lg:px-64 lg:py-16"
      >
        <AboutContent />
      </div>
    </section>
  );
}
