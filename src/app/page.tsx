import Header from "@/components/header";
import Hero from "@/components/hero";
import About from "@/components/about";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import HowItWorks from "@/components/how-it-works";
import Contact from "@/components/contact";

import Footer from "@/components/footer";


export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <div className="px-2 md:px-20 py-5 flex justify-center">
          <div className="max-w-[960px] w-full space-y-8">
           <About /> 
            <Problem />
           <Solution />
            <HowItWorks />
            <Contact /> 
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
