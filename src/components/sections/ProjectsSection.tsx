import { PROJECTS_DATA } from '@/lib/constants';
import { ProjectCard } from '@/components/shared/ProjectCard';
import { SectionWrapper } from '@/components/shared/SectionWrapper';

export function ProjectsSection() {
  return (
    <SectionWrapper
      id="projects"
      title="My Recent Work"
      subtitle="Here's a glimpse of projects I've passionately built. Each one reflects my commitment to quality and innovation."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {PROJECTS_DATA.map((project, index) => (
          <div key={project.id} className="animate-slide-in" style={{ animationDelay: `${index * 0.1 + 0.2}s`, animationFillMode: 'backwards' }}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
