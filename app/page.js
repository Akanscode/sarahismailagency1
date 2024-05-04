import AboutUs from "./components/aboutus";
import Hero from "./components/hero";
import OurServices from "./components/ourServices";
import Package from "./components/package";
import Testimonial from "./components/testomanal";

export const metadata = {
  title: "Sarah Ismail Agency",
  description: "Author Agency Website",
};

export default function Home() {
  return (
   <>
      <Hero />
      <OurServices />
      <AboutUs />
      <Package />
      <Testimonial/>
   </>
  );
}
