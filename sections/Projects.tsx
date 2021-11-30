import { NextPage } from 'next';
import { projectsData } from '../data/projects-data';
import Project from './components/project';

const Projects: NextPage = () => {
  return (
    <div className="container min-h-screen px-2 mx-auto bg-white font-lines max-w-7xl">
      <h2
        id="projects"
        className="pt-8 mb-8 text-4xl font-bold tracking-wider font-lines"
      >
        Highlight Projects
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {projectsData.map((proj, i) => (
          <Project project={proj} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
