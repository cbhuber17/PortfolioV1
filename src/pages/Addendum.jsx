import { Navbar } from "../components";
import ParagraphHeader from "./../components/ParagraphHeader";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import ProjectCard from "./../components/ProjectCard";

const Addendum = () => {
  return (
    <div className="relative z-0 bg-primary" id="projects">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <ParagraphHeader pText="All Projects" hText="Addendum." style="" />

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        All projects are shown below.
      </p>

      {/* TODO: Filter button: Sort by: Popular, alphabetical, created date asc/desc  */}

      <div className="card-grid mt-20 flex flex-wrap gap-7" id="certificates">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            show_motion={false}
            {...project}
          />
        ))}
      </div>

      <br />

      <ParagraphHeader
        pText="All Certificates"
        hText="Extracurricular Learning."
      />

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        All certificates are shown below.
      </p>
    </div>
  );
};

export default SectionWrapper(Addendum);
