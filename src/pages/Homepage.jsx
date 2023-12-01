import useWindowDimensions from "../hooks/useWindowDimensions";
import {
  About,
  Contact,
  Experience,
  // Feedbacks,
  Certificates,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./../components";

/* eslint react/prop-types: 0 */
const Homepage = () => {
  const { width } = useWindowDimensions();
  let isMobile = false;
  if (width < 500) isMobile = true;

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      {isMobile ? null : <Tech />}
      <Works />
      {/* <Feedbacks /> */}
      {isMobile ? null : <Certificates />}
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <Footer />
    </div>
  );
};

export default Homepage;
