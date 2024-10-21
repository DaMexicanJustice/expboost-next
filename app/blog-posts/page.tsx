import BlogCard from "../components/blog-card";
import BlogCardMain from "../components/bog-card-main";
import Footer from "../components/footer";
import MobileNavbar from "../components/mobile-navbar";
import Navbar from "../components/navbar";
import StickySocials from "../components/sticky-socials";

export default function BlogPosts() {
  return (
    <div id="blog-posts flex flex-col gap-0">
      <div className="hidden md:block">
        <StickySocials />
      </div>
      <div id="navbar" className="hidden xl:block">
        <Navbar />
      </div>
      <div className="xl:hidden">
        <MobileNavbar />
      </div>
      <div id="content" className="bg-slate-700 flex flex-col gap-6 px-16 py-5">
        <h1 className="font-bold text-2xl">
          Level Up Your Game Design Skills: Insights, Tips, and Techniques
        </h1>
        <div
          className="flex flex-col gap-6
        lg:flex-row lg:flex-wrap"
        >
          <BlogCardMain
            name="Glossary of game design terms"
            imageSrc="/images/1.jpg"
            date="21-10-2024"
            tag1="Level"
            tag2="Game"
            description="Dive into the intricacies of level design in video games. 
            This post explores how designers create engaging and immersive environments that captivate players, 
            balance difficulty, and enhance the narrative."
          />

          <BlogCard
            name="The Art of Level Design"
            imageSrc="/images/2.jpg"
            date="14-10-2024"
            tag1="Level"
            tag2="Game"
            description="Dive into the intricacies of level design in video games. 
            This post explores how designers create engaging and immersive environments that captivate players, 
            balance difficulty, and enhance the narrative."
          />

          <BlogCard
            name="The Art of Level Design"
            imageSrc="/images/3.jpg"
            date="14-10-2024"
            tag1="Level"
            tag2="Game"
            description="Dive into the intricacies of level design in video games. 
            This post explores how designers create engaging and immersive environments that captivate players, 
            balance difficulty, and enhance the narrative."
          />

          <BlogCard
            name="The Art of Level Design"
            imageSrc="/images/4.jpg"
            date="14-10-2024"
            tag1="Level"
            tag2="Game"
            description="Dive into the intricacies of level design in video games. 
            This post explores how designers create engaging and immersive environments that captivate players, 
            balance difficulty, and enhance the narrative."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
