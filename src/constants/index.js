import {
  trillo,
  wildoasis,
  html,
  techd,
  natours,
  nexter,
  python,
  guessnumretro,
  web2004,
  elections,
  supabase,
  natourslanding,
  forkify,
  nextphoto,
  mongodb,
  pportfolio,
  nextnotes,
  cplusplus,
  collatz,
  typescript,
  // pocketbase,
  videogame,
  docker,
  aberwait,
  defectrecord,
  saaslanding,
  vietnamblog,
  packtravel,
  bingosim,
  hexagon,
  piggame,
  gnssquiz,
  threadportfolio,
  usepopcorn,
  zeal,
  rpgai,
  fastpizza,
  countriesapi,
  nodejs,
  eventgrids,
  reactjs,
  git,
  nodefarm,
  sass,
  traveljournal,
  tailwind,
  vnlandingpage,
  // neon,
  css,
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

const titles = [
  "Marketing Specialist",
  "Marketing Manager",
  "Marketing Director",
  "Graphic Designer",
  "Marketing Research Analyst",
  "Marketing Communications Manager",
  "Marketing Consultant",
  "Product Manager",
  "Public Relations",
  "Social Media Assistant",
  "Brand Manager",
  "SEO Manager",
  "Content Marketing Manager",
  "Digital Marketing Manager",
  "eCommerce Marketing Specialist",
  "Brand Strategist",
  "Vice President of Marketing",
  "Media Relations Coordinator",
  "CEO",
  "COO",
  "CFO",
  "CIO",
  "CTO",
  "CMO",
  "CHR",
  "CDO",
  "CPO",
  "CCO",
  "Computer Scientist",
  "UX Designer & UI Developer",
  "SQL Developer",
  "Software Engineer",
  "DevOps Engineer",
  "Information Security Analyst",
  "Artificial Intelligence Engineer",
  "Cloud Architect",
  "IT Manager",
  "Technical Specialist",
  "Application Developer",
  "Customer Service Manager",
  "Technical Support Specialist",
  "Account Representative",
  "Client Service Specialist",
  "Customer Care Associate",
  "Operations Manager",
  "Operations Assistant",
  "Operations Coordinator",
  "Operations Analyst",
  "Operations Director",
  "Vice President of Operations",
  "Operations Professional",
  "Scrum Master",
  "Continuous Improvement Lead",
  "Researcher",
  "Research Assistant",
  "Data Analyst",
  "Business Analyst",
  "Financial Analyst",
  "Biostatistician",
  "Title Researcher",
  "Market Researcher",
  "Title Analyst",
  "Medical Researcher",
  "Technical Writer",
  "Columnist",
  "Public Relations Specialist",
];

const sampleTestimonials = [
  "Working with this team was a fantastic experience. They developed a sleek and responsive website that exceeded our expectations.",
  "The web developers on this project were incredibly talented. They turned our vision into a beautiful, user-friendly website.",
  "I'm impressed by the skills of the web development team. They delivered a website that not only looks great but also performs flawlessly.",
  "The software testing team was instrumental in ensuring the reliability of our application. Their thorough testing process saved us from potential disasters.",
  "I can't thank the software testing team enough for their dedication. They identified critical bugs that we would have missed on our own.",
  "The software testers demonstrated exceptional attention to detail, ensuring our software was bug-free and ready for release.",
  "These web developers are true professionals. They took our concept and transformed it into a dynamic website that our users love.",
  "The software testing team went above and beyond to guarantee our software met the highest quality standards. They are our QA heroes!",
  "Our web development project was in great hands with this team. They delivered a product that is visually stunning and functions seamlessly.",
  "The software testers provided an essential safety net for our software. They caught issues early, saving us time and money.",
  "Volunteering with this organization has been a deeply rewarding experience. I've had the opportunity to make a positive impact in my community.",
  "I'm grateful for the chance to volunteer with this group. It's given me a sense of purpose and a chance to give back.",
  "The volunteering opportunities here are diverse and fulfilling. I've met amazing people and learned valuable skills along the way.",
  "Volunteering with this nonprofit has been a life-changing experience. It's shown me the power of collective effort in making a difference.",
  "I've found true fulfillment in volunteering with this organization. It's a wonderful way to connect with others and contribute to a meaningful cause.",
];

const companyNames = [
  "ParagonSat",
  "NextNavTech",
  "AGNSS",
  "AutopilotSat",
  "GemNav",
  "GEO360",
  "Datatrix",
  "KiwiCoder",
  "Werqly",
  "NovaSoft",
  "Keysight",
  "Codescapes",
  "WEBO",
];

function randomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

async function createUser() {
  try {
    const data = await fetch("https://randomuser.me/api/").then((res) =>
      res.json()
    );

    const user = {
      firstName: data.results[0].name.first,
      lastName: data.results[0].name.last,
      thumbnail: data.results[0].picture.thumbnail,
      jobTitle: randomElement(titles),
      companyName: randomElement(companyNames),
      testimonial: randomElement(sampleTestimonials),
    };

    return user;
  } catch (error) {
    return null;
  }
}

const user1 = await createUser();
const user2 = await createUser();
const user3 = await createUser();

const testimonials = [
  {
    testimonial:
      user1?.testimonial ||
      "I thought it was impossible to make a website as beautiful as our product, but Colin proved me wrong.",
    name: user1?.firstName
      ? `${user1?.firstName} ${user1?.lastName}`
      : "Sara Lee",
    designation: user1?.jobTitle || "CFO",
    company: user1?.companyName || "Acme Co",
    image:
      user1?.thumbnail || "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      user2?.testimonial ||
      "I've never met a web developer who truly cares about their clients' success like Colin does.",
    name: user2?.firstName
      ? `${user2?.firstName} ${user2?.lastName}`
      : "Chris Brown",
    designation: user2?.jobTitle || "COO",
    company: user2?.companyName || "DEF Corp",
    image: user2?.thumbnail || "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      user3?.testimonial ||
      "After Colin optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: user3?.firstName
      ? `${user3?.firstName} ${user3?.lastName}`
      : "Lisa Wang",
    designation: user3?.jobTitle || "CTO",
    company: user3?.companyName || "456 Enterprises",
    image:
      user3?.thumbnail || "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "The Wild Oasis",
    description:
      "Internal hotel/cabin rental portal to manage dashboard, users, cabins, bookings & settings. (Use the contact form below if you would like to try the app ✌️)",
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
    date_created: new Date(2023, 6, 13),
  },
  {
    name: "GeoNotes Travel Journal",
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
        name: "aws_amplify",
        color: "red-text-gradient",
      },
    ],
    image: traveljournal,
    project_link: "https://cbhuber17.github.io/WorldWise/",
    source_code_link: "https://github.com/cbhuber17/WorldWise",
    date_created: new Date(2023, 6, 3),
  },
  {
    name: "Bugz Defect Record",
    description:
      "Similar to JIRA, a simple defect record database.  Currently under construction! 👷‍♂️",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "prisma",
        color: "green-text-gradient",
      },
      {
        name: "neon",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "sentry",
        color: "red-text-gradient",
      },
    ],
    image: defectrecord,
    project_link: "",
    source_code_link: "https://github.com/cbhuber17/bugz-defect-record",
    date_created: new Date(2023, 9, 10),
  },
  {
    name: "Collatz Conjecture",
    description: "Visualization of the 3n+1 problem.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "plotly",
        color: "green-text-gradient",
      },
      {
        name: "dash",
        color: "pink-text-gradient",
      },
    ],
    image: collatz,
    project_link: "https://collatz-conjecture-1wmr.onrender.com/",
    source_code_link: "https://github.com/cbhuber17/CollatzConjecture",
    date_created: new Date(2023, 1, 27),
  },
  {
    name: "Alberta ER Wait Times",
    description:
      "Visualization the wait times at various Calgary and Edmonton hospitals.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "plotly",
        color: "green-text-gradient",
      },
      {
        name: "dash",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "orange-text-gradient",
      },
      {
        name: "mongo",
        color: "red-text-gradient",
      },
    ],
    image: aberwait,
    project_link: "https://alberta-er-wait-times.onrender.com/",
    source_code_link: "https://github.com/cbhuber17/ERWaitTimes",
    date_created: new Date(2022, 4, 30),
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
    project_link: "https://github.com/cbhuber17/VideoGameArchive",
    source_code_link: "https://video-game-archive.vercel.app/",
    date_created: new Date(2023, 5, 21),
  },
  {
    name: "Natours Tour Booking",
    description:
      "A tour booking website, complete with user accounts and credit card payments via stipe.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "mongo",
        color: "pink-text-gradient",
      },
      {
        name: "pug",
        color: "orange-text-gradient",
      },
      {
        name: "sass",
        color: "red-text-gradient",
      },
    ],
    image: natours,
    project_link: "https://natours-ewub.onrender.com/",
    source_code_link: "https://github.com/cbhuber17/natours-api",
    date_created: new Date(2023, 2, 23),
  },
  {
    name: "Forkify",
    description: "A recipe searching and preview app.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
      {
        name: "parcel",
        color: "orange-text-gradient",
      },
    ],
    image: forkify,
    project_link: "https://forkify-bys9.onrender.com/",
    source_code_link: "https://github.com/cbhuber17/Forkify",
    date_created: new Date(2023, 2, 12),
  },
  {
    name: "Fast React Pizza Co.",
    description: "Pizza ordering app!  🍕.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcscs",
        color: "pink-text-gradient",
      },
      {
        name: "redux",
        color: "orange-text-gradient",
      },
    ],
    image: fastpizza,
    project_link: "https://cbhuber17.github.io/fast-react-pizza-co/",
    source_code_link: "https://github.com/cbhuber17/fast-react-pizza-co",
    date_created: new Date(2023, 6, 11),
  },
  {
    name: "RPG Text Adventure AI",
    description:
      "A mock Dungeons & Dragons theme app to chat with GPT regarding your situation in a dungeon 🐉.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcscs",
        color: "pink-text-gradient",
      },
      {
        name: "convex",
        color: "orange-text-gradient",
      },
      {
        name: "typescript",
        color: "red-text-gradient",
      },
    ],
    image: rpgai,
    project_link: "https://rpg-text-adventure-oco0dha61-cbhuber17.vercel.app/",
    source_code_link: "https://github.com/cbhuber17/rpg-text-adventure-ai",
    date_created: new Date(2023, 8, 13),
  },
  {
    name: "NextJS Notes",
    description: "A medieval theme note taking app.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "green-text-gradient",
      },
      {
        name: "pocketbase",
        color: "pink-text-gradient",
      },
      {
        name: "react",
        color: "orange-text-gradient",
      },
      {
        name: "typescript",
        color: "red-text-gradient",
      },
    ],
    image: nextnotes,
    project_link: "https://nextjs-notes-navy.vercel.app/",
    source_code_link: "https://github.com/cbhuber17/nextjs-notes",
    date_created: new Date(2023, 8, 18),
  },
  {
    name: "The GNSS Quiz",
    description: "Test your knowledge on GNSS!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
    ],
    image: gnssquiz,
    project_link: "https://cbhuber17.github.io/react-quiz/",
    source_code_link: "https://github.com/cbhuber17/react-quiz",
    date_created: new Date(2023, 5, 30),
  },
  {
    name: "AI Photo Album",
    description:
      "Modern tech stack of Cloudinary combined with AI to portray a different style photo album.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "cloudinary",
        color: "green-text-gradient",
      },
      {
        name: "openai",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "orange-text-gradient",
      },
      {
        name: "radix-ui",
        color: "red-text-gradient",
      },
    ],
    image: nextphoto,
    project_link: "https://nextjs-photo-album-three.vercel.app/",
    source_code_link: "https://github.com/cbhuber17/nextjs-photo-album",
    date_created: new Date(2023, 7, 10),
  },
  {
    name: "Use Popcorn",
    description:
      "A movie searching app to keep track of your favorite movies plus your choice of ratings!",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "api",
        color: "pink-text-gradient",
      },
    ],
    image: usepopcorn,
    project_link: "https://cbhuber17.github.io/use-popcorn/",
    source_code_link: "https://cbhuber17.github.io/use-popcorn/",
    date_created: new Date(2023, 5, 25),
  },
  {
    name: "Bingo Run Simulator",
    description:
      "Visualization of the results when playing BINGO 10 million times!",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "plotly",
        color: "green-text-gradient",
      },
      {
        name: "dash",
        color: "pink-text-gradient",
      },
    ],
    image: bingosim,
    project_link: "https://bingo-simulator.onrender.com/",
    source_code_link: "https://github.com/cbhuber17/BingoSimulator",
    date_created: new Date(2022, 5, 3),
  },
  {
    name: "Where am I?",
    description:
      "A simple API-fetching app to render the country you are in (and the neighboring country if applicable).",
    tags: [
      {
        name: "api",
        color: "blue-text-gradient",
      },
    ],
    image: countriesapi,
    project_link: "https://cbhuber17.github.io/CountriesAPI/",
    source_code_link: "https://github.com/cbhuber17/CountriesAPI",
    date_created: new Date(2023, 2, 10),
  },
  {
    name: "Personal Website 2004",
    description: "Retro website that I made back in my university days!",
    tags: [
      {
        name: "html4",
        color: "blue-text-gradient",
      },
      {
        name: "css2",
        color: "green-text-gradient",
      },
    ],
    image: web2004,
    project_link:
      "https://cbhuber17.github.io/website2004/public_html/html/main.html",
    source_code_link: "https://github.com/cbhuber17/website2004",
    date_created: new Date(2004, 10, 15),
  },
  {
    name: "Vietnam Blog Page",
    description:
      "My first attempt at HMTL5/CSS3 (15 years since I used HTML4/CSS2) during the pandemic in 2020.  A small blog to host travels to my favorite country.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
    ],
    image: vietnamblog,
    project_link: "https://cbhuber17.github.io/VietnamBlogPage/",
    source_code_link: "https://github.com/cbhuber17/VietnamBlogPage",
    date_created: new Date(2020, 8, 29),
  },
  {
    name: "Vietnam Tour Landing Page",
    description: "My favorite city tour landing page.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: vnlandingpage,
    project_link: "https://cbhuber17.github.io/LandingPage/",
    source_code_link: "https://github.com/cbhuber17/LandingPage",
    date_created: new Date(2020, 9, 13),
  },
  {
    name: "Event Grids Conference",
    description:
      "Looking to host a conference?  Event Grids can hook you up. A complete standard HTML/CSS/JS website.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: eventgrids,
    project_link: "https://cbhuber17.github.io/event-grids-conference/",
    source_code_link: "https://github.com/cbhuber17/event-grids-conference",
    date_created: new Date(2022, 3, 1),
  },
  {
    name: "Personal Trainer Landing Page",
    description: "Simple HTML/CSS landing page of personal trainer services.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: zeal,
    project_link: "https://cbhuber17.github.io/personal-trainer-landing-page/",
    source_code_link:
      "https://github.com/cbhuber17/personal-trainer-landing-page",
    date_created: new Date(2022, 6, 27),
  },
  {
    name: "Photographer Portfolio",
    description:
      "An effective representation of a well established photographer.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: pportfolio,
    project_link: "https://cbhuber17.github.io/photographer-portfolio/",
    source_code_link: "https://github.com/cbhuber17/photographer-portfolio",
    date_created: new Date(2022, 2, 24),
  },
  {
    name: "Packing Travel List",
    description:
      "A React Single Page Application (SPA) to keep track of items to pack for your next trip!",
    tags: [
      {
        name: "react18",
        color: "blue-text-gradient",
      },
    ],
    image: packtravel,
    project_link: "https://cbhuber17.github.io/travel-list/",
    source_code_link: "https://github.com/cbhuber17/travel-list",
    date_created: new Date(2023, 5, 21),
  },
  {
    name: "Node Farm",
    description:
      "Using NodeJS, create a mini vegetable hosting e-commerce website.",
    tags: [
      {
        name: "nodejs",
        color: "blue-text-gradient",
      },
    ],
    image: nodefarm,
    project_link: "https://node-farm-uzim.onrender.com/",
    source_code_link: "https://github.com/cbhuber17/node-farm",
    date_created: new Date(2023, 2, 21),
  },
  {
    name: "Pig Game",
    description:
      "Game where you get points equal to the dice roll.  However if you roll a 1, you lose your turn :)",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "game",
        color: "orange-text-gradient",
      },
    ],
    image: piggame,
    project_link: "https://cbhuber17.github.io/PigGame/index.html",
    source_code_link: "https://github.com/cbhuber17/PigGame",
    date_created: new Date(2022, 11, 17),
  },
  {
    name: "Guess My Number Retro",
    description: "Simple number guessing game with a retro layout!",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "game",
        color: "orange-text-gradient",
      },
    ],
    image: guessnumretro,
    project_link:
      "https://cbhuber17.github.io/guess-my-number-retro/index.html",
    source_code_link: "https://github.com/cbhuber17/guess-my-number-retro",
    date_created: new Date(2022, 11, 13),
  },
  {
    name: "Natours Landing Page",
    description:
      "A more immersive lesson in CSS, develop a fully responsive tours landing page.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: natourslanding,
    project_link: "https://cbhuber17.github.io/Natours/",
    source_code_link: "https://github.com/cbhuber17/Natours",
    date_created: new Date(2020, 10, 9),
  },
  {
    name: "Trillo",
    description:
      "More advanced CSS/SASS responsive design of a hotel booking/review page.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: trillo,
    project_link: "https://cbhuber17.github.io/Trillo/",
    source_code_link: "https://github.com/cbhuber17/Trillo",
    date_created: new Date(2020, 11, 16),
  },
  {
    name: "Nexter",
    description:
      "A complete lesson in CSS grids, showcase luxury homes from real estate agents.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "grid",
        color: "pink-text-gradient",
      },
    ],
    image: nexter,
    project_link: "https://cbhuber17.github.io/Nexter/",
    source_code_link: "https://github.com/cbhuber17/Nexter",
    date_created: new Date(2020, 11, 19),
  },
  {
    name: "Thread Portfolio Creator",
    description: "A simple landing page as a SaaS to create a portfolio.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: threadportfolio,
    project_link: "https://cbhuber17.github.io/thread-portfolio-creator/",
    source_code_link: "https://github.com/cbhuber17/thread-portfolio-creator",
    date_created: new Date(2022, 0, 15),
  },
  {
    name: "TechD",
    description: "Creative Tech Agency for Technology Solutions Landing Page",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: techd,
    project_link: "https://cbhuber17.github.io/creative-techd/",
    source_code_link: "https://github.com/cbhuber17/creative-techd",
    date_created: new Date(2022, 3, 16),
  },
  {
    name: "SaaS Landing Page",
    description: "Simple SaaS Landing Page",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: saaslanding,
    project_link: "https://cbhuber17.github.io/saas-landing-page/",
    source_code_link: "https://github.com/cbhuber17/saas-landing-page",
    date_created: new Date(2022, 1, 14),
  },
  // {
  //   name: "",
  //   description: "",
  //   tags: [
  //     {
  //       name: "",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "",
  //       color: "pink-text-gradient",
  //     },
  //     {
  //       name: "",
  //       color: "orange-text-gradient",
  //     },
  //     {
  //       name: "",
  //       color: "red-text-gradient",
  //     },
  //   ],
  // image: ,
  // project_link: "",
  // source_code_link: "",
  // date_created: new Date(yyyy, mm-1, đ),
  // },
];

const certificates = [
  {
    img: "aws.png",
    credential: "Certified Cloud Practitioner",
    issued: new Date(2023, 7, 9),
    summary:
      "Amazon Web Services offers a broad set of global cloud-based products.",
    link: "https://www.credly.com/badges/e8390a7a-b771-4ced-8b03-d120ee586d1c",
  },
  {
    img: "udacity.png",
    credential: "Full-Stack Developer Nanodegree",
    issued: new Date(2020, 11, 14),
    summary:
      "Udacity is a global, online, lifelong learning platform connecting education to jobs.",
    link: "https://confirm.udacity.com/LNUKASGH",
  },
  {
    img: "udacity.png",
    credential: "Front-End Develpoer Nanodegree",
    issued: new Date(2020, 10, 7),
    summary:
      "Udacity is a global, online, lifelong learning platform connecting education to jobs.",
    link: "https://confirm.udacity.com/DZJTQCXD",
  },
  {
    img: "istqb.png",
    credential: "Certified Tester Foundation Level",
    issued: new Date(2015, 5, 22),
    summary:
      "ISTQB® is the leading global certification program in the field of software testing.",
    link: "https://cstb.ca/certified-testers?certlevelid=1&search=huber",
  },

  {
    img: "apega.png",
    credential: "P. Eng, Professional Engineer",
    issued: new Date(2010, 5, 12),
    summary:
      "APEGA regulates the practices of engineering and geoscience in Alberta.",
    link: "https://www.apega.ca/",
  },
  {
    img: "ucalgary.png",
    credential: "BSc. Geomatics Engineering",
    issued: new Date(2005, 5, 10),
    summary:
      "Geomatics Engineering deals with the acquisition, modelling and management of spatially referenced data.",
    link: "https://schulich.ucalgary.ca/geomatics",
  },
  // UDEMY & CODE WITH MOSH
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  certificates,
  projects,
};
