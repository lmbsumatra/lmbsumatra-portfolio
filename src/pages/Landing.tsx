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

interface IProject {
  id: number;
  title: string;
  subtitle: string;
  url: string;
  tempCard: string;
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

  const techStacks = [
    { name: "NextJS", icon: nextJsLogo },
    { name: "ReactJS", icon: reactJsLogo },
    { name: "NodeJS", icon: nodeJsLogo },
    { name: "ExpressJS", icon: expressJsLogo },
    { name: "MySQL", icon: mySQLLogo },
  ];

  const featuredProjects = [
    {
      id: 0,
      title: "FarmCo",
      subtitle: "Ecommerce website for farmgoods",
      url: "youtube.com",
      tempCard: "bg-green-500",
    },
    {
      id: 1,
      title: "Studeo Space",
      subtitle: "Booking and monitoring web app",
      url: "youtube.com",
      tempCard: "bg-yellow-500",
    },
    {
      id: 2,
      title: "RenTUPeers",
      subtitle: "Peer-to-peer rental platform",
      url: "youtube.com",
      tempCard: "bg-cyan-500",
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

  return (
    <div className="min-h-screen w-full p-5 flex flex-col gap-5 lg:flex-row lg:justify-between">
      {/* Row 1: Basic Info */}
      <div className="w-full lg:w-1/3">
        <div className="bg-white h-full w-full p-5 rounded-4xl">
          <div className="text-neutral-900 flex flex-col items-center text-center gap-4">
            <div className="bg-green-700 h-92 w-auto rounded-3xl overflow-hidden">
              <img src={headerImg} className="w-full h-full object-cover" />
            </div>
            <h1 className="text-[40px] font-extrabold leading-8">
              Love Missy B. Sumatra
            </h1>
            <div className="flex gap-2">
              {roles.map((role, idx) => (
                <h2
                  key={idx}
                  className="text-[24px] text-neutral-800 font-bold"
                >
                  {role}
                </h2>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Intro + Tech Stack */}
      <div className="w-full flex flex-col md:flex-row gap-4 lg:w-1/3 lg:flex-col">
        <div className="h-auto bg-green-500 p-5 rounded-4xl w-full md:w-1/2 md:h-full flex flex-col gap-4 lg:w-full">
          <div className="text-[46px] font-extrabold flex justify-between gap-2 leading-12">
            <span className="text-white">HELLO!</span>
            <span className="text-neutral-900">I'M MISSY</span>
          </div>
          <div className="text-neutral-950/90 text-[20px] font-semibold leading-6">
            — Aspiring QA and software developer dedicated to improving skills
            and delivering reliable solutions
          </div>
          <div className="flex justify-between gap-2">
            {currentStats.map((stat, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/25 p-3 rounded-2xl w-36 text-right"
              >
                <h1 className="text-[64px] font-extrabold text-white leading-14">
                  {stat.number} +
                </h1>
                <h2 className="text-[18px] font-medium text-white/90 leading-6">
                  {stat.context}
                </h2>
              </div>
            ))}
          </div>
        </div>

        <div className="relative bg-neutral-800 p-5 rounded-4xl h-fit w-full  md:h-1/1 md:w-1/2 lg:w-full">
          <div className="text-[54px] font-extrabold flex justify-between">
            <span className="text-neutral-900">TECH</span>
            <span className="text-green-400">STACK</span>
          </div>
          <div className="flex gap-2 justify-between">
            {techStacks.map((tech) => (
              <img
                key={tech.icon}
                className="h-18 w-fit bg-white p-2 rounded-2xl"
                src={tech.icon}
                alt={tech.name}
              />
            ))}
          </div>
          <div className="relative overflow-hidden mt-4">
            <div className="marquee-container w-110">
              <div className="marquee flex gap-4">
                {otherTools.concat(otherTools).map((tool, index) => (
                  <span
                    key={index}
                    className="ml-4 bg-white/10 p-2 font-bold text-green-400 rounded-xl"
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
        <div className="bg-neutral-950 p-5 rounded-4xl w-full md:w-1/2 flex flex-col gap-4 lg:w-full ">
          <div className="text-[54px] font-extrabold flex flex-col leading-12 text-right">
            <span className="text-neutral-800">FEATURED</span>
            <span className="text-green-400 text-[72px]">PROJECTS</span>
          </div>
          <div className="flex gap-4">
            {currentProject && (
              <>
                <button
                  className="opacity-25 hover:opacity-100 transition-all duration-300"
                  onClick={() => handleShowPrevProject(currentProject)}
                >
                  <ArrowLeftCircle color="white" size={36} />
                </button>

                <div
                  className={`${currentProject.tempCard} relative h-72 w-64 rounded-3xl p-5 overflow-hidden transition-colors hover:bg-gradient-to-t hover:from-neutral-900/90 hover:to-green-900/50 group`}
                >
                  <div className="absolute inset-0 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
                    <h1 className="text-[36px] font-extrabold leading-10">
                      {currentProject.title}
                    </h1>
                    <h2 className="text-[16px] font-medium leading-6 opacity-70">
                      {currentProject.subtitle}
                    </h2>
                    <button
                      className="text-left"
                      onClick={() => setShowProjectDetails(true)}
                    >
                      Read Details
                    </button>
                    <a
                      href={currentProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
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
            <div className="text-[54px] font-extrabold flex justify-between">
              <span className="text-neutral-900">REACH</span>
              <span className="text-green-400">OUT</span>
            </div>
            <div className="flex gap-4">
              {links.map((link, idx) => (
                <a key={idx} target="_blank" href={link.url}>
                  <img src={link.icon} alt={link.name} className="h-10" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {showProjectDetails && (
        <div className="fixed inset-0 bg-neutral-900/75 z-50 flex items-center justify-center">
          <div className="text-white text-2xl">hi – this is your overlay</div>
          <button onClick={() => setShowProjectDetails(false)}>Close</button>
        </div>
      )}
    </div>
  );
}
