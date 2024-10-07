
import Hero from "@/components/main/Hero";
import HomePage from "@/pages/Home";
import TeamsPage from "@/pages/OurTeam";
import AboutPage from "@/pages/about";


export default function Home() {
  return (
   <main className="h-full w-full">
    <div className="flex flex-col gap-20">
      <Hero />
      <HomePage />
      <AboutPage />
      <TeamsPage />
    </div>


   </main>
  );
}
