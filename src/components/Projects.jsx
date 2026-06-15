import Section from './ui/Section'
import Reveal from './ui/Reveal'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Selected work"
      title="Things I've built"
      subtitle="Real products I've shipped — from ride-hailing and OCR to e-commerce and reservations."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08}>
            <ProjectCard project={p} index={i} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
