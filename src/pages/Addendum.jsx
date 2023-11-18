import { Footer, Navbar } from "../components";
import RandomQuote from "../components/RandomQuote";
import AllProjects from "../components/AllProjects";
// import AllCertificates from "../components/AllCertificates";

const Addendum = () => {
  return (
    <div className="relative z-0 bg-primary" id="projects">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <AllProjects />
      <br />
      {/* <AllCertificates /> */}
      <RandomQuote />
      <Footer />
    </div>
  );
};

export default Addendum;
