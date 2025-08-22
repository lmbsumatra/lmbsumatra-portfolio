import githubLogo from "../assets/github.svg";
import linkedinlogo from "../assets/linkedin.svg";

import expressJsLogo from "../assets/logos/expressjs.svg";
import nextJsLogo from "../assets/logos/nextjs.svg";
import nodeJsLogo from "../assets/logos/nodejs.svg";
import reactJsLogo from "../assets/logos/reactjs.svg";
import mySQLLogo from "../assets/logos/mysql.svg";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";

import headerImg from "../assets/imgs/me.jpg";
import { useEffect, useState } from "react";

interface ICollaborators {
  name: string;
}

interface IProjectDuration {
  start: string;
  end: string;
}

interface ITechStack {
  name: string;
  icon: string;
}

interface IProject {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  url: string;
  tempCard: string;
  techStacks: ITechStack[];
  projectDuration: IProjectDuration;
  collaborators: ICollaborators[];
}

export default function Landing() {
  const roles = ["Junior Software Developer", "Manual Quality Assurance"];
  const [currentProject, setCurrentProject] = useState<IProject>();
  const [showProjectDetails, setShowProjectDetails] = useState<boolean>(false);

  const links = [
    {
      name: "LinkedIn",
      icon: linkedinlogo,
      url: "https://www.linkedin.com/in/lmbsumatra/",
    },
    { name: "GitHub", icon: githubLogo, url: "https://github.com/lmbsumatra" },
  ];

  const featuredProjects = [
    {
      id: 0,
      title: "FarmCo",
      subtitle: "Ecommerce website for farmgoods",
      description:
        "FarmCo is created to have a centralized buy and sell platform for farm goods where users can browse different items, filter items to see best options available, add them to cart, and purchase eventually purchase them. User has an option to pick between cash on delivery and online payment with Stripe payment API. \n\nOn the other hand, admin has an option to view the overview of user, items, and overall key metrics of FarmCo. Admin may delete users' account upon request; Add, update, delete, and view items anytime; allowing them to track and maintain the buy and sell platform efficiently.\n\n After the transaction, users who are buyers may create a testimonials which will be posted on the website's landing page. \n\nThe idea of this project is for farmers; for them to be able to distribute fairly farm goods in the market; for resources not to be wasted; and help them to return their investments not only with money, but also the blood and sweat they gave to produce high quality products. \n\n* Finals project required for Website Development course",
      url: "https://www.youtube.com/watch?v=N1pF5WdQVaQ",
      tempCard: "bg-green-500",
      techStacks: [
        { name: "ReactJS", icon: reactJsLogo },
        { name: "NodeJS", icon: nodeJsLogo },
        { name: "ExpressJS", icon: expressJsLogo },
        { name: "MySQL", icon: mySQLLogo },
      ],
      projectDuration: { start: "December 2023", end: "January 2024" },
      collaborators: [{ name: "Love Missy Sumatra" }],
    },
    {
      id: 1,
      title: "Studeo Space",
      subtitle: "Booking and monitoring web app",
      description:
        "Studeo Spaces, A client-based web application for booking and monitoring of study spaces Studeo Spaces, A client-based web application for booking and monitoring of study spaces A web-based booking and monitoring system developed for Studeo Spaces to replace manual processes, allowing users to book desks or rooms, receive email confirmations, and send inquiries, while allowing admins to track availability in real-time. \n\n* Finals project required for System Integration and Architecture course",
      url: "https://www.youtube.com/watch?v=3FxdwJ-ymH4",
      tempCard: "bg-yellow-500",
      techStacks: [
        { name: "ReactJS", icon: reactJsLogo },
        { name: "NodeJS", icon: nodeJsLogo },
        { name: "ExpressJS", icon: expressJsLogo },
        { name: "MySQL", icon: mySQLLogo },
      ],
      projectDuration: { start: "October 2024", end: "January 2025" },
      collaborators: [
        { name: "Angielyn Berdos" },
        { name: "Irah Fernandez" },
        { name: "Christian Manzano" },
        { name: "Khaylle Rosario" },
        { name: "Love Missy Sumatra" },
      ],
    },
    {
      id: 2,
      title: "RenTUPeers",
      subtitle: "Peer-to-peer rental platform",
      description: `RenTUPeers is a peer-to-peer web platform built for TUP-Manila students, enabling campus-based rentals, buy-and-sell, and “looking for” posts — complete with online payments, transaction tracking, and real-time communication, all developed using modern web technologies. Tested for functionality and reliability, the system received high acceptance, showing it effectively addresses students’ rental and resource-sharing needs. \n\n * A Capstone Project`,
      url: "https://www.youtube.com/watch?v=RAK5phUUN-k",
      tempCard: "bg-cyan-500",
      techStacks: [
        { name: "ReactJS", icon: reactJsLogo },
        { name: "NodeJS", icon: nodeJsLogo },
        { name: "ExpressJS", icon: expressJsLogo },
        { name: "MySQL", icon: mySQLLogo },
      ],
      projectDuration: { start: "October 2024", end: "April 2025" },
      collaborators: [
        { name: "Angielyn Berdos" },
        { name: "Irah Fernandez" },
        { name: "Christian Manzano" },
        { name: "Khaylle Rosario" },
        { name: "Love Missy Sumatra" },
      ],
    },
  ];

  useEffect(() => {
    if (featuredProjects.length > 0) setCurrentProject(featuredProjects[0]);
  }, []);

  const handleShowNextProject = (project: IProject) => {
    setCurrentProject(
      project.id === featuredProjects.length - 1
        ? featuredProjects[0]
        : featuredProjects[project.id + 1]
    );
  };

  const handleShowPrevProject = (project: IProject) => {
    setCurrentProject(
      project.id === 0
        ? featuredProjects[featuredProjects.length - 1]
        : featuredProjects[project.id - 1]
    );
  };

  function getYouTubeId(url: string): string {
    try {
      const match = url.match(
        /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/))([^\s&]+)/
      );
      return match ? match[1] : "";
    } catch {
      return "";
    }
  }

  const otherTools = [
    "TailwindCSS",
    "Bootstrap",
    "Redux Toolkit",
    "Socket.io",
    "Zustand",
    "Tanstack Query",
    "ShadCN",
    "Sequelize",
    "FastAPI",
    "MySQL",
    "Stripe",
    "Paymongo",
    "Laravel",
    "Cloudinary",
  ];

  const currentStats = [
    { number: 1, context: "Year(s) of Experience" },
    { number: 4, context: "Completed Projects" },
    { number: 2, context: "Programming Languages" },
  ];

  const techStacks = [
    { name: "NextJS", icon: nextJsLogo },
    { name: "ReactJS", icon: reactJsLogo },
    { name: "NodeJS", icon: nodeJsLogo },
    { name: "ExpressJS", icon: expressJsLogo },
    { name: "MySQL", icon: mySQLLogo },
  ];

  return (
    <div className="min-h-screen w-full p-4 sm:p-6 md:p-8 flex flex-col gap-6 lg:flex-row lg:justify-between">
      {/* Row 1: Basic Info */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white h-fit w-full p-5 rounded-4xl">
          <div className="text-neutral-900 flex flex-col items-center text-center gap-4">
            <div className="bg-green-700 w-full max-h-96 rounded-3xl overflow-hidden">
              <img src={headerImg} className="w-full h-auto object-cover" />
            </div>
            <h1 className="text-5xl sm:text-5xl md:text-4xl lg:text-[40px] font-extrabold leading-tight">
              Love Missy B. Sumatra
            </h1>
            <div className="flex flex-wrap justify-center gap-2">
              {roles.map((role, idx) => (
                <h2
                  key={idx}
                  className="text-lg sm:text-xl md:text-2xl text-neutral-800 font-bold"
                >
                  {role}
                </h2>
              ))}
            </div>
          </div>
          <div className="mt-4 italic inline-block text-left leading-4">
            <p>Portfolio Version 1</p>

            <a href="https://lmbsumatraportfolio.vercel.app/" className="underline" target="_blank">
              https://lmbsumatraportfolio.vercel.app/
            </a>
          </div>
        </div>
      </div>

      {/* Row 2: Intro + Tech Stack */}
      <div className="w-full flex flex-col md:flex-row gap-4 lg:w-1/3 lg:flex-col">
        <div className="h-auto bg-green-500 p-5 rounded-4xl w-full md:w-1/2 md:h-full flex flex-col gap-4 lg:w-full lg:h-fit">
          <div className="text-5xl sm:text-5xl md:text-4xl lg:text-[46px] font-extrabold flex flex-wrap justify-between gap-1 leading-tight">
            <span className="text-white">HELLO!</span>
            <span className="text-neutral-900">I'M MISSY</span>
          </div>
          <div className="text-neutral-950/90 text-base sm:text-lg md:text-xl font-semibold leading-6">
            — Aspiring QA and software developer dedicated to improving skills
            and delivering reliable solutions
          </div>
          <div className="flex flex-wrap justify-between gap-4">
            {currentStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/25 p-3 rounded-2xl w-full lg:w-28 text-right sm:w-full"
              >
                <h1 className="text-5xl sm:text-2xl md:text-[64px] lg:text-4xl font-extrabold text-white leading-tight">
                  {stat.number} +
                </h1>
                <h2 className="text-xl lg:text-[14px] sm:text-base md:text-lg font-medium text-white/90 leading-6">
                  {stat.context}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-neutral-800 p-5 rounded-4xl h-fit w-full md:w-1/2 lg:w-full">
          <div className="text-5xl sm:text-5xl md:text-4xl lg:text-[54px] font-extrabold flex justify-between">
            <span className="text-neutral-900">TECH</span>
            <span className="text-green-400">STACK</span>
          </div>
          <div className="flex flex-wrap justify-between gap-1">
            {techStacks &&
              techStacks.map((tech) => (
                <img
                  key={tech.icon}
                  className="h-16 sm:h-16 md:h-14 lg:h-16 w-auto bg-white p-2 rounded-2xl"
                  src={tech.icon}
                  alt={tech.name}
                />
              ))}
          </div>
          <div className="relative overflow-hidden mt-4">
            <div className="marquee-container w-full">
              <div className="marquee flex gap-4 animate-marquee">
                {otherTools.concat(otherTools).map((tool, index) => (
                  <span
                    key={index}
                    className="ml-4 bg-white/10 p-2 text-sm sm:text-base font-bold text-green-400 rounded-xl whitespace-nowrap"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3: Projects + Reach Out */}
      <div className="h-full w-full flex flex-col md:flex-row gap-4 lg:w-1/3 lg:flex-col">
        <div className="bg-neutral-950 p-5 rounded-4xl w-full md:w-1/2 flex flex-col gap-4 lg:w-full">
          <div className="text-5xl sm:text-5xl md:text-4xl lg:text-3xl font-extrabold flex flex-col leading-8 text-right">
            <span className="text-neutral-800">FEATURED</span>
            <span className="text-green-400 text-6xl lg:text-5xl sm:text-6xl md:text-[72px]">
              PROJECTS
            </span>
          </div>
          <div className="flex gap-4 items-center justify-center">
            {currentProject && (
              <>
                <button
                  className="opacity-25 hover:opacity-100 transition-all duration-300"
                  onClick={() => handleShowPrevProject(currentProject)}
                >
                  <ArrowLeftCircle color="white" size={36} />
                </button>

                <div
                  className={`${currentProject.tempCard} relative h-64 sm:h-72 w-full sm:w-64 rounded-3xl p-5 overflow-hidden transition-colors bg-green-900 group hover:bg-gradient-to-t hover:from-neutral-900/90 hover:to-green-900/50`}
                >
                  {/* Background iframe */}
                  <div className="absolute inset-0 z-0 pointer-events-none">
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(
                        currentProject.url
                      )}?&mute=1&controls=0&loop=1&playlist=${getYouTubeId(
                        currentProject.url
                      )}`}
                      title={currentProject.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full object-cover "
                    ></iframe>
                  </div>

                  <div className="relative z-10 aspect-w-16 aspect-h-9 h-100 w-full rounded-lg overflow-hidden mb-6"></div>

                  <div
                    className={`absolute inset-0 flex flex-col justify-center text-white opacity-100 lg:opacity-0 sm:opacity-100 group-hover:opacity-100 transition-opacity duration-300 p-5 z-20 ${currentProject.tempCard} group hover:bg-gradient-to-t hover:from-neutral-900/90 hover:to-green-900/50`}
                  >
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-tight">
                      {currentProject.title}
                    </h1>
                    <h2 className="text-sm sm:text-base font-medium leading-6 opacity-70">
                      {currentProject.subtitle}
                    </h2>
                    <button
                      className="text-left underline cursor-pointer"
                      onClick={() => setShowProjectDetails(true)}
                    >
                      Read Details
                    </button>
                    <a
                      href={currentProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      Watch Demo
                    </a>
                  </div>
                </div>

                <button
                  className="opacity-25 hover:opacity-100 transition-all duration-300"
                  onClick={() => handleShowNextProject(currentProject)}
                >
                  <ArrowRightCircle color="white" size={36} />
                </button>
              </>
            )}
          </div>
        </div>

        <div className="bg-white h-full w-full p-5 rounded-4xl md:w-1/2 lg:w-full">
          <div className="text-neutral-900 flex flex-col items-center text-center gap-2">
            <div className="text-5xl sm:text-5xl md:text-4xl lg:text-[54px] font-extrabold flex justify-between gap-2">
              <span className="text-neutral-900">REACH</span>
              <span className="text-green-400">OUT</span>
            </div>
            <div className="flex gap-4 mt-2">
              {links.map((link, idx) => (
                <a key={idx} target="_blank" href={link.url}>
                  <img
                    src={link.icon}
                    alt={link.name}
                    className="h-8 sm:h-10 w-auto"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {showProjectDetails && currentProject && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4 sm:p-8">
          <div className="bg-white w-full max-w-4xl rounded-2xl overflow-auto max-h-[90vh] p-6 relative">
            <button
              onClick={() => setShowProjectDetails(false)}
              className="absolute top-4 right-4 text-neutral-600 hover:text-black text-xl font-bold"
            >
              ✕
            </button>

            {/* Video Embed */}
            <div className="aspect-w-16 aspect-h-9 h-100 w-full rounded-lg overflow-hidden mb-6">
              <iframe
                src={`https://www.youtube.com/embed/${getYouTubeId(
                  currentProject.url
                )}`}
                title={currentProject.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Title + Subtitle */}
            <div className="mb-4">
              <h1 className="text-3xl font-bold text-neutral-900">
                {currentProject.title}
              </h1>
              <p className="text-neutral-600 text-lg">
                {currentProject.subtitle}
              </p>
            </div>

            {/* Description */}
            <p className="mb-4 text-neutral-800 whitespace-pre-line">
              {currentProject.description}
            </p>

            {/* Tech + Tools */}
            <div className="mb-4">
              <h2 className="font-bold text-neutral-700 mb-2">
                Tech Stack & Tools
              </h2>
              <div className="flex flex-wrap gap-2">
                {currentProject.techStacks.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-2 bg-neutral-100 px-3 py-1 rounded-xl"
                  >
                    <img src={tech.icon} alt={tech.name} className="w-5 h-5" />
                    <span className="text-sm text-neutral-800">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contributors */}
            <div className="mb-4">
              <h2 className="font-bold text-neutral-700 mb-2">Contributors</h2>
              <ul className="list-disc list-inside text-neutral-800">
                {currentProject &&
                  currentProject.collaborators.map((col) => (
                    <li>{col.name}</li>
                  ))}
              </ul>
            </div>

            {/* Project Dates */}
            <div className="mb-4">
              <h2 className="font-bold text-neutral-700 mb-2">
                Project Timeline
              </h2>
              <p className="text-neutral-800">
                <strong>Start:</strong> {currentProject.projectDuration.start}
                <br />
                <strong>End:</strong> {currentProject.projectDuration.end}
              </p>
            </div>

            {/* <div className="mb-2">
              <h2 className="font-bold text-neutral-700 mb-2">
                Project Repository
              </h2>
              <a
                href="https://github.com/lmbsumatra/sample-project"
                target="_blank"
                className="text-green-600 underline hover:text-green-800"
              >
                View on GitHub →
              </a>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
