import { AspectRatio } from "../components/ui/AspectRatio";
import Flipable from "../assets/Screenshot 2024-09-13 at 12.25.34 PM.png";
import Workout from "../assets/Screenshot 2024-09-08 at 9.01.44 AM.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import transition from "@/components/transition";

const PROJECTS = [
  {
    previewImage: Flipable,
    id: 0,
    name: "Flipable",
    description:
      "Flipable is a free-to-use flashcard storage and practice app created using React, Node, MongoDB, Clerk, Vite, DaisyUI, and Tailwind.",
    liveLink: "https://flipable.tech/",
    repoUrl: "https://github.com/PeterMoraStevens/Flipable/",
    notLive: false,
  },
  {
    previewImage: Workout,
    id: 1,
    name: "Workout Tracker App",
    description:
      "This project was built for my Software Engineering 1 class and was created using React, Node, MongoDB, Clerk, Vite, DaisyUI, and Tailwind.",
    liveLink: "",
    repoUrl: "https://github.com/CS361-Oregon-State-University/Hexagon",
    notLive: true,
  },
];

function Work() {
  return (
    <div className="text-text dark:text-darkText mx-auto w-[750px] max-w-full px-5 pb-10 pt-28s mt-16">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Work</h1>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => {
          return (
            <div
              className="border-border dark:border-darkBorder shadow-light dark:shadow-dark rounded-base border-2 bg-mainAccent p-4 sm:p-5"
              key={id}
            >
              <AspectRatio
                className="border-border dark:border-darkBorder shadow-light dark:shadow-dark !-bottom-[2px] rounded-base border-2"
                ratio={71 / 37}
              >
                <img
                  className="rounded-base"
                  src={`${project.previewImage}`}
                  alt={project.name}
                />
              </AspectRatio>

              <div className="text-text mt-5 font-base">
                <h2 className="text-xl font-heading sm:text-2xl">
                  {project.name}
                </h2>

                <p className="mt-2">{project.description}</p>

                <div className="mt-8 flex items-center">
                  <Link to={project.liveLink} className="w-full mr-4">
                    <Button disabled={project.notLive} className="w-full">
                      Visit
                    </Button>
                  </Link>
                  <Link to={project.repoUrl} className="w-full ml-4">
                    <Button className="w-full">Github</Button>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default transition(Work);
