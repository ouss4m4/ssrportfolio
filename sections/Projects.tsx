import { NextPage } from "next";
import { projectsData } from "../data/projects-data";
import Project from "./components/project";

const Projects: NextPage = () => {
  return (
    <section
      style={{ background: "#fafafa" }}
      className="p-2 mx-auto bg-white font-lines"
    >
      <h2
        id="projects"
        className="pt-8 mt-20 mb-12 text-4xl font-bold tracking-wider text-center font-headers"
      >
        Open Source Projects
      </h2>
      <div className="grid grid-cols-1 mb-4 gap-x-10 gap-y-24 lg:grid-cols-2">
        {projectsData.map((proj, i) => (
          <Project project={proj} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
