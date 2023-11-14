import { Navbar } from "../components";
import ParagraphHeader from "./../components/ParagraphHeader";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import ProjectCard from "./../components/ProjectCard";
import SortBy from "../components/SortBy";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";

function getSortedProjects(sortBy) {
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

  return sortedProjects;
}

function getFilteredProjects(projects, searchQuery) {
  // Project names (titles) filtered by search query
  const filteredNames = projects.filter((project) =>
    project.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Project tags filtered by search query
  const filteredTags = projects.filter((project) =>
    project.tags.map((tag) => tag.name).includes(searchQuery)
  );

  // Combine
  const filteredProjects = [...filteredNames, ...filteredTags];

  // Remove duplicates in case tag or name has same searchQuery (like "react")
  // Using project."name" here to make sure they are unique
  const uniqueProjects = [
    ...new Map(filteredProjects.map((item) => [item["name"], item])).values(),
  ];

  return uniqueProjects;
}

const Addendum = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");

  const sortBy = searchParams.get("sortBy") || "popular";

  // Sort & Filter
  const sortedProjects = getSortedProjects(sortBy);
  const uniqueProjects = getFilteredProjects(sortedProjects, searchQuery);

  return (
    <div className="relative z-0 bg-primary" id="projects">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <ParagraphHeader
        pText="Addendum"
        hText={`All Projects. (${uniqueProjects.length})`}
        style=""
      />

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        All projects are shown below.
      </p>

      <input
        type="text"
        placeholder="Filter projects..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="my-5 px-2 py-2"
      />

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
        {uniqueProjects.map((project, index) => (
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
