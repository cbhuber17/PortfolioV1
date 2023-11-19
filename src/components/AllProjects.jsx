import { useState } from "react";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

import ParagraphHeader from "./ParagraphHeader";
import ProjectCard from "./ProjectCard";
import SortBy from "./SortBy";
import { useSearchParams } from "react-router-dom";
import { useLanguage } from "../contexts/LanguageContext";

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

/* eslint react/prop-types: 0 */
// eslint-disable-next-line react-refresh/only-export-components
const AllProjects = () => {
  const [searchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const { isForeign } = useLanguage();

  const sortBy = searchParams.get("sortBy") || "popular";

  // Sort & Filter
  const sortedProjects = getSortedProjects(sortBy);
  const uniqueProjects = getFilteredProjects(sortedProjects, searchQuery);

  return (
    <>
      {isForeign ? (
        <ParagraphHeader
          pText="Phụ Lục"
          hText={`Tất Cả Dự Án. (${uniqueProjects.length})`}
          style=""
        />
      ) : (
        <ParagraphHeader
          pText="Addendum"
          hText={`All Projects. (${uniqueProjects.length})`}
          style=""
        />
      )}

      <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
        {isForeign
          ? "Tất cả các dự án được hiển thị dưới đây."
          : "All projects are shown below."}
      </p>

      <input
        type="text"
        placeholder={isForeign ? "Lọc dự án..." : "Filter projects..."}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="my-5 px-2 py-2"
      />

      <div className="flex w-60 justify-between">
        <p>Sort By:</p>
        <SortBy
          options={[
            { value: "popular", label: isForeign ? "Phổ biến" : "Popular" },
            {
              value: "alphabetical",
              label: isForeign ? "Theo bảng chữ cái" : "Alphabetical",
            },
            { value: "created-desc", label: isForeign ? "Tạo ↓" : "Created ↓" },
            { value: "created-asc", label: isForeign ? "Tạo ↑" : "Created ↑" },
          ]}
        />
      </div>

      <div className="card-grid mt-20 flex flex-wrap gap-7">
        {uniqueProjects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            show_motion={false}
            {...project}
          />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(AllProjects);
