import { Navbar } from "../components";
import ParagraphHeader from "./../components/ParagraphHeader";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import ProjectCard from "./../components/ProjectCard";
// import Filter from "../components/Filter";
import SortBy from "../components/SortBy";
import { useSearchParams } from "react-router-dom";

const Addendum = () => {
  const [searchParams] = useSearchParams();

  const sortBy = searchParams.get("sortBy") || "popular";

  // Default order is popularity (index number) in constants.js
  let sortedProjects;

  switch (sortBy) {
    case "alphabetical":
      sortedProjects = projects.sort(function (a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
      break;
    case "created-asc":
      sortedProjects = projects.sort((a, b) => a.date_created - b.date_created);
      break;
    case "created-desc":
      sortedProjects = projects.sort((a, b) => b.date_created - a.date_created);
      break;
    case "popular":
    case "":
    default:
      sortedProjects = projects.sort((a, b) => a.index - b.index);
      break;
  }

  return (
    <div className="relative z-0 bg-primary" id="projects">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <ParagraphHeader pText="All Projects" hText="Addendum." style="" />

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        All projects are shown below.
      </p>

      {/* TODO: Sort button: Sort by: Popular, alphabetical, created date asc/desc  */}
      {/* TODO: Filter button: Query text from input element  */}
      {/* <Filter
        filterField="projects"
        options={[
          { value: "popular", label: "Popular" },
          { value: "alphabetical", label: "Alphabetical" },
          { value: "created-asc", label: "Created &#8593;" },
          { value: "created-desc", label: "Created &#8595;" },
        ]}
      /> */}

      <div className="flex w-60 justify-between">
        <p>Sort By:</p>
        <SortBy
          options={[
            { value: "popular", label: "Popular" },
            { value: "alphabetical", label: "Alphabetical" },
            { value: "created-desc", label: "Created ↓" },
            { value: "created-asc", label: "Created ↑" },
          ]}
        />
      </div>

      <div className="card-grid mt-20 flex flex-wrap gap-7" id="certificates">
        {sortedProjects.map((project, index) => (
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
