import {
  python,
  typescript,
  html,
  css,
  sass,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  supabase,
  // neon,
  // pocketbase,
  git,
  docker,
  hexagon,
  elections,
  wildoasis,
  traveljournal,
  videogame,
  cplusplus,
} from "../assets";

import { full_stack, gnss, cloud, tutor } from "../assets/service_icons";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: full_stack,
  },
  {
    title: "GNSS Software Testing",
    icon: gnss,
  },
  {
    title: "Cloud Solutions",
    icon: cloud,
  },
  {
    title: "Tutoring",
    icon: tutor,
  },
];

// Looks like max 13 can be loaded
const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Sass",
    icon: sass,
  },
  {
    name: "C++",
    icon: cplusplus,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Supabase",
    icon: supabase,
  },
  // {
  //   name: "Neon",
  //   icon: neon,
  // },
  // {
  //   name: "Pocketbase",
  //   icon: pocketbase,
  // },
  {
    name: "git",
    icon: git,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Information & Registration Officer and Record Clerk",
    company_name: "Elections Alberta",
    icon: elections,
    iconBg: "#F1B51F",
    date: "May 2023 - May 2023",
    points: [
      "Determines an elector's voting area, then directs electors to the appropriate voting or registration station.",
      "Helps maintain flow of electors through the voting place.",
      "Administers necessary declarations and oaths.",
      "Sorts, tallys and documents all votes at the end of the day.",
    ],
  },
  {
    title: "Safety Critical Verification Engineer",
    company_name: "Hexagon",
    icon: hexagon,
    iconBg: "#383E56",
    date: "January 2012 - April 2023",
    points: [
      "Architected and executed manual/automated tests using python and C++, following aviation standards (DO-178B) and ISTQB best practices.",
      "Lead a team and mentored new members; performed detailed peer reviews.",
      "Improved quality of the product by raising 25 defects",
      "Designed efficient test setups that reduced engineering costs to the project (up to 10%).",
    ],
  },
  {
    title: "Ground Reference Receivers Application Engineer",
    company_name: "Hexagon",
    icon: hexagon,
    iconBg: "#383E56",
    date: "June 2010 - January 2012",
    points: [
      "Provided world-class customer support for reference GNSS systems worldwide",
      "Actively listened, gathered facts, and engaged the customer",
      "Built relationships and resolved customer inquiries in a timely manner",
    ],
  },
  {
    title: "GPS Software Engineer",
    company_name: "Hexagon",
    icon: hexagon,
    iconBg: "#383E56",
    date: "September 2005 - June 2010",
    points: [
      "Supported embedded development, requirements management, tracing and testing of ground reference receivers (WAAS, GUS) for the aviation industry",
      "UML modeling and requirements management to build product to customer specifications",
      "Developer testing utilizing unit testing harnesses and GNSS simulators.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "The Wild Oasis",
    description:
      "Internal hotel/cabin rental portal to manage dashboard, users, cabins, bookings & settings.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "styledcomponents",
        color: "pink-text-gradient",
      },
      {
        name: "recharts",
        color: "orange-text-gradient",
      },
      {
        name: "vite",
        color: "red-text-gradient",
      },
    ],
    image: wildoasis,
    project_link: "https://cbhuber17.github.io/the-wild-oasis/",
    source_code_link: "https://github.com/cbhuber17/the-wild-oasis",
  },
  {
    name: "WorldWise Travel Journal",
    description:
      "An app to select a location on a map and create a journal entry of the visited location!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "pocketbase",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
      {
        name: "leaflet",
        color: "orange-text-gradient",
      },
      {
        name: "sass",
        color: "red-text-gradient",
      },
    ],
    image: traveljournal,
    project_link: "https://cbhuber17.github.io/WorldWise/",
    source_code_link: "https://github.com/cbhuber17/WorldWise",
  },
  {
    name: "Video Game Archive",
    description:
      "A simple yet fully modern React App that utilizes a RAWG API to retrieve a list of all available video games.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: videogame,
    project_link: "https://video-game-archive.vercel.app/",
    source_code_link: "https://video-game-archive.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
