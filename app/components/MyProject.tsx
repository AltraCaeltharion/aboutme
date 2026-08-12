import SectionHeader from './SectionHeader';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolio';

export default function MyProject() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center p-8 bg-[#030303]">
      <div className="max-w-6xl w-full py-20">
        <SectionHeader label="My Project" className="mb-16" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
