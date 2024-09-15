import {
  ResumeContent,
  Header,
  BrandStatement,
  Project,
  WorkExperience,
  Education,
  Skills,
} from "./types";

// Define the content as per the interface
const header: Header = {
  name: "Andrew Morrison",
  title: "Software Engineer",
  email: "me@andrewmorrison.dev",
  location: "New York, NY",
  links: {
    github: "https://github.com/andrewmorrisondev",
    linkedin: "https://www.linkedin.com/in/andy-morrison-b94945246/",
  },
};

const brandStatement: BrandStatement = {
  title: "Brand Statement",
  statement:
    "Transitioning from the service industry to software engineering, my unwavering commitment to radical empathy fuels my purpose. By fusing my unique background with technical expertise, I forge solutions that not only revolutionize technology but also empower individuals, making an indomitable mark on both industries.",
};

const projects: Project[] = [
  {
    title: "The Great Pin Pursuit, Disney - Staging Site",
    date: "August 2024",
    description:
      "An interactive scavenger hunt live at the 2024 D23 Expo offers an engaging experience across devices, allowing attendees to explore themed challenges and earn rewards. Featuring real-time updates, location-based clues, and interactive elements, it enhances attendee participation and event immersion.",
  },
  {
    title: "The World’s Largest Tailgate, Kansas City Chiefs - Staging Site",
    date: "September 2024",
    description:
      "A fully responsive live streaming page provides an immersive experience across phones, tablets, and desktops, featuring interactive elements like an AR photo booth with live preview, and customizable overlays. Post-event content, quizzes, and polling interfaces enhance audience engagement, ensuring a dynamic, high-quality experience.",
  },
  {
    title: "VYNL - Full Stack Developer (MongoDB, Express.js, NodeJs)",
    date: "April 2023",
    description:
      "A social app built with the MEN stack. Show off your favorite records, see your friends' niche tastes.",
  },
  {
    title: "Snake - Front End Developer (JavaScript, CSS)",
    date: "April 2023",
    description:
      "A classic arcade game, based on the recreation by Taneli Armanto of Nokia for the Nokia 6110.",
  },
];

const workExperience: WorkExperience[] = [
  {
    title: "Contract Software Engineer",
    company: "Little Cinema Digital",
    date: "April 2024 - Present",
    description:
      "▪ Engineered scalable web solutions for high-profile clients in the entertainment and tech industries, enhancing their digital content delivery and user engagement across platforms. ▪ Collaborated closely with clients to translate complex requirements into robust, efficient codebases, ensuring seamless integration with third-party systems and APIs. ▪ Led the development of custom software features for brands like Disney, Netflix, Amazon Prime, optimizing digital experiences to drive growth and customer satisfaction. ▪ Architected modular, reusable components to streamline front-end and back-end workflows, improving development efficiency for both internal and client projects. ▪ Utilized cutting-edge technologies (React, TypeScript, Remix, etc.) to build dynamic, responsive applications that support millions of users across diverse client ecosystems. ▪ Drove innovation by integrating modern DevOps practices like CI/CD pipelines, automated testing, and cloud infrastructure management to support rapid deployment for client projects.",
  },
  {
    title: "Bartender",
    company: "North Moore Oysters LLC, Smith & Mills",
    date: "Oct. 2019 - Dec. 2023",
    description:
      "▪ Managed nightly sales ranging from $5,000 to $10,000 and curated seasonal cocktail menus, significantly boosting customer satisfaction and repeat business. ▪ Developed strong customer relations and enhanced the overall dining experience.",
  },
];

const education: Education[] = [
  {
    degree: "B.M. in Music Education, Opera and Voice Concentration",
    institution:
      "Crane School of Music, State University of New York at Potsdam",
    year: "2017",
  },
  {
    degree: "Software Engineering Intensive",
    institution: "General Assembly",
    year: "2023",
  },
];

const skills: Skills = {
  title: "Skills",
  description:
    "TypeScript, JavaScript, React, Remix, Next.js, Vercel, React Router, Redux, CSS3, PostCSS, Tailwind CSS, MUI, Ruby, Ruby on Rails, HTML5, Git, NodeJs, Express.js, PostgreSQL, MongoDB, Axios, RSpec, Jest, Jasmine, Capybara, Postman, JQuery, Markdown, VS Code, Makefile, ESLint",
};

// Export the content object
const content: ResumeContent = {
  header,
  brandStatement,
  projects,
  workExperience,
  education,
  skills,
};

export default content;
