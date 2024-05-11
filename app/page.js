import AboutUs from "./components/aboutus";
import BenefitOfBook from "./components/benefit";
import Hero from "./components/hero";
import HowToMarket from "./components/howtomarket";
//import OurServices from "./components/howtomarket";
import OurServicesices from "./components/ourservices";
//import Package from "./components/ourservices";
import Testimonial from "./components/testomanal";

export const metadata = {
  title: "Sarah Ismail Agency",
  description: "Author Agency Website",
};

export default function Home() {
  return (
   <>
      <Hero />
      <BenefitOfBook />
       <AboutUs />
      <HowToMarket />
      <OurServicesices/>
     
      <Testimonial/>
   </>
  );
}
