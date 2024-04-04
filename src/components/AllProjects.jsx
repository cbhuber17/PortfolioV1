import { Fragment, useState } from "react";
import { Tag } from "primereact/tag";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";

import ParagraphHeader from "./ParagraphHeader";
import ProjectCard from "./ProjectCard";
import SortBy from "./SortBy";
import { useLanguage } from "../contexts/LanguageContext";

import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme

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

function getDevProjects(showDevProjects, projects) {
  if (showDevProjects)
    return projects.filter((project) => project.under_construction);
  return projects;
}

function getSortedTags() {
  const tags = projects
    .map((project) => project.tags.map((tag) => tag.name))
    .flat(1);

  const counts = {};

  tags.forEach((el) => {
    counts[el] = counts[el] ? counts[el] + 1 : 1;
  });

  const tagsSorted = Object.keys(counts).sort(function (a, b) {
    return counts[b] - counts[a];
  });

  return tagsSorted;
}

/* eslint react/prop-types: 0 */
// eslint-disable-next-line react-refresh/only-export-components
const AllProjects = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isForeign } = useLanguage();

  const [sortBy, setSortBy] = useState("popular");
  const [showDevProjects, setShowDevProjects] = useState(false);

  // Sort & Filter
  const sortedProjects = getSortedProjects(sortBy);
  const devSortedProjects = getDevProjects(showDevProjects, sortedProjects);
  const uniqueProjects = getFilteredProjects(devSortedProjects, searchQuery);

  const tagsSorted = getSortedTags();

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

      <p className="text-white">
        {isForeign ? "Bộ lọc mẫu" : "Example Filters"}
        :&nbsp;&nbsp;&nbsp;
        {tagsSorted.map((tag, index) => {
          if (index < 13) {
            return (
              <Fragment key={tag}>
                <Tag
                  style={{
                    background:
                      "linear-gradient(-225deg,#AC32E4 0%,#7918F2 48%,#4801FF 100%)",
                    padding: "5px",
                  }}
                  value={tag}
                  severity="success"
                />
                &nbsp;&nbsp;
              </Fragment>
            );
          }
        })}
      </p>

      <input
        type="text"
        placeholder={isForeign ? "Lọc dự án..." : "Filter projects..."}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="my-5 px-2 py-2"
      />

      <div className="flex w-60 justify-between">
        <p className="text-white">{isForeign ? "Sắp xếp theo" : "Sort By"}:</p>
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
          value={sortBy}
          setSortBy={setSortBy}
        />
      </div>

      <div className="text-white mt-5">
        <label>
          <input
            type="checkbox"
            onClick={() => setShowDevProjects(!showDevProjects)}
          />
          &nbsp;
          {isForeign
            ? "Hiển thị các dự án đang tiến hành"
            : "Show Projects In Progress"}
        </label>
      </div>

      <div className="card-grid mt-20 justify-center lg:justify-start flex flex-wrap gap-7">
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
