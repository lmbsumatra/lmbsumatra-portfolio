import githubLogo from "../assets/github.svg";
import linkedinlogo from "../assets/linkedin.svg";

import expressJsLogo from "../assets/logos/expressjs.svg";
import nextJsLogo from "../assets/logos/nextjs.svg";
import nodeJsLogo from "../assets/logos/nodejs.svg";
import reactJsLogo from "../assets/logos/reactjs.svg";
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
    {
      name: "GitHub",
      icon: githubLogo,
      url: "https://github.com/lmbsumatra",
    },
  ];

  const techStacks = [
    {
      name: "NextJS",
      icon: nextJsLogo,
    },
    {
      name: "ReactJS",
      icon: reactJsLogo,
    },
    {
      name: "NodeJS",
      icon: nodeJsLogo,
    },
    {
      name: "ExpressJS",
      icon: expressJsLogo,
    },
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
      subtitle: "Booking and monitong web app",
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
    if (featuredProjects && featuredProjects.length !== 0) {
      setCurrentProject(featuredProjects[0]);
    }
  }, []);

  const handleShowNextProject = (project: IProject) => {
    if (project.id === featuredProjects.length - 1) {
      setCurrentProject(featuredProjects[0]);
    } else {
      setCurrentProject(featuredProjects[project.id + 1]);
    }
  };

  const handleShowPrevProject = (project: IProject) => {
    if (project.id === 0) {
      setCurrentProject(featuredProjects[featuredProjects.length - 1]);
    } else {
      setCurrentProject(featuredProjects[project.id - 1]);
    }
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

  return (
    <div className="h-screen w-screen">
      <div className="flex justify-between p-5">
        {/* basic infos card */}
        <div className="bg-white h-auto w-100 p-5 rounded-4xl">
          <div className="text-neutral-900 flex flex-col items-center text-center gap-2">
            {/* my img */}
            <div className="bg-green-700 h-92 w-auto rounded-3xl overflow-hidden">
              <img src={headerImg} className="w-full h-full object-cover" />
            </div>

            {/* basic infos */}
            <h1 className="text-[36px] text-neutral-900 font-extrabold leading-8">
              Love Missy B. Sumatra
            </h1>

            {/* roles */}
            <div className="flex gap-2 ">
              {roles.map((role) => (
                <h2 className="text-neutral-800 font-bold">{role}</h2>
              ))}
            </div>

            {/* social links */}
            <div className="flex gap-4">
              {links.map((link) => (
                <a className="" target="_blank" href={link.url}>
                  <img src={link.icon} alt={link.name} className="h-10" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* tech stack */}
        <div className="relative bg-neutral-800 p-5 rounded-4xl h-fit">
          {/* header */}
          <div className="text-[54px] font-extrabold w-auto flex justify-between">
            <span className="text-neutral-900">TECH</span>{" "}
            <span className=" text-green-400">STACK</span>
          </div>
          {/* tech */}
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
          {/* other tools */}
          <div className="relative overflow-hidden mt-4">
            <div className="marquee-container w-100">
              <div className="marquee flex gap-4">
                {otherTools.concat(otherTools).map((tool, index) => (
                  <span
                    className="ml-4 bg-white/10 p-2 font-bold text-green-400 rounded-xl"
                    key={index}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* features projects */}
        <div className="bg-neutral-950 p-5 rounded-4xl h-fit w-100 flex flex-col gap-4">
          {/* header */}
          <div className="text-[54px] font-extrabold w-auto leading-12">
            <span className="text-neutral-800">FEATURED</span>{" "}
            <span className=" text-green-400">PROJECTS</span>
          </div>
          <div className="flex gap-4">
            {currentProject && (
              <button
                className="opacity-25 transition-all duration-300 hover:opacity-100 cursor-pointer"
                onClick={() => handleShowPrevProject(currentProject)}
              >
                <ArrowLeftCircle color="white" size={36} />
              </button>
            )}

            {currentProject && (
              <div
                className={`${currentProject.tempCard} relative h-72 w-64 rounded-3xl p-5 overflow-hidden transition-colors ease-in-out hover:bg-gradient-to-t hover:from-neutral-900/90 hover:to-green-900/50 group`}
              >
                <div className="absolute inset-0 flex flex-col justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5">
                  <h1 className="text-[36px] font-extrabold leading-10">
                    {currentProject.title}
                  </h1>
                  <h2 className="text-[16px] font-mediumbold leading-6 text-white opacity-70">
                    {currentProject.subtitle}
                  </h2>

                  <button
                    className="text-left"
                    onClick={() => setShowProjectDetails(true)}
                  >
                    Read Details
                  </button>
                  <a href="youtube.com" target="_blank">
                    Watch Demo
                  </a>
                </div>
              </div>
            )}

            {currentProject && (
              <button
                className="opacity-25 transition-all duration-300 hover:opacity-100 cursor-pointer"
                onClick={() => handleShowNextProject(currentProject)}
              >
                <ArrowRightCircle color="white" size={36} />
              </button>
            )}
          </div>
        </div>
      </div>

      {showProjectDetails && (
        <div className="fixed inset-0 bg-neutral-900/75 z-50 flex items-center justify-center">
          <div className="text-white text-2xl">hi – this is your overlay</div>
          <button
            className="text-left"
            onClick={() => setShowProjectDetails(false)}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
